/* ============================================================
   BETTER KNOW BO — About Page
   ============================================================ */

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { BottomCTA } from "@/components/shared";
import { CheckCircle, Phone, Scale } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f0f18" }}>
      <SiteHeader />
      <div className="pt-16 lg:pt-[70px]">
        {/* Hero */}
        <section className="py-24 md:py-32" style={{ background: "linear-gradient(135deg, #0f0f18 0%, #1a1a2e 100%)", borderBottom: "1px solid #2a2a3e" }}>
          <div className="container">
            <div className="max-w-3xl">
              <p className="section-label">Meet Your Attorney</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                About Bo Ladner
              </h1>
              <p className="text-xl text-white/60 leading-relaxed">
                Nashville's attorney who answers the phone and fights like your freedom depends on it — because it does.
              </p>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-20 section-dark">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left: Content */}
              <div>
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Better Know Bo
                  </h2>
                  <p className="text-white/60 leading-relaxed mb-4">
                    Bo Ladner built this firm on a simple philosophy: every client deserves an attorney who is present, aggressive, and honest. When you call 615-969-8904, Bo picks up.
                  </p>
                  <p className="text-white/60 leading-relaxed">
                    After seeing clients get lost in big firms — shuffled between paralegals, never speaking to their actual attorney — Bo started his own firm to be different. Personal, tenacious, and always available. That's the Better Know Bo difference.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    The Better Know Bo Difference
                  </h2>
                  <div className="flex flex-col gap-4">
                    {[
                      "You get Bo — not a case manager",
                      "24/7 availability for criminal clients",
                      "Aggressive investigation before any plea is considered",
                      "Flat-fee options available on select cases",
                      "Flexible payment plans",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                        <span className="text-white/70">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-12 p-8" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e", borderLeft: "4px solid #F97316" }}>
                  <div className="flex items-start gap-3 mb-3">
                    <Scale size={20} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      Firm Philosophy
                    </h3>
                  </div>
                  <p className="text-white/60 leading-relaxed italic">
                    "Laissez les bon temps rouler" — Bo brings a fearless, never-quit attitude to every courtroom in Middle Tennessee. He fights for every client as if their freedom depends on it. Because it does.
                  </p>
                </div>

                {/* Education & Bar */}
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Education &amp; Bar Admissions
                  </h2>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-3 p-4" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}>
                      <CheckCircle size={16} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">Licensed to practice in Tennessee</span>
                    </div>
                    <div className="flex items-start gap-3 p-4" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}>
                      <CheckCircle size={16} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">Law school and bar admission year — contact Bo for details</span>
                    </div>
                  </div>
                </div>

                <a href="tel:6159698904" className="btn-primary inline-flex items-center gap-2">
                  <Phone size={15} />
                  Call Bo Directly: 615-969-8904
                </a>
              </div>

              {/* Right: Photo */}
              <div className="relative">
                {/* Stencil art background accent */}
                <div
                  className="absolute -top-6 -right-6 w-48 h-48 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: "url('/manus-storage/bo-stencil-gold_54c93263.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(1px)",
                  }}
                />
                <img
                  src="/manus-storage/bo-power-shot_087754b7.jpeg"
                  alt="Bo Ladner, Attorney At Law"
                  className="w-full relative z-10"
                  style={{ maxWidth: "440px", objectFit: "cover", objectPosition: "center top" }}
                />
                <div className="absolute -bottom-4 -right-4 p-5 z-20" style={{ backgroundColor: "#F97316" }}>
                  <p className="text-3xl font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>100s</p>
                  <p className="text-xs font-semibold tracking-wide text-white/80 uppercase mt-0.5">Cases Defended</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BottomCTA
          heading="Ready to meet Bo?"
          body="Schedule a free consultation today. Bo answers the phone personally — 24/7."
          ctaLabel="Schedule a Free Consultation"
          ctaHref="/pg/contact"
          dark={false}
        />
      </div>
      <SiteFooter />
    </div>
  );
}
