"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
        background: scrolled ? "rgba(242, 239, 233, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "0.5px solid #E2DDD5" : "0.5px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textDecoration: "none",
            color: "#1C1917",
          }}
        >
          <span style={{ color: "#7C3AED" }}>C</span>YLVOX
        </a>

        {/* Desktop nav */}
        <nav className="cylvox-desktop" style={{ alignItems: "center", gap: 32 }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: 13,
                color: "#78716C",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1C1917")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#78716C")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#audit"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 600,
              fontSize: 13,
              color: "#ffffff",
              background: "#7C3AED",
              borderRadius: 50,
              padding: "9px 20px",
              textDecoration: "none",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#6D28D9")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#7C3AED")}
          >
            Get a free audit
          </a>
        </nav>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="cylvox-hamburger"
          style={{
            flexDirection: "column",
            justifyContent: "center",
            gap: 5,
            width: 24,
            height: 24,
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <span style={{ display: "block", width: 20, height: 2, background: "#1C1917" }} />
          <span style={{ display: "block", width: 20, height: 2, background: "#1C1917" }} />
          <span style={{ display: "block", width: 20, height: 2, background: "#1C1917" }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className="cylvox-dropdown"
        style={{
          overflow: "hidden",
          maxHeight: menuOpen ? 400 : 0,
          transition: "max-height 0.3s ease",
          background: "rgba(242, 239, 233, 0.95)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              fontFamily: "var(--font-dm-sans)",
              fontSize: 13,
              color: "#78716C",
              textDecoration: "none",
              padding: "16px 24px",
              borderBottom: "0.5px solid #E2DDD5",
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#audit"
          onClick={() => setMenuOpen(false)}
          style={{
            display: "block",
            textAlign: "center",
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 600,
            fontSize: 13,
            color: "#ffffff",
            background: "#7C3AED",
            borderRadius: 50,
            padding: "12px 20px",
            margin: "16px 24px",
            textDecoration: "none",
          }}
        >
          Get a free audit
        </a>
      </div>

      <style>{`
        .cylvox-desktop {
          display: flex;
        }
        .cylvox-hamburger {
          display: none;
        }
        @media (max-width: 767px) {
          .cylvox-desktop {
            display: none;
          }
          .cylvox-hamburger {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
