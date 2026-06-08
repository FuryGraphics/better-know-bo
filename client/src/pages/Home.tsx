/* ============================================================
   BETTER KNOW BO — Home Page (/pg/home)
   Design: Courtroom Noir
   ============================================================ */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Phone, Clock, Shield, DollarSign, CheckCircle, Star } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import {
  PracticeAreaCard,
  ReviewCard,
  FAQItem,
  ServiceAreaBanner,
  useReveal,
} from "@/components/shared";

/* ── Scroll Reveal Wrapper ── */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}

/* ── Badge Card ── */
function BadgeCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="stat-badge">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[#F97316]">{icon}</span>
        <span className="text-xs font-semibold tracking-widest uppercase text-white/40">{label}</span>
      </div>
      <span className="text-sm font-semibold text-white">{value}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f0f18" }}>
      <SiteHeader />

      {/* ── HERO ── */}
      <section
        className="hero-section pt-16 lg:pt-[70px]"
        style={{ minHeight: "100vh" }}
      >
        <div className="container w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
            {/* Left: Text */}
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-6"
                style={{ color: "#F97316" }}
              >
                Nashville, Tennessee · Criminal Defense &amp; DUI
              </p>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#ffffff" }}
              >
                Fighting For Your Freedom With{" "}
                <em style={{ color: "#F97316", fontStyle: "italic" }}>Relentless</em>{" "}
                Nashville Defense
              </h1>
              <p
                className="text-lg text-white/60 mb-8 max-w-lg leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Criminal defense and DUI — aggressive advocacy from an attorney who answers the phone personally.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/pg/contact" className="btn-primary">
                  Free Consultation
                </Link>
                <a href="tel:6159698904" className="btn-secondary">
                  <Phone size={15} />
                  Call 615-969-8904
                </a>
              </div>
              {/* Stats Bar */}
              <div className="flex flex-wrap gap-8 pt-8" style={{ borderTop: "1px solid #2a2a3e" }}>
                {[
                  { value: "Nashville Native", label: "" },
                  { value: "100s of Cases", label: "Defended" },
                  { value: "24/7", label: "Attorney Access" },
                ].map((s) => (
                  <div key={s.value}>
                    <p
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {s.value}
                    </p>
                    {s.label && (
                      <p className="text-xs text-white/40 tracking-wide mt-0.5">{s.label}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Photo + Badge Cards */}
            <div className="relative flex flex-col items-center lg:items-end">
              <div className="relative">
                {/* Orange border accent frame */}
                <div
                  className="absolute -top-3 -right-3 w-full h-full pointer-events-none"
                  style={{ border: "2px solid rgba(249,115,22,0.35)", maxWidth: "400px" }}
                />
                <img
                  src="/manus-storage/bo-stencil-gold_54c93263.jpg"
                  alt="Bo Ladner, Attorney At Law"
                  className="w-full max-w-sm lg:max-w-none relative z-10"
                  style={{ maxWidth: "400px", display: "block", objectFit: "cover" }}
                />
                <div
                  className="absolute bottom-4 left-4 right-4 p-4 z-20"
                  style={{ backgroundColor: "rgba(15,15,24,0.92)", border: "1px solid #2a2a3e", backdropFilter: "blur(4px)" }}
                >
                  <p
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Bo Ladner
                  </p>
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#F97316] mt-0.5">
                    Attorney At Law
                  </p>
                </div>
              </div>
              {/* Floating Badge Cards */}
              <div className="grid grid-cols-2 gap-3 mt-4 w-full max-w-sm lg:max-w-none" style={{ maxWidth: "400px" }}>
                <BadgeCard icon={<Clock size={14} />} label="Availability" value="Open 24/7" />
                <BadgeCard icon={<Shield size={14} />} label="DUI Defense" value="Aggressive Strategy" />
                <BadgeCard icon={<CheckCircle size={14} />} label="Consultation" value="Always Free" />
                <BadgeCard icon={<DollarSign size={14} />} label="Payment" value="Flexible Plans" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRACTICE AREAS ── */}
      <section className="py-20 section-dark">
        <div className="container">
          <Reveal>
            <p className="section-label">Practice Areas</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-12"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Proven Defense Across Middle Tennessee
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                number: "01",
                title: "Criminal Defense",
                description:
                  "From misdemeanors to serious felonies — assault, drug charges, weapons, and more. Bo fights for dismissal, not just plea deals.",
                href: "/pg/criminal-defense-nashville",
              },
              {
                number: "02",
                title: "DUI / DWI Defense",
                description:
                  "Charged with DUI in Tennessee? Field sobriety tests can be challenged. Bo knows how to fight breath tests, blood draws, and improper stops.",
                href: "/pg/dui-defense-nashville",
              },
              {
                number: "03",
                title: "Personal Injury",
                description:
                  "Hurt by someone else's negligence? Bo recovers compensation for medical bills, lost wages, and pain and suffering.",
                href: "/pg/personal-injury-nashville",
              },
              {
                number: "04",
                title: "Truck Wrecks",
                description:
                  "18-wheeler and commercial vehicle accidents require specialized strategy. Bo has the experience to take on big trucking companies.",
                href: "/pg/truck-wreck-attorney-nashville",
              },
              {
                number: "05",
                title: "Motorcycle Accidents",
                description:
                  "Riders are often blamed unfairly. Bo fights to protect your rights after a crash.",
                href: "/pg/motorcycle-accident-attorney-nashville",
              },
            ].map((card, i) => (
              <Reveal key={card.number} delay={i * 60}>
                <PracticeAreaCard {...card} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="py-20 section-surface">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <p className="section-label">Meet Your Attorney</p>
                <h2
                  className="text-4xl md:text-5xl font-bold text-white mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Bo Ladner, Attorney At Law
                </h2>
                <p className="text-white/60 leading-relaxed mb-6">
                  Bo Ladner built Better Know Bo on a simple promise: when you call, you reach Bo — not a paralegal, not a receptionist. A real attorney who knows your file and is ready to fight.
                </p>
                <ul className="flex flex-col gap-3 mb-8">
                  {[
                    "Nashville native defending Middle Tennesseans",
                    "All misdemeanors and felonies handled",
                    "Tenacious DUI and personal injury advocacy",
                    "Flexible, affordable payment plans",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                      <CheckCircle size={16} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/pg/contact" className="btn-primary">
                  Schedule a Consultation
                </Link>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative">
                {/* Stencil art decorative accent behind photo */}
                <div
                  className="absolute -top-8 -right-8 w-56 h-56 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: "url('/manus-storage/bo-stencil-gold_54c93263.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {/* Orange corner accent */}
                <div
                  className="absolute -top-3 -left-3 w-full h-full pointer-events-none"
                  style={{ border: "2px solid rgba(249,115,22,0.3)", maxWidth: "440px" }}
                />
                <img
                  src="/manus-storage/bo-power-shot_087754b7.jpeg"
                  alt="Bo Ladner"
                  className="w-full relative z-10"
                  style={{ maxWidth: "440px", objectFit: "cover", objectPosition: "center top" }}
                />
                <div
                  className="absolute -bottom-4 -left-4 p-5 z-20"
                  style={{ backgroundColor: "#F97316" }}
                >
                  <p
                    className="text-3xl font-bold text-white"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    100s
                  </p>
                  <p className="text-xs font-semibold tracking-wide text-white/80 uppercase mt-0.5">
                    Cases Defended in Tennessee
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA BANNER ── */}
      <ServiceAreaBanner />

      {/* ── REVIEWS ── */}
      <section className="py-20 section-dark">
        <div className="container">
          <Reveal>
            <p className="section-label">Client Reviews</p>
            <div className="flex items-center gap-4 mb-12">
              <h2
                className="text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                What Our Clients Say
              </h2>
              <div className="hidden md:flex items-center gap-2 ml-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F97316" color="#F97316" />
                  ))}
                </div>
                <span className="text-white font-semibold">5.0</span>
                <span className="text-white/40 text-sm">· Google Reviews</span>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                quote:
                  "Bo answered my call at midnight when I was in crisis. He had a plan ready by morning and got my charges dropped entirely. Better Know Bo is no joke.",
                name: "James T.",
                caseType: "Criminal Defense Client",
              },
              {
                quote:
                  "Charged with DUI on I-65. Bo challenged the stop and the breath test. Case dismissed. I cannot recommend him enough.",
                name: "Carla M.",
                caseType: "DUI Client",
              },
              {
                quote:
                  "After my motorcycle accident the insurance company tried to lowball me. Bo fought back and got me 3x what they offered. He's the real deal.",
                name: "Derek S.",
                caseType: "Personal Injury Client",
              },
            ].map((r, i) => (
              <Reveal key={r.name} delay={i * 80}>
                <ReviewCard {...r} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/pg/reviews" className="btn-secondary">
              See All Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ TEASER ── */}
      <section className="py-20 section-surface">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <p className="section-label">Common Questions</p>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-10"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Frequently Asked Questions
              </h2>
            </Reveal>
            <div>
              {[
                {
                  question: "What should I do if I'm arrested in Tennessee?",
                  answer:
                    "Do not try to explain your situation to police. Politely invoke your right to remain silent and ask for an attorney immediately. Anything you say can and will be used against you. Call Bo at 615-969-8904 as soon as possible.",
                },
                {
                  question: "Do I really need a lawyer for a DUI?",
                  answer:
                    "Yes. A DUI conviction in Tennessee carries serious consequences including license suspension, fines, potential jail time, and a permanent criminal record. An experienced DUI attorney can challenge the stop, the field sobriety test, and the breathalyzer results.",
                },
                {
                  question: "How soon should I hire a criminal defense attorney?",
                  answer:
                    "Immediately. Early intervention can prevent charges from being filed, secure better bond conditions, preserve key evidence, and build a stronger defense strategy. The sooner Bo is in your corner, the better.",
                },
                {
                  question: "What is the difference between a misdemeanor and a felony in Tennessee?",
                  answer:
                    "Misdemeanors are less serious offenses typically punishable by up to 11 months and 29 days in county jail. Felonies are more serious crimes that carry potential prison sentences of one year or more and have long-term consequences for employment, housing, and civil rights.",
                },
              ].map((faq) => (
                <FAQItem key={faq.question} {...faq} />
              ))}
            </div>
            <div className="mt-8">
              <Link href="/pg/faqs" className="btn-secondary">
                See All FAQs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20" style={{ backgroundColor: "#F97316" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Get Your Free Consultation Today
              </h2>
              <p className="text-white/85 leading-relaxed">
                Available 24/7. Call Bo directly or fill out our contact form — we'll respond promptly.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 flex-shrink-0">
              <Link
                href="/pg/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
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
                }}
              >
                Contact Us →
              </Link>
              <a
                href="tel:6159698904"
                style={{
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
                }}
              >
                <Phone size={15} />
                Call 615-969-8904
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
