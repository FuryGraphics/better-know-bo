/* ============================================================
   BETTER KNOW BO — Area Page Template
   Used for: Nashville, Franklin, Brentwood, Lebanon, Mount Juliet, Ashland City, Dickson
   ============================================================ */

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { BottomCTA, ServiceAreaBanner } from "@/components/shared";
import { Link } from "wouter";
import { CheckCircle, Phone } from "lucide-react";

interface AreaPageProps {
  city: string;
  county: string;
  headline: string;
  intro: string;
  courtContext: string;
  localContext: string;
}

const practiceLinks = [
  { label: "Criminal Defense", href: "/pg/criminal-defense-nashville" },
  { label: "DUI / DWI Defense", href: "/pg/dui-defense-nashville" },
  { label: "Personal Injury", href: "/pg/personal-injury-nashville" },
  { label: "Truck Wrecks", href: "/pg/truck-wreck-attorney-nashville" },
  { label: "Motorcycle Accidents", href: "/pg/motorcycle-accident-attorney-nashville" },
];

export default function AreaPageTemplate({
  city,
  county,
  headline,
  intro,
  courtContext,
  localContext,
}: AreaPageProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f0f18" }}>
      <SiteHeader />
      <div className="pt-16 lg:pt-[70px]">
        {/* Hero */}
        <section className="py-24 md:py-32" style={{ background: "linear-gradient(135deg, #0f0f18 0%, #1a1a2e 100%)", borderBottom: "1px solid #2a2a3e" }}>
          <div className="container">
            <p className="section-label">{county} County</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {headline}
            </h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-8">{intro}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/pg/contact" className="btn-primary">Free Consultation</Link>
              <a href="tel:6159698904" className="btn-secondary">
                <Phone size={15} />
                Call 615-969-8904
              </a>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-20 section-dark">
          <div className="container max-w-4xl">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {city} Court System
                  </h2>
                  <p className="text-white/60 leading-relaxed">{courtContext}</p>
                </div>

                <div className="mb-12 p-8" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e", borderLeft: "4px solid #F97316" }}>
                  <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Local Knowledge Matters
                  </h2>
                  <p className="text-white/60 leading-relaxed">{localContext}</p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Practice Areas in {city}
                  </h2>
                  <div className="flex flex-col gap-3">
                    {practiceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-3 p-4 transition-colors hover:border-[#F97316]/40"
                        style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}
                      >
                        <CheckCircle size={16} className="text-[#F97316] flex-shrink-0" />
                        <span className="text-white/70 hover:text-white transition-colors">{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <div className="sticky top-24">
                  <div className="p-6 mb-6" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}>
                    <p className="text-xs font-semibold tracking-widest uppercase text-[#F97316] mb-4">
                      Serving {city}
                    </p>
                    <p className="text-white font-semibold mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem" }}>
                      Bo Ladner
                    </p>
                    <p className="text-white/50 text-sm mb-5">Attorney At Law</p>
                    <div className="flex flex-col gap-3">
                      <a href="tel:6159698904" className="btn-primary text-center text-xs py-3 justify-center">
                        <Phone size={13} />
                        615-969-8904
                      </a>
                      <Link href="/pg/contact" className="btn-secondary text-center text-xs py-3 justify-center">
                        Free Consultation
                      </Link>
                    </div>
                  </div>
                  <div className="p-6" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}>
                    <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3">Other Areas</p>
                    <div className="flex flex-col gap-2">
                      {[
                        { label: "Nashville", href: "/pg/nashville-criminal-defense-lawyer" },
                        { label: "Franklin", href: "/pg/franklin-criminal-defense-lawyer" },
                        { label: "Brentwood", href: "/pg/brentwood-criminal-defense-lawyer" },
                        { label: "Lebanon", href: "/pg/lebanon-criminal-defense-lawyer" },
                        { label: "Mount Juliet", href: "/pg/mount-juliet-criminal-defense-lawyer" },
                        { label: "Ashland City", href: "/pg/ashland-city-criminal-defense-lawyer" },
                        { label: "Dickson", href: "/pg/dickson-criminal-defense-lawyer" },
                      ]
                        .filter((l) => l.label !== city)
                        .map((l) => (
                          <Link key={l.href} href={l.href} className="text-sm text-white/50 hover:text-[#F97316] transition-colors">
                            {l.label} →
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceAreaBanner />
        <BottomCTA
          heading={`Facing charges in ${city}? Don't wait.`}
          body="Bo Ladner knows the local courts and fights hard for every client. Free consultation — available 24/7."
          ctaLabel="Free Consultation"
          ctaHref="/pg/contact"
          dark={false}
        />
      </div>
      <SiteFooter />
    </div>
  );
}
