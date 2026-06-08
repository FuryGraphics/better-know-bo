/* ============================================================
   BETTER KNOW BO — Truck Wrecks Page
   ============================================================ */

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { HeroBanner, BottomCTA, CrossSellLinks } from "@/components/shared";
import { CheckCircle, Truck } from "lucide-react";

export default function TruckWrecksPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f0f18" }}>
      <SiteHeader />
      <div className="pt-16 lg:pt-[70px]">
        <HeroBanner
          headline="Nashville  Attorney"
          italicWord="Truck Wreck"
          subheadline="18-wheeler and commercial vehicle crashes cause catastrophic injuries. Bo Ladner knows trucking law — and how to take on the corporations behind big rigs."
        />

        <section className="py-20 section-dark">
          <div className="container max-w-4xl">
            <div className="mb-16">
              <div className="flex items-start gap-4">
                <Truck size={28} className="text-[#F97316] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Truck Accidents Are Different
                  </h2>
                  <p className="text-white/60 leading-relaxed">
                    Federal trucking regulations, "black box" data, multiple liable parties — the driver, the company, the loader, the maintenance contractor. You need a lawyer who knows this space and moves fast before evidence disappears.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Common Causes of Truck Wrecks
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Driver fatigue / hours-of-service violations",
                  "Distracted driving",
                  "Improper loading / overweight cargo",
                  "Brake or equipment failure",
                  "Unsafe lane changes on I-40, I-24, I-65",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}>
                    <CheckCircle size={16} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                What Bo Does Immediately
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  { step: "01", action: "Sends a litigation hold letter to preserve truck data" },
                  { step: "02", action: "Retains accident reconstruction experts" },
                  { step: "03", action: "Investigates driver logs and company safety records" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 p-5" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}>
                    <span className="text-2xl font-bold flex-shrink-0" style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(249,115,22,0.4)" }}>{item.step}</span>
                    <p className="text-white/70 mt-1">{item.action}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e", borderLeft: "4px solid #F97316" }}>
              <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                No Fee Unless We Win
              </h2>
              <p className="text-white/60">
                Contingency representation for all truck wreck cases. You pay nothing unless Bo recovers money for you.
              </p>
            </div>
          </div>
        </section>

        <CrossSellLinks exclude="/pg/truck-wreck-attorney-nashville" />
        <BottomCTA
          heading="Hurt by an 18-wheeler? Call Bo before the trucking company's lawyers call you."
          body="Free consultation. No fee unless we win. Available 24/7."
          ctaLabel="Free Consultation"
          ctaHref="/pg/contact"
          dark
        />
      </div>
      <SiteFooter />
    </div>
  );
}
