/* ============================================================
   BETTER KNOW BO — Privacy Policy Page
   ============================================================ */

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f0f18" }}>
      <SiteHeader />
      <div className="pt-16 lg:pt-[70px]">
        <section className="py-24" style={{ background: "linear-gradient(135deg, #0f0f18 0%, #1a1a2e 100%)", borderBottom: "1px solid #2a2a3e" }}>
          <div className="container">
            <p className="section-label">Legal</p>
            <h1 className="text-5xl font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Privacy Policy</h1>
            <p className="text-white/40 mt-3 text-sm">Effective Date: January 1, 2026</p>
          </div>
        </section>
        <section className="py-20 section-dark">
          <div className="container max-w-3xl">
            <div className="prose prose-invert max-w-none" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'DM Sans', sans-serif", lineHeight: "1.8" }}>
              {[
                {
                  title: "Information We Collect",
                  body: "We collect information you voluntarily provide through our contact form, including your name, phone number, email address, city or county, type of legal matter, and a brief description of your situation. We may also collect technical data such as your IP address, browser type, and pages visited through standard web analytics tools.",
                },
                {
                  title: "How We Use Your Information",
                  body: "Information you provide is used solely for the purpose of responding to your inquiry, scheduling consultations, and handling your legal matter if you become a client. We do not sell, rent, or share your personal information with third parties for marketing purposes.",
                },
                {
                  title: "No Sale of Personal Data",
                  body: "Better Know Bo — Ladner Criminal Defense and DUI Lawyer does not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, as long as those parties agree to keep this information confidential.",
                },
                {
                  title: "Cookie Policy",
                  body: "Our website may use cookies to enhance your browsing experience. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings.",
                },
                {
                  title: "Google Analytics",
                  body: "We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information anonymously and reports website trends without identifying individual visitors. You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.",
                },
                {
                  title: "Data Security",
                  body: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
                },
                {
                  title: "Contact for Privacy Inquiries",
                  body: "If you have questions about this Privacy Policy or how we handle your personal information, please contact us at Bo@BetterKnowBo.com or call 615-969-8904.",
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
