/* ============================================================
   BETTER KNOW BO — Personal Injury Page
   ============================================================ */

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { HeroBanner, BottomCTA, CrossSellLinks } from "@/components/shared";
import { CheckCircle, Clock } from "lucide-react";

export default function PersonalInjuryPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f0f18" }}>
      <SiteHeader />
      <div className="pt-16 lg:pt-[70px]">
        <HeroBanner
          headline="Nashville  Attorney"
          italicWord="Personal Injury"
          subheadline="Hurt through someone else's negligence? Bo Ladner fights insurance companies hard to recover the compensation you deserve — no fee unless we win."
        />

        <section className="py-20 section-dark">
          <div className="container max-w-4xl">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                You Deserve Full Compensation
              </h2>
              <p className="text-white/60 leading-relaxed">
                Medical bills, lost wages, pain and suffering, future care costs. Bo builds the strongest possible case to recover everything you're owed. Insurance companies have teams of lawyers working to minimize your payout — you need an attorney who fights back just as hard.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Cases We Handle
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {["Car Accidents", "Truck & 18-Wheeler Wrecks", "Motorcycle Accidents", "Slip & Fall", "Wrongful Death"].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}>
                    <CheckCircle size={16} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16 p-8" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e", borderLeft: "4px solid #F97316" }}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                No Win, No Fee — Ever
              </h2>
              <p className="text-white/60 leading-relaxed">
                Bo handles personal injury cases on contingency. You pay nothing unless we recover money for you. There's no risk to getting the representation you deserve.
              </p>
            </div>

            <div className="mb-16 p-8" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}>
              <div className="flex items-start gap-4">
                <Clock size={24} className="text-[#F97316] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Why Act Fast?
                  </h2>
                  <p className="text-white/60 leading-relaxed">
                    Evidence disappears. Witness memories fade. Tennessee has a 1-year statute of limitations for personal injury claims. If you wait too long, you may lose your right to recover compensation entirely. Call Bo today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CrossSellLinks exclude="/pg/personal-injury-nashville" />
        <BottomCTA
          heading="Hurt in an accident? Let Bo fight the insurance company."
          body="Free case review. No fee unless we win. Call Bo at 615-969-8904 or fill out our form."
          ctaLabel="Free Case Review"
          ctaHref="/pg/contact"
          dark
        />
      </div>
      <SiteFooter />
    </div>
  );
}
