/* ============================================================
   BETTER KNOW BO — Criminal Defense Page
   ============================================================ */

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { HeroBanner, BottomCTA, CrossSellLinks } from "@/components/shared";
import { CheckCircle } from "lucide-react";

export default function CriminalDefensePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f0f18" }}>
      <SiteHeader />
      <div className="pt-16 lg:pt-[70px]">
        <HeroBanner
          headline="Nashville  Defense Attorney"
          italicWord="Criminal"
          subheadline="Proven defense against felonies, misdemeanors, assault, drugs, weapons, and more — from an attorney who treats every case like it's going to trial."
        />

        {/* Body */}
        <section className="py-20 section-dark">
          <div className="container max-w-4xl">
            {/* Section 1 */}
            <div className="mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-5"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Your Future Is Worth Fighting For
              </h2>
              <p className="text-white/60 leading-relaxed text-base">
                A criminal conviction in Tennessee can end a career, destroy a family, and follow you forever. Bo Ladner investigates every angle and challenges every weakness in the state's case. Whether you're facing a misdemeanor or a serious felony, your future deserves aggressive, experienced representation — not a quick plea deal.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Cases We Handle
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Assault & Aggravated Assault",
                  "Drug Possession & Drug Trafficking",
                  "Rape & Sexual Assault Charges",
                  "DUI / DWI (see dedicated page)",
                  "Weapons Charges",
                  "Theft, Burglary & Robbery",
                  "Domestic Violence / Family Violence",
                  "Sex Crimes & Registered Offender Defense",
                  "Vandalism & Property Crimes",
                  "Juvenile Crimes",
                  "White Collar Crimes & Fraud",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 p-4"
                    style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}
                  >
                    <CheckCircle size={16} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-16 p-8" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e", borderLeft: "4px solid #F97316" }}>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-5"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                We Fight — We Don't Just Plead
              </h2>
              <p className="text-white/60 leading-relaxed">
                Many attorneys push clients toward plea deals to close cases fast. Bo Ladner challenges police procedures, investigates evidence, and prepares every case for trial. You deserve an attorney who fights — not one who settles for the path of least resistance.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-5"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Serving Davidson County and Beyond
              </h2>
              <p className="text-white/60 leading-relaxed">
                We appear in Nashville Metro courts, Davidson, Williamson, Wilson, Cheatham, and Dickson County courtrooms. Bo's knowledge of local prosecutors, judges, and law enforcement tendencies gives clients a real advantage.
              </p>
            </div>
          </div>
        </section>

        <CrossSellLinks exclude="/pg/criminal-defense-nashville" />
        <BottomCTA
          heading="Charged with a Crime in Nashville? Don't wait."
          body="Every hour matters. Call Bo directly or send a message — available 24/7."
          ctaLabel="Send a Message"
          ctaHref="/pg/contact"
          dark
        />
      </div>
      <SiteFooter />
    </div>
  );
}
