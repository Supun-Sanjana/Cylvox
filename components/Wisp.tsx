'use client';

import { useEffect, useRef, useState } from 'react';
import type { ScanIssue, ScanResult } from '@/lib/wisp/types';
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
  const [open, setOpen] = useState(false);
  const [showGreet, setShowGreet] = useState(false);
  const [blink, setBlink] = useState(false);
  const [mascotState, setMascotState] = useState<MascotState>('idle');

  const [url, setUrl] = useState('');
  const [scanning, setScanning] = useState(false);
  const [ticker, setTicker] = useState("Paste a URL and I'll take a look.");
  const [verdict, setVerdict] = useState('');
  const [issues, setIssues] = useState<ScanIssue[] | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
  function handleContact() {
    alert('Would open a contact form referencing these exact findings.');
  }
  function handleEmailGate() {
    alert('Would prompt for email → unlocks a full multi-page scan.');
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
                    <p>Want every page checked, not just the homepage?</p>
                    <button className={cx(styles.btn, styles.btnGhost)} onClick={handleEmailGate}>
                      Scan full site →
                    </button>
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
        <radialGradient id="wispBodyGrad" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#3fe0a8" />
          <stop offset="100%" stopColor="#159a70" />
        </radialGradient>
      </defs>
      <g className={styles.mFloat}>
        <line className={styles.mLeg} x1="46" y1="78" x2="38" y2="92" />
        <line className={styles.mLeg} x1="52" y1="82" x2="47" y2="96" />
        <line className={styles.mLeg} x1="68" y1="82" x2="73" y2="96" />
        <line className={styles.mLeg} x1="74" y1="78" x2="82" y2="92" />
        <circle className={styles.mLanternGlow} cx="60" cy="88" r="10" />
        <circle className={styles.mLantern} cx="60" cy="86" r="6" />
        <g className={styles.mAntenna} style={{ transformOrigin: '50px 32px' }}>
          <path d="M50,32 Q42,16 36,10" />
          <circle className={styles.mTip} cx="36" cy="10" r="3.5" />
        </g>
        <g className={styles.mAntenna} style={{ transformOrigin: '70px 32px' }}>
          <path d="M70,32 Q78,16 84,10" />
          <circle className={styles.mTip} cx="84" cy="10" r="3.5" />
        </g>
        <ellipse className={styles.mBody} cx="60" cy="52" rx="27" ry="30" />
        <circle className={styles.mEye} cx="51" cy="50" r="3.6" />
        <circle className={styles.mEye} cx="69" cy="50" r="3.6" />
      </g>
    </svg>
  );
}

function MascotIcon() {
  return (
    <svg viewBox="0 0 120 120" width="40" height="40">
      <defs>
        <radialGradient id="wispBubbleGrad" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#3fe0a8" />
          <stop offset="100%" stopColor="#159a70" />
        </radialGradient>
      </defs>
      <circle fill="#22c58e" opacity="0.3" cx="60" cy="82" r="9" />
      <circle fill="#22c58e" cx="60" cy="80" r="5.5" />
      <ellipse fill="url(#wispBubbleGrad)" cx="60" cy="50" rx="26" ry="29" />
      <circle fill="#0a1210" cx="51" cy="48" r="3.4" />
      <circle fill="#0a1210" cx="69" cy="48" r="3.4" />
    </svg>
  );
}
