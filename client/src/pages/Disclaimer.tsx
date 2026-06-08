/* ============================================================
   BETTER KNOW BO — Legal Disclaimer Page
   ============================================================ */

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f0f18" }}>
      <SiteHeader />
      <div className="pt-16 lg:pt-[70px]">
        <section className="py-24" style={{ background: "linear-gradient(135deg, #0f0f18 0%, #1a1a2e 100%)", borderBottom: "1px solid #2a2a3e" }}>
          <div className="container">
            <p className="section-label">Legal</p>
            <h1 className="text-5xl font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Legal Disclaimer</h1>
            <p className="text-white/40 mt-3 text-sm">Effective Date: January 1, 2026</p>
          </div>
        </section>
        <section className="py-20 section-dark">
          <div className="container max-w-3xl">
            <div style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'DM Sans', sans-serif", lineHeight: "1.8" }}>
              {[
                {
                  title: "Attorney Advertising",
                  body: "This website is attorney advertising. The information provided is for general informational purposes only and does not constitute legal advice. Prior results do not guarantee a similar outcome.",
                },
                {
                  title: "No Guarantee of Outcome",
                  body: "Every legal case is unique. The outcome of any legal matter depends on the specific facts and circumstances involved. Better Know Bo — Ladner Criminal Defense and DUI Lawyer makes no guarantee, warranty, or prediction regarding the outcome of any legal matter.",
                },
                {
                  title: "Results Vary",
                  body: "The results obtained in past cases are not necessarily indicative of results that may be obtained in future cases. Client testimonials and case results described on this website are not a guarantee, warranty, or prediction of the outcome of your case.",
                },
                {
                  title: "Past Results Do Not Guarantee Future Outcomes",
                  body: "Information about past case results is provided for illustrative purposes only. The facts and legal issues in every case are different, and past success does not guarantee future results.",
                },
                {
                  title: "Not Legal Advice",
                  body: "The information on this website does not constitute legal advice and should not be relied upon as such. For advice specific to your situation, contact Bo Ladner at Bo@BetterKnowBo.com or 615-969-8904 for a free consultation.",
                },
                {
                  title: "Tennessee State Bar Compliance",
                  body: "Better Know Bo — Ladner Criminal Defense and DUI Lawyer is licensed to practice law in the State of Tennessee and complies with all applicable rules of professional conduct, including the Tennessee Rules of Professional Conduct governing attorney advertising and communications.",
                },
                {
                  title: "Contact",
                  body: "For questions about this disclaimer or to speak with Bo Ladner directly, contact us at Bo@BetterKnowBo.com or call 615-969-8904.",
                },
              ].map((section) => (
                <div key={section.title} className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {section.title}
                  </h2>
                  <p>{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}
