/* ============================================================
   BETTER KNOW BO — Reviews / Testimonials Page
   ============================================================ */

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ReviewCard, BottomCTA } from "@/components/shared";
import { Star, ExternalLink } from "lucide-react";

const reviews = [
  { quote: "Bo answered my call at midnight when I was in crisis. He had a plan ready by morning and got my charges dropped entirely. Better Know Bo is no joke.", name: "James T.", caseType: "Criminal Defense Client" },
  { quote: "Charged with DUI on I-65. Bo challenged the stop and the breath test. Case dismissed. I cannot recommend him enough.", name: "Carla M.", caseType: "DUI Client" },
  { quote: "After my motorcycle accident the insurance company tried to lowball me. Bo fought back and got me 3x what they offered. He's the real deal.", name: "Derek S.", caseType: "Personal Injury Client" },
  { quote: "I was facing a felony drug charge and thought my life was over. Bo investigated every detail, challenged the search, and got the case dismissed. Forever grateful.", name: "Marcus R.", caseType: "Criminal Defense Client" },
  { quote: "Bo handled my truck wreck case against a major carrier. He moved fast, preserved the black box data, and got me a settlement that covered all my medical bills and then some.", name: "Patricia H.", caseType: "Truck Wreck Client" },
  { quote: "First DUI ever. Bo challenged the breathalyzer calibration records and the officer's training. Charges reduced significantly. He saved my CDL.", name: "Tony W.", caseType: "DUI / CDL Client" },
  { quote: "I called Bo at 2am after my son was arrested. He was calm, professional, and had a strategy within hours. The charges were eventually dropped. Bo is the real deal.", name: "Linda K.", caseType: "Criminal Defense Client" },
  { quote: "My motorcycle accident case seemed hopeless — the other driver's insurance denied everything. Bo filed suit and within months we had a fair settlement. Highly recommend.", name: "Ryan B.", caseType: "Motorcycle Accident Client" },
  { quote: "Bo is not just a great lawyer — he's a great communicator. He kept me informed every step of the way and always answered my calls. That matters when you're scared.", name: "Angela D.", caseType: "Criminal Defense Client" },
  { quote: "Domestic violence charge that was completely false. Bo dismantled the prosecution's case piece by piece. Not guilty. I owe him everything.", name: "Kevin M.", caseType: "Criminal Defense Client" },
  { quote: "Slip and fall at a commercial property. Bo documented everything, hired an expert, and negotiated a settlement that covered all my medical expenses plus lost wages.", name: "Sandra P.", caseType: "Personal Injury Client" },
  { quote: "Bo fought my DUI case in Williamson County and got it dismissed on a procedural issue the other attorneys I consulted missed entirely. Worth every penny.", name: "Chris F.", caseType: "DUI Client" },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f0f18" }}>
      <SiteHeader />
      <div className="pt-16 lg:pt-[70px]">
        {/* Hero */}
        <section className="py-24 md:py-32" style={{ background: "linear-gradient(135deg, #0f0f18 0%, #1a1a2e 100%)", borderBottom: "1px solid #2a2a3e" }}>
          <div className="container">
            <p className="section-label">Client Reviews</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              What Our Clients Say
            </h1>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#F97316" color="#F97316" />
                ))}
              </div>
              <span className="text-white font-bold text-xl">5.0</span>
              <span className="text-white/40">· Google Reviews</span>
            </div>
            <a
              href="https://www.google.com/search?q=better+know+bo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <ExternalLink size={14} />
              See All Reviews on Google
            </a>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20 section-dark">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.map((r, i) => (
                <ReviewCard key={i} {...r} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <a
                href="https://www.google.com/search?q=better+know+bo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <ExternalLink size={14} />
                See All Reviews on Google
              </a>
            </div>
          </div>
        </section>

        <BottomCTA
          heading="Your story could be next. Let Bo fight for you."
          body="Free consultation. Available 24/7. Bo answers the phone personally."
          ctaLabel="Free Consultation"
          ctaHref="/pg/contact"
          dark={false}
        />
      </div>
      <SiteFooter />
    </div>
  );
}
