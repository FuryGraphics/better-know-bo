/* ============================================================
   BETTER KNOW BO — Shared Reusable Components
   Design: Courtroom Noir
   ============================================================ */

import { useState, useEffect, useRef, ReactNode } from "react";
import { Link } from "wouter";
import { ChevronDown, Star, Phone } from "lucide-react";

/* ── useReveal hook ── */
export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ── HeroBanner ── */
export function HeroBanner({
  headline,
  italicWord,
  subheadline,
  ctaHref = "/pg/contact",
  ctaLabel = "Free Consultation",
}: {
  headline: string;
  italicWord?: string;
  subheadline: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  const headlineParts = italicWord
    ? headline.split(italicWord)
    : [headline];

  return (
    <section
      className="relative py-24 md:py-32"
      style={{
        background: "linear-gradient(135deg, #0f0f18 0%, #1a1a2e 100%)",
        borderBottom: "1px solid #2a2a3e",
      }}
    >
      <div className="container">
        <div className="max-w-3xl">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#ffffff" }}
          >
            {italicWord ? (
              <>
                {headlineParts[0]}
                <em style={{ color: "#F97316", fontStyle: "italic" }}>{italicWord}</em>
                {headlineParts[1]}
              </>
            ) : (
              headline
            )}
          </h1>
          <p className="text-lg text-white/60 mb-8 max-w-xl leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {subheadline}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href={ctaHref} className="btn-primary">
              {ctaLabel}
            </Link>
            <a href="tel:6159698904" className="btn-secondary">
              <Phone size={15} />
              Call 615-969-8904
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── BottomCTA ── */
export function BottomCTA({
  heading,
  body,
  ctaLabel = "Contact Us →",
  ctaHref = "/pg/contact",
  dark = false,
}: {
  heading: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
  dark?: boolean;
}) {
  return (
    <section
      className="py-16"
      style={{
        backgroundColor: dark ? "#1a1a2e" : "#F97316",
        borderTop: dark ? "1px solid #2a2a3e" : "none",
      }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: dark ? "#ffffff" : "#ffffff",
              }}
            >
              {heading}
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: dark ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.85)" }}
            >
              {body}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0">
            <Link
              href={ctaHref}
              className={dark ? "btn-primary" : ""}
              style={
                !dark
                  ? {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      backgroundColor: "#ffffff",
                      color: "#F97316",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      padding: "0.875rem 1.75rem",
                      border: "2px solid #ffffff",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    }
                  : undefined
              }
            >
              {ctaLabel}
            </Link>
            <a
              href="tel:6159698904"
              className={dark ? "btn-secondary" : ""}
              style={
                !dark
                  ? {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      backgroundColor: "transparent",
                      color: "#ffffff",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      padding: "0.875rem 1.75rem",
                      border: "2px solid rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    }
                  : undefined
              }
            >
              <Phone size={15} />
              Call 615-969-8904
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── ReviewCard ── */
export function ReviewCard({
  quote,
  name,
  caseType,
}: {
  quote: string;
  name: string;
  caseType: string;
}) {
  return (
    <div className="review-card">
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="#F97316" color="#F97316" />
        ))}
      </div>
      <p
        className="text-white/80 leading-relaxed mb-5 text-sm"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        "{quote}"
      </p>
      <div>
        <p className="text-white font-semibold text-sm">{name}</p>
        <p className="text-[#F97316] text-xs font-medium tracking-wide mt-0.5">{caseType}</p>
      </div>
    </div>
  );
}

/* ── FAQItem ── */
export function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="faq-item">
      <button
        className="faq-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 text-[#F97316] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: open ? `${contentRef.current?.scrollHeight ?? 500}px` : "0px",
          overflow: "hidden",
          transition: "max-height 300ms cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        <div
          className="pb-5 text-sm text-white/60 leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}

/* ── PracticeAreaCard ── */
export function PracticeAreaCard({
  number,
  title,
  description,
  href,
}: {
  number: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="practice-card">
      <div
        className="text-4xl font-bold mb-4 leading-none"
        style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(249,115,22,0.3)" }}
      >
        {number}
      </div>
      <h3
        className="text-xl font-bold mb-3 text-white"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {title}
      </h3>
      <p className="text-sm text-white/60 leading-relaxed mb-5">{description}</p>
      <Link
        href={href}
        className="text-xs font-semibold tracking-widest uppercase text-[#F97316] hover:text-white transition-colors"
      >
        Learn More →
      </Link>
    </div>
  );
}

/* ── CrossSellLinks ── */
export function CrossSellLinks({ exclude }: { exclude?: string }) {
  const links = [
    { label: "Criminal Defense", href: "/pg/criminal-defense-nashville" },
    { label: "DUI / DWI Defense", href: "/pg/dui-defense-nashville" },
    { label: "Personal Injury", href: "/pg/personal-injury-nashville" },
    { label: "Truck Wrecks", href: "/pg/truck-wreck-attorney-nashville" },
    { label: "Motorcycle Accidents", href: "/pg/motorcycle-accident-attorney-nashville" },
  ].filter((l) => l.href !== exclude);

  return (
    <section className="py-10" style={{ borderTop: "1px solid #2a2a3e", backgroundColor: "#1a1a2e" }}>
      <div className="container">
        <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
          Also Serving
        </p>
        <div className="flex flex-wrap gap-3">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="city-pill">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── ServiceAreaBanner ── */
export function ServiceAreaBanner() {
  const cities = [
    { label: "Nashville", href: "/pg/nashville-criminal-defense-lawyer" },
    { label: "Franklin", href: "/pg/franklin-criminal-defense-lawyer" },
    { label: "Brentwood", href: "/pg/brentwood-criminal-defense-lawyer" },
    { label: "Lebanon", href: "/pg/lebanon-criminal-defense-lawyer" },
    { label: "Mount Juliet", href: "/pg/mount-juliet-criminal-defense-lawyer" },
    { label: "Ashland City", href: "/pg/ashland-city-criminal-defense-lawyer" },
    { label: "Dickson", href: "/pg/dickson-criminal-defense-lawyer" },
    { label: "Murfreesboro", href: "/pg/murfreesboro-criminal-defense-lawyer" },
    { label: "Smyrna", href: "/pg/smyrna-criminal-defense-lawyer" },
    { label: "Columbia", href: "/pg/columbia-criminal-defense-lawyer" },
    { label: "Mount Pleasant", href: "/pg/mount-pleasant-criminal-defense-lawyer" },
  ];

  return (
    <section className="py-14" style={{ backgroundColor: "#1a1a2e", borderTop: "1px solid #2a2a3e" }}>
      <div className="container text-center">
        <p className="section-label justify-center border-0 pl-0 mb-4">Service Area</p>
        <h2
          className="text-2xl md:text-3xl font-bold text-white mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Serving Davidson, Williamson, Wilson, Cheatham, Dickson, Rutherford &amp; Maury Counties
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((c) => (
            <Link key={c.href} href={c.href} className="city-pill">
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
