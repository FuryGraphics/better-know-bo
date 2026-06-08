/* ============================================================
   BETTER KNOW BO — Motorcycle Accidents Page
   ============================================================ */

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { HeroBanner, BottomCTA, CrossSellLinks } from "@/components/shared";
import { CheckCircle } from "lucide-react";

export default function MotorcycleAccidentsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f0f18" }}>
      <SiteHeader />
      <div className="pt-16 lg:pt-[70px]">
        <HeroBanner
          headline="Nashville  Accident Attorney"
          italicWord="Motorcycle"
          subheadline="Riders are unfairly blamed after crashes. Bo Ladner fights to prove liability and recover everything you're owed — medical bills, lost wages, bike damage, pain and suffering."
        />

        <section className="py-20 section-dark">
          <div className="container max-w-4xl">
            <div className="mb-16 p-8" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e", borderLeft: "4px solid #F97316" }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                The Bias Against Riders Is Real
              </h2>
              <p className="text-white/60 leading-relaxed">
                Insurance companies assume motorcyclists are reckless. They use that assumption to deny or minimize claims. Bo challenges that assumption with evidence, witnesses, and accident reconstruction — and he fights until you get what you deserve.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Common Causes of Motorcycle Crashes
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Left-turn collisions at intersections",
                  "Drivers failing to yield",
                  "Road hazards (potholes, debris)",
                  "Lane-splitting incidents",
                  "Rear-end collisions",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}>
                    <CheckCircle size={16} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Tennessee Motorcycle Laws
              </h2>
              <p className="text-white/60 leading-relaxed">
                Helmet laws, lane-splitting rules, insurance minimums — Bo knows Tennessee motorcycle statutes cold. That legal knowledge is a weapon in your corner when the insurance company tries to use the law against you.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                What Your Claim May Cover
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Emergency medical care",
                  "Ongoing rehabilitation",
                  "Lost income",
                  "Motorcycle repair or replacement",
                  "Pain, suffering, and emotional distress",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}>
                    <CheckCircle size={16} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CrossSellLinks exclude="/pg/motorcycle-accident-attorney-nashville" />
        <BottomCTA
          heading="Ride hard, ride safe — but when someone hurts you, call Bo."
          body="Free case review. No fee unless we win. Bo answers the phone 24/7."
          ctaLabel="Free Case Review"
          ctaHref="/pg/contact"
          dark
        />
      </div>
      <SiteFooter />
    </div>
  );
}
