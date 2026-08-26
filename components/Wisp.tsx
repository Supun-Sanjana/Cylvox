'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { ScanIssue, ScanResult } from '@/lib/wisp/types';
import { buildContactUrl } from '@/lib/wisp/buildContactUrl';
import styles from './Wisp.module.css';

type MascotState = 'idle' | 'scanning' | 'worried' | 'happy';

const SCAN_TICKER_LINES = [
  'poking at your <head> tags…',
  "checking who's noindexed…",
  'counting author bios…',
  'looking for FAQ schema…',
  'cross-referencing robots.txt…',
];

class ScanRequestError extends Error {
  code: string;
  constructor(code: string, message: string) {
    super(message);
    this.code = code;
  }
}

async function requestScan(url: string): Promise<ScanResult> {
  const res = await fetch('/api/wisp-scan', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new ScanRequestError(
      data?.error ?? 'unknown',
      data?.message ?? 'Something went wrong scanning that site.'
    );
  }

  return data as ScanResult;
}

function cx(...classes: Array<string | false | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

export default function Wisp() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [showGreet, setShowGreet] = useState(false);
  const [blink, setBlink] = useState(false);
  const [mascotState, setMascotState] = useState<MascotState>('idle');

  const [url, setUrl] = useState('');
  const [scannedDomain, setScannedDomain] = useState('');
  const [scanning, setScanning] = useState(false);
  const [ticker, setTicker] = useState("Paste a URL and I'll take a look.");
  const [verdict, setVerdict] = useState('');
  const [issues, setIssues] = useState<ScanIssue[] | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [gateEmail, setGateEmail] = useState('');
  const [gateSubmitted, setGateSubmitted] = useState(false);
  const [gateLoading, setGateLoading] = useState(false);
  const [gateError, setGateError] = useState<string | null>(null);
  const [gateReportUrl, setGateReportUrl] = useState<string | null>(null);

  const confettiRef = useRef<HTMLDivElement>(null);
  const tickerIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Show the greeting bubble once ever per browser, not once per page load.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.localStorage.getItem('wisp_greeted')) return;

    const showTimer = setTimeout(() => setShowGreet(true), 800);
    const hideTimer = setTimeout(() => {
      setShowGreet(false);
      window.localStorage.setItem('wisp_greeted', '1');
    }, 5800);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Idle blink loop, independent of scan state.
  useEffect(() => {
    const id = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 140);
    }, 3600);
    return () => clearInterval(id);
  }, []);

  // Don't leak the ticker interval if the component unmounts mid-scan.
  useEffect(() => {
    return () => {
      if (tickerIntervalRef.current) clearInterval(tickerIntervalRef.current);
    };
  }, []);

  function togglePanel() {
    setOpen((o) => !o);
    setShowGreet(false);
  }

  function fireConfetti() {
    const container = confettiRef.current;
    if (!container) return;
    const colors = ['#22c58e', '#b494fb', '#3fe0a8', '#e9f2ec'];

    for (let i = 0; i < 40; i++) {
      const el = document.createElement('div');
      el.className = styles.confetti;
      el.style.background = colors[i % colors.length];
      el.style.left = `${Math.random() * 140 - 70}px`;
      el.style.top = '0px';
      const dx = Math.random() * 200 - 100;
      const dy = 220 + Math.random() * 120;
      const rot = Math.random() * 360;
      el.style.transition = `transform ${900 + Math.random() * 500}ms cubic-bezier(.2,.6,.3,1), opacity 900ms ease`;
      container.appendChild(el);

      requestAnimationFrame(() => {
        el.style.transform = `translate(${dx}px, ${dy}px) rotate(${rot}deg)`;
        el.style.opacity = '0';
      });
      setTimeout(() => el.remove(), 1500);
    }
  }

  async function handleScan() {
    if (!url.trim() || scanning) return;

    setScanning(true);
    setMascotState('scanning');
    setIssues(null);
    setErrorMessage(null);
    setVerdict('');

    let i = 0;
    setTicker(SCAN_TICKER_LINES[0]);
    tickerIntervalRef.current = setInterval(() => {
      i = (i + 1) % SCAN_TICKER_LINES.length;
      setTicker(SCAN_TICKER_LINES[i]);
    }, 700);

    try {
      const result = await requestScan(url);
      const criticalCount = result.issues.filter((iss) => iss.sev === 'critical').length;
      
      let domainStr = '';
      try {
        domainStr = new URL(result.finalUrl).hostname;
      } catch {
        domainStr = url;
      }
      setScannedDomain(domainStr);

      if (result.clean) {
        setMascotState('happy');
        setVerdict(
          result.issues.length === 0
            ? 'Nothing to flag — clean scan.'
            : `${result.issues.length} minor note${result.issues.length > 1 ? 's' : ''} — otherwise clean`
        );
        setTicker(result.issues.length === 0 ? 'Looking good.' : 'Looking good, mostly.');
        setTimeout(fireConfetti, 50);
      } else {
        setMascotState('worried');
        setVerdict(`${result.issues.length} issue${result.issues.length > 1 ? 's' : ''} found on your homepage`);
        setTicker(`Found ${criticalCount} thing${criticalCount === 1 ? '' : 's'} worth fixing.`);
      }

      setIssues(result.issues);
    } catch (err) {
      setMascotState('worried');
      const message = err instanceof ScanRequestError ? err.message : 'Could not complete that scan.';
      setErrorMessage(message);
      setTicker(message);
      setIssues([]);
    } finally {
      if (tickerIntervalRef.current) clearInterval(tickerIntervalRef.current);
      setScanning(false);
    }
  }

  // These three are intentionally stubs — see README-wisp-scan.md for what
  // each needs before it's real (fix guide content, contact form, email
  // capture + multi-page scan queue).
  function handleFixSelf() {
    alert('Would expand into a short "fix this yourself" guide per issue.');
  }

  async function handleContact() {
    if (!issues) return;
    try {
      await fetch('/api/wisp-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          domain: scannedDomain,
          issues,
          source: 'contact'
        })
      });
    } catch (err) {
      console.error('Failed to log lead', err);
    }
    router.push(buildContactUrl(scannedDomain, issues));
  }

  async function handleEmailGate() {
    if (!gateEmail || !scannedDomain || !issues) return;
    setGateLoading(true);
    setGateError(null);
    try {
      const res = await fetch('/api/wisp-scan-multi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: gateEmail,
          url: scannedDomain,
          issues,
        })
      });
      const data = await res.json();
      if (!res.ok) {
        setGateError(data?.message ?? "Couldn't scan the rest of the site — try again shortly.");
        return;
      }
      setGateReportUrl(data.reportUrl);
      setGateSubmitted(true);
    } catch (err) {
      console.error('Failed to run multi-page scan', err);
      setGateError("Couldn't scan the rest of the site — try again shortly.");
    } finally {
      setGateLoading(false);
    }
  }

  return (
    <div className={styles.wispRoot}>
      {showGreet && <div className={styles.greet}>Hi. I&rsquo;m Wisp — want me to look at this site?</div>}

      <div className={cx(styles.panel, open && styles.panelOpen)}>
        <div className={styles.panelHead}>
          <button className={styles.panelClose} onClick={() => setOpen(false)} aria-label="Close">
            ✕
          </button>

          <Mascot state={mascotState} blink={blink} />

          <div className={styles.ticker}>{ticker}</div>
          <div className={styles.lore}>
            Wisp finds the dark corners search engines skip — noindexed pages, missing bios, broken
            schema — and lights them up.
          </div>
        </div>

        <div className={styles.panelBody}>
          <div className={styles.inputRow}>
            <input
              className={styles.input}
              type="text"
              placeholder="yoursite.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleScan()}
            />
            <button className={cx(styles.btn, styles.btnPrimary)} onClick={handleScan} disabled={scanning}>
              {scanning ? '…' : 'Go'}
            </button>
          </div>
          <div className={styles.hint}>Homepage only · free · nothing leaves your site</div>

          {issues && (
            <div className={styles.results}>
              {verdict && <div className={styles.verdict}>{verdict}</div>}

              {issues.map((issue) => (
                <div className={styles.issue} key={issue.id}>
                  <span
                    className={cx(styles.sev, issue.sev === 'critical' ? styles.sevCritical : styles.sevMinor)}
                  >
                    {issue.sev}
                  </span>
                  <div className={styles.issueBody}>
                    <b>{issue.title}</b>
                    <span>{issue.body}</span>
                  </div>
                </div>
              ))}

              {!errorMessage && issues.length > 0 && (
                <>
                  <div className={styles.ctaRow}>
                    <button className={cx(styles.btn, styles.btnGhost)} onClick={handleFixSelf}>
                      Fix it myself
                    </button>
                    <button className={cx(styles.btn, styles.btnPrimary)} onClick={handleContact}>
                      Have Cylvox fix it
                    </button>
                  </div>
                  <div className={styles.gate}>
                    {gateSubmitted ? (
                      <div className={styles.gateSuccess}>
                        <p>Done — we&apos;ve emailed the full report to {gateEmail}.</p>
                        {gateReportUrl && (
                          <p>
                            <a href={gateReportUrl} className={styles.gateReportLink}>
                              View it now →
                            </a>
                          </p>
                        )}
                      </div>
                    ) : (
                      <>
                        <p>Your other pages on {scannedDomain || 'this site'} likely have the same problem — enter your email and I&apos;ll check up to 8 of them now.</p>
                        <div className={styles.gateInputRow}>
                          <input 
                            className={styles.input} 
                            type="email" 
                            placeholder="you@domain.com"
                            value={gateEmail} 
                            onChange={(e) => setGateEmail(e.target.value)} 
                          />
                          <button className={cx(styles.btn, styles.btnGhost)} onClick={handleEmailGate} disabled={gateLoading || !gateEmail}>
                            {gateLoading ? 'Scanning…' : 'Scan full site →'}
                          </button>
                        </div>
                        <p className={styles.gateDisclosure}>
                          Scanning up to 8 pages takes under a minute. We&apos;ll email you a link either way — you don&apos;t have to wait here.
                        </p>
                        {gateError && <p className={styles.gateDisclosure}>{gateError}</p>}
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <button className={styles.bubble} onClick={togglePanel} aria-label="Open Wisp">
        <MascotIcon />
      </button>

      <div ref={confettiRef} className={styles.confettiContainer} />
    </div>
  );
}

function Mascot({ state, blink }: { state: MascotState; blink: boolean }) {
  return (
    <svg
      className={cx(
        styles.mascot,
        state === 'scanning' && styles.stateScanning,
        state === 'worried' && styles.stateWorried,
        state === 'happy' && styles.stateHappy,
        blink && styles.blink
      )}
      viewBox="0 0 120 120"
    >
      <defs>
        <radialGradient id="slimeBody" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#a3ffcf" />
          <stop offset="100%" stopColor="#22c58e" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g className={styles.mFloat}>
        {/* Glow behind body */}
        <path d="M 35,60 C 35,30 45,20 60,20 C 75,20 85,30 85,60 C 85,80 70,80 60,80 C 50,80 35,80 35,60" fill="#22c58e" opacity="0.4" filter="url(#glow)" />
        
        {/* Main blob body */}
        <path d="M 35,60 C 35,30 45,20 60,20 C 75,20 85,30 85,60 C 85,80 70,80 60,80 C 50,80 35,80 35,60" fill="url(#slimeBody)" className={styles.mBody} />

        {/* Highlight / gelatinous shine */}
        <path d="M 45,30 C 50,27 55,27 60,28 C 55,31 50,37 45,45 C 44,40 43,35 45,30" fill="#ffffff" opacity="0.6" />

        {/* Little stubby arms */}
        <path d="M 35,50 Q 25,45 28,55 Q 32,60 38,57" fill="url(#slimeBody)" />
        <path d="M 85,50 Q 95,45 92,55 Q 88,60 82,57" fill="url(#slimeBody)" />

        {/* Eyes (grouped for blink animation) */}
        <g className={styles.mEye} style={{ transformOrigin: '52px 50px' }}>
          <ellipse cx="52" cy="50" rx="4.5" ry="6.5" fill="#0a1210" />
          <circle cx="51" cy="48" r="1.5" fill="#ffffff" />
        </g>
        <g className={styles.mEye} style={{ transformOrigin: '68px 50px' }}>
          <ellipse cx="68" cy="50" rx="4.5" ry="6.5" fill="#0a1210" />
          <circle cx="67" cy="48" r="1.5" fill="#ffffff" />
        </g>
        
        {/* Mouths based on state */}
        {state === 'worried' ? (
          <path d="M 57,60 Q 60,57 63,60" fill="none" stroke="#0a1210" strokeWidth="2.5" strokeLinecap="round" />
        ) : state === 'scanning' ? (
          <circle cx="60" cy="58" r="2" fill="none" stroke="#0a1210" strokeWidth="2" />
        ) : state === 'happy' ? (
          <path d="M 56,56 Q 60,61 64,56" fill="none" stroke="#0a1210" strokeWidth="2.5" strokeLinecap="round" />
        ) : (
          <path d="M 57,57 Q 60,60 63,57" fill="none" stroke="#0a1210" strokeWidth="2.5" strokeLinecap="round" />
        )}
        
        {/* Sparkles */}
        <g fill="#a3ffcf">
           <polygon points="85,10 87,15 92,17 87,19 85,24 83,19 78,17 83,15" opacity="0.8"/>
           <polygon points="35,15 36,18 39,19 36,20 35,23 34,20 31,19 34,18" opacity="0.6"/>
           <polygon points="95,35 96,37 98,38 96,39 95,41 94,39 92,38 94,37" opacity="0.5"/>
        </g>
      </g>
    </svg>
  );
}

function MascotIcon() {
  return (
    <svg viewBox="0 0 120 120" width="40" height="40">
      <defs>
        <radialGradient id="slimeBodyIcon" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#a3ffcf" />
          <stop offset="100%" stopColor="#22c58e" />
        </radialGradient>
      </defs>
      
      {/* Glow behind body */}
      <path d="M 35,60 C 35,30 45,20 60,20 C 75,20 85,30 85,60 C 85,80 70,80 60,80 C 50,80 35,80 35,60" fill="#22c58e" opacity="0.3" />
      
      {/* Main blob body */}
      <path d="M 35,60 C 35,30 45,20 60,20 C 75,20 85,30 85,60 C 85,80 70,80 60,80 C 50,80 35,80 35,60" fill="url(#slimeBodyIcon)" />

      {/* Highlight / gelatinous shine */}
      <path d="M 45,30 C 50,27 55,27 60,28 C 55,31 50,37 45,45 C 44,40 43,35 45,30" fill="#ffffff" opacity="0.6" />

      {/* Little stubby arms */}
      <path d="M 35,50 Q 25,45 28,55 Q 32,60 38,57" fill="url(#slimeBodyIcon)" />
      <path d="M 85,50 Q 95,45 92,55 Q 88,60 82,57" fill="url(#slimeBodyIcon)" />

      {/* Eyes */}
      <ellipse cx="52" cy="50" rx="4" ry="6" fill="#0a1210" />
      <ellipse cx="68" cy="50" rx="4" ry="6" fill="#0a1210" />
      <circle cx="51" cy="48" r="1.5" fill="#ffffff" />
      <circle cx="67" cy="48" r="1.5" fill="#ffffff" />

      {/* Mouth */}
      <path d="M 57,57 Q 60,60 63,57" fill="none" stroke="#0a1210" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
