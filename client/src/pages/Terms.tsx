/* ============================================================
   BETTER KNOW BO — Terms & Conditions Page
   ============================================================ */

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f0f18" }}>
      <SiteHeader />
      <div className="pt-16 lg:pt-[70px]">
        <section className="py-24" style={{ background: "linear-gradient(135deg, #0f0f18 0%, #1a1a2e 100%)", borderBottom: "1px solid #2a2a3e" }}>
          <div className="container">
            <p className="section-label">Legal</p>
            <h1 className="text-5xl font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Terms & Conditions</h1>
            <p className="text-white/40 mt-3 text-sm">Effective Date: January 1, 2026</p>
          </div>
        </section>
        <section className="py-20 section-dark">
          <div className="container max-w-3xl">
            <div style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'DM Sans', sans-serif", lineHeight: "1.8" }}>
              {[
                {
                  title: "No Attorney-Client Relationship",
                  body: "Use of this website does not create an attorney-client relationship between you and Better Know Bo — Ladner Criminal Defense and DUI Lawyer. An attorney-client relationship is only formed when you have signed a written engagement agreement with our firm.",
                },
                {
                  title: "General Information Only",
                  body: "The information provided on this website is for general informational purposes only. It is not intended to constitute legal advice and should not be relied upon as such. Laws and regulations vary by jurisdiction and change over time. Always consult a qualified attorney for advice specific to your situation.",
                },
                {
                  title: "Jurisdictional Scope",
                  body: "Better Know Bo — Ladner Criminal Defense and DUI Lawyer is licensed to practice law in the State of Tennessee. The information on this website is intended for individuals with legal matters in Tennessee. We do not represent clients in other states.",
                },
                {
                  title: "Limitation of Liability",
                  body: "To the fullest extent permitted by applicable law, Better Know Bo — Ladner Criminal Defense and DUI Lawyer shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or reliance on any information contained herein.",
                },
                {
                  title: "Intellectual Property",
                  body: "All content on this website, including text, graphics, logos, and images, is the property of Better Know Bo — Ladner Criminal Defense and DUI Lawyer and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.",
                },
                {
                  title: "Changes to Terms",
                  body: "We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes your acceptance of the new terms.",
                },
                {
                  title: "Contact",
                  body: "For questions about these Terms & Conditions, please contact us at Bo@BetterKnowBo.com or call 615-969-8904.",
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
