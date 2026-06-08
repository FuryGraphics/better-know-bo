/* ============================================================
   BETTER KNOW BO — DUI / DWI Defense Page
   ============================================================ */

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { HeroBanner, BottomCTA, CrossSellLinks } from "@/components/shared";
import { AlertTriangle, CheckCircle } from "lucide-react";

export default function DUIDefensePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f0f18" }}>
      <SiteHeader />
      <div className="pt-16 lg:pt-[70px]">
        <HeroBanner
          headline="Nashville  Defense Attorney"
          italicWord="DUI / DWI"
          subheadline="A DUI charge is not a conviction. Bo Ladner fights breath tests, blood draws, and improper traffic stops to protect your license and your future."
        />

        <section className="py-20 section-dark">
          <div className="container max-w-4xl">
            {/* Section 1 */}
            <div className="mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-5"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                A DUI Can Ruin Your Life — But It's Not Over Yet
              </h2>
              <p className="text-white/60 leading-relaxed">
                DUI convictions in Tennessee carry license suspension, heavy fines, potential jail time, and a criminal record that follows you for life. The key: fight the charge immediately. Bo Ladner has the experience and the tenacity to challenge every element of the state's case.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                How Bo Challenges DUI Cases
              </h2>
              <div className="flex flex-col gap-3">
                {[
                  "Was the traffic stop legal?",
                  "Was the field sobriety test properly administered?",
                  "Was the breathalyzer calibrated and maintained?",
                  "Was a blood draw legally obtained?",
                  "Were your Miranda rights read?",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 p-4"
                    style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}
                  >
                    <CheckCircle size={16} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Consequences */}
            <div className="mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Tennessee DUI Consequences (1st Offense)
              </h2>
              <div
                className="p-6"
                style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e", borderLeft: "4px solid #F97316" }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle size={18} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                  <p className="text-white/60 text-sm">
                    These are serious consequences. Don't face them without an attorney who fights.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Up to 11 months, 29 days in jail",
                    "$350–$1,500 in fines",
                    "1-year license revocation",
                    "Mandatory drug/alcohol treatment",
                    "Ignition interlock device requirement",
                    "Permanent criminal record",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="text-[#F97316] mt-0.5">•</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 4: CDL */}
            <div className="mb-16 p-8" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}>
              <h2
                className="text-2xl md:text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                DUI for CDL Holders
              </h2>
              <p className="text-white/60 leading-relaxed">
                A DUI is even more devastating if you hold a commercial driver's license. Your livelihood depends on your CDL. Bo fights aggressively to protect your career and your future.
              </p>
            </div>

            {/* Section 5: Underage */}
            <div className="mb-16 p-8" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}>
              <h2
                className="text-2xl md:text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Underage DUI in Tennessee
              </h2>
              <p className="text-white/60 leading-relaxed">
                Tennessee has zero tolerance for underage drinking and driving. Even a trace amount of alcohol can result in serious charges. Call Bo immediately if your child has been charged — early intervention is critical.
              </p>
            </div>
          </div>
        </section>

        <CrossSellLinks exclude="/pg/dui-defense-nashville" />
        <BottomCTA
          heading="Arrested for DUI in Nashville? You have rights. Use them."
          body="Don't wait. Every hour matters. Call Bo directly or fill out our free consultation form."
          ctaLabel="Free Consultation Form"
          ctaHref="/pg/contact"
          dark
        />
      </div>
      <SiteFooter />
    </div>
  );
}
