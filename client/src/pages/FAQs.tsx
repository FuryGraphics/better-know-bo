/* ============================================================
   BETTER KNOW BO — FAQs Page
   ============================================================ */

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { FAQItem, BottomCTA } from "@/components/shared";
import { Link } from "wouter";

const faqs = [
  {
    question: "What should I do if I've been arrested in Tennessee?",
    answer: "Do not try to explain your situation to police. Politely invoke your right to remain silent and ask for an attorney immediately. Anything you say can and will be used against you. Call Bo at 615-969-8904 as soon as possible — he answers the phone 24/7.",
  },
  {
    question: "Do I really need a lawyer if I'm innocent?",
    answer: "Yes. Innocence alone does not protect you in the criminal justice system. Prosecutors still pursue charges, and mistakes happen. A skilled defense attorney safeguards your rights and helps avoid wrongful convictions. Don't assume the truth will simply come out on its own.",
  },
  {
    question: "How soon should I hire a criminal defense attorney?",
    answer: "Immediately. Early intervention can mean preventing charges from being filed, securing better bond conditions, preserving key evidence, and building a stronger defense strategy. The sooner Bo is in your corner, the better your odds.",
  },
  {
    question: "What happens at my first court appearance?",
    answer: "Your first appearance (often called arraignment) is where charges are formally presented, the court may review probable cause, and bond and bond conditions may be reviewed. Having an attorney present from the very first appearance is critical.",
  },
  {
    question: "What is the difference between a misdemeanor and a felony in Tennessee?",
    answer: "Misdemeanors are less serious offenses typically punishable by up to 11 months and 29 days in county jail. Felonies are more serious crimes that carry potential prison sentences of one year or more and have long-term consequences for employment, housing, voting rights, and firearm ownership.",
  },
  {
    question: "Will my case go to trial?",
    answer: "Not necessarily. Many cases are resolved through case dismissal, plea negotiations, or pretrial diversion programs. However, Bo prepares every case as if it's going to trial — that preparation is often what produces the best outcomes.",
  },
  {
    question: "Can my case be dismissed?",
    answer: "Yes, depending on factors like lack of evidence, illegal search or arrest, witness credibility issues, or procedural errors. Bo investigates every angle and looks for every opportunity to challenge the state's case.",
  },
  {
    question: "What is bail and how does it work in Tennessee?",
    answer: "Bail is money or a bond posted to secure your release while your case is pending. Judges set bail based on the charge and risk factors. You may pay cash or use a bail bondsman. Conditions may apply including travel restrictions, drug tests, and check-ins. Bo can argue for reasonable bail at your first appearance.",
  },
  {
    question: "What are my rights after being arrested?",
    answer: "You have the right to remain silent, the right to refuse searches without a warrant, the right to have an attorney present during questioning, and the right to be treated fairly under the law. Exercise these rights — politely but firmly.",
  },
  {
    question: "Should I talk to the police to 'clear things up'?",
    answer: "No. Even innocent statements can be misinterpreted, taken out of context, or used against you. Always speak through your attorney. This is one of the most important rules in criminal defense.",
  },
  {
    question: "What if the police violated my rights?",
    answer: "If your rights were violated — through an illegal search, improper questioning, or other constitutional violations — evidence may be suppressed, which can significantly weaken or even dismiss the case entirely. Bo investigates every aspect of how evidence was obtained.",
  },
  {
    question: "What defenses are available in criminal cases?",
    answer: "Defense strategies vary but may include lack of intent, self-defense, mistaken identity, constitutional violations, insufficient evidence, alibi, and entrapment. Bo evaluates every possible defense before recommending a strategy.",
  },
  {
    question: "Can charges be reduced?",
    answer: "Yes. Depending on the facts, charges may be reduced through negotiation or legal challenges, potentially minimizing penalties and long-term consequences. Bo always explores every option before recommending a plea.",
  },
  {
    question: "What is a plea deal, and should I take one?",
    answer: "A plea deal is an agreement with the prosecutor to resolve your case without trial. Whether to accept depends on the strength of the evidence, potential penalties, and long-term consequences. You should never accept a plea deal without fully understanding your options — and Bo will make sure you do.",
  },
  {
    question: "What is deferred adjudication / judicial diversion in Tennessee?",
    answer: "Judicial diversion is a form of probation in Tennessee where you avoid a conviction if you complete the terms. The case may later be eligible for expungement. Eligibility depends on your charge, criminal history, and other factors. Bo can advise whether you qualify.",
  },
  {
    question: "Can I get my record expunged in Tennessee?",
    answer: "Under certain circumstances, options include expunction (which erases the record) or sealing. Eligibility depends on the outcome of your case, the type of charge, and how much time has passed. Call Bo to discuss your specific situation.",
  },
  {
    question: "What happens if I'm charged with DUI in Tennessee?",
    answer: "A DUI conviction in Tennessee carries license suspension, fines, potential jail time, mandatory drug/alcohol treatment, and an ignition interlock device requirement. The key is to fight the charge immediately — don't assume a conviction is inevitable.",
  },
  {
    question: "Can I refuse a breathalyzer in Tennessee?",
    answer: "Yes, but Tennessee's implied consent law means that refusing a breathalyzer results in an automatic license suspension. However, refusal may also limit the evidence available against you. Bo can advise on the best strategy for your specific situation.",
  },
  {
    question: "Will a DUI affect my job or professional license?",
    answer: "Potentially yes. A DUI conviction can affect professional licenses in healthcare, law, education, and other fields. It can also affect security clearances and certain employment opportunities. Fighting the charge aggressively is the best way to protect your career.",
  },
  {
    question: "What is the difference between DUI and DWI in Tennessee?",
    answer: "In Tennessee, DUI (Driving Under the Influence) is the standard charge for impaired driving. DWI is sometimes used colloquially but Tennessee law primarily uses DUI. Both refer to operating a vehicle while impaired by alcohol, drugs, or a combination of both.",
  },
  {
    question: "How much does a criminal defense attorney cost?",
    answer: "Fees vary based on the type of charge, complexity of the case, and whether the case goes to trial. Bo offers flexible payment plans and flat-fee options on select cases. Call 615-969-8904 for a free consultation to discuss your case and pricing.",
  },
  {
    question: "Does Bo Ladner offer payment plans?",
    answer: "Yes. Bo understands that legal emergencies don't wait for financial convenience. Flexible, affordable payment plans are available. Call 615-969-8904 to discuss options.",
  },
  {
    question: "Why should I hire Better Know Bo?",
    answer: "Because when you call, Bo answers. Not a paralegal, not a receptionist — Bo. He's a Nashville native who knows the local courts, the prosecutors, and the judges. He investigates aggressively before any plea is considered. He fights for dismissal, not just deals. And he's available 24/7 when you need him most.",
  },
];

export default function FAQsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f0f18" }}>
      <SiteHeader />
      <div className="pt-16 lg:pt-[70px]">
        {/* Hero */}
        <section className="py-24 md:py-32" style={{ background: "linear-gradient(135deg, #0f0f18 0%, #1a1a2e 100%)", borderBottom: "1px solid #2a2a3e" }}>
          <div className="container">
            <p className="section-label">Common Questions</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-white/50 max-w-xl">
              Answers to your most important criminal defense and DUI questions from Nashville attorney Bo Ladner.
            </p>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-20 section-dark">
          <div className="container max-w-3xl">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}

            <div className="mt-12 p-8 text-center" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}>
              <p className="text-white/60 mb-4">Still have questions? Call Bo directly.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:6159698904" className="btn-primary">
                  615-969-8904
                </a>
                <Link href="/pg/contact" className="btn-secondary">
                  Free Consultation Form
                </Link>
              </div>
            </div>
          </div>
        </section>

        <BottomCTA
          heading="Still have questions? Call Bo."
          body="Available 24/7. Bo answers the phone personally and will give you a straight answer."
          ctaLabel="Free Consultation"
          ctaHref="/pg/contact"
          dark={false}
        />
      </div>
      <SiteFooter />
    </div>
  );
}
