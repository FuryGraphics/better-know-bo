/* ============================================================
   BETTER KNOW BO — Contact Page
   ============================================================ */

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    caseType: "",
    description: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f0f18" }}>
      <SiteHeader />
      <div className="pt-16 lg:pt-[70px]">
        {/* Hero */}
        <section className="py-24 md:py-32" style={{ background: "linear-gradient(135deg, #0f0f18 0%, #1a1a2e 100%)", borderBottom: "1px solid #2a2a3e" }}>
          <div className="container">
            <p className="section-label">Get In Touch</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Contact Better Know Bo
            </h1>
            <p className="text-xl text-white/60 max-w-xl">
              Available 24/7 — Bo answers the phone. Serving Nashville and all of Middle Tennessee.
            </p>
          </div>
        </section>

        {/* Two-Column Layout */}
        <section className="py-20 section-dark">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left: Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Contact Information
                </h2>
                <div className="flex flex-col gap-6 mb-10">
                  <div className="flex items-start gap-4 p-5" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}>
                    <Phone size={20} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-1">Phone</p>
                      <a href="tel:6159698904" className="text-white font-semibold hover:text-[#F97316] transition-colors text-lg">
                        615-969-8904
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}>
                    <Mail size={20} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-1">Email</p>
                      <a href="mailto:Bo@BetterKnowBo.com" className="text-white font-semibold hover:text-[#F97316] transition-colors">
                        Bo@BetterKnowBo.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}>
                    <MapPin size={20} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-1">Address</p>
                      <p className="text-white font-semibold">1308 Rosa Parks Blvd</p>
                      <p className="text-white/60">Nashville, TN 37208</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}>
                    <Clock size={20} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-1">Hours</p>
                      <p className="text-white font-semibold">Open 24/7 — Bo Answers the Phone</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3">Areas Served</p>
                  <div className="flex flex-wrap gap-2">
                    {["Nashville", "Franklin", "Brentwood", "Lebanon", "Mount Juliet", "Ashland City", "Dickson"].map((city) => (
                      <span key={city} className="city-pill">{city}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Free Consultation Form
                </h2>

                {submitted ? (
                  <div className="p-8 text-center" style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}>
                    <CheckCircle size={48} className="text-[#F97316] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      Message Received
                    </h3>
                    <p className="text-white/60">
                      Thank you for reaching out. Bo will contact you promptly — typically within hours. For urgent matters, call directly: <a href="tel:6159698904" className="text-[#F97316] font-semibold">615-969-8904</a>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold tracking-widest uppercase text-white/40 mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#F97316] transition-colors"
                          style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold tracking-widest uppercase text-white/40 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          className="w-full px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#F97316] transition-colors"
                          style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold tracking-widest uppercase text-white/40 mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          className="w-full px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#F97316] transition-colors"
                          style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold tracking-widest uppercase text-white/40 mb-2">City / County</label>
                        <input
                          type="text"
                          name="city"
                          value={form.city}
                          onChange={handleChange}
                          placeholder="Nashville, Franklin, etc."
                          className="w-full px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#F97316] transition-colors"
                          style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase text-white/40 mb-2">Type of Case *</label>
                      <select
                        name="caseType"
                        required
                        value={form.caseType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F97316] transition-colors"
                        style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}
                      >
                        <option value="" disabled>Select case type</option>
                        <option value="criminal-defense">Criminal Defense</option>
                        <option value="dui-dwi">DUI / DWI</option>
                        <option value="personal-injury">Personal Injury</option>
                        <option value="truck-wreck">Truck Wreck</option>
                        <option value="motorcycle-accident">Motorcycle Accident</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase text-white/40 mb-2">Brief Description</label>
                      <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Briefly describe your situation..."
                        className="w-full px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#F97316] transition-colors resize-none"
                        style={{ backgroundColor: "#1a1a2e", border: "1px solid #2a2a3e" }}
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center py-4 text-sm">
                      Submit — Free Consultation
                    </button>
                    <p className="text-xs text-white/30 leading-relaxed">
                      By submitting, you agree to be contacted by our firm by phone, text, or email. This does not create an attorney-client relationship.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="section-surface" style={{ borderTop: "1px solid #2a2a3e" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.5!2d-86.8049!3d36.1841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864668c8f6e2b4d%3A0x1234567890abcdef!2s1308%20Rosa%20Parks%20Blvd%2C%20Nashville%2C%20TN%2037208!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Better Know Bo Office Location"
          />
        </section>

        {/* Bottom CTA Strip */}
        <section className="py-10" style={{ backgroundColor: "#1a1a2e", borderTop: "1px solid #2a2a3e" }}>
          <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-lg font-semibold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Don't wait. Every hour matters in a criminal case.
            </p>
            <a href="tel:6159698904" className="btn-primary flex items-center gap-2">
              <Phone size={15} />
              Call Now: 615-969-8904
            </a>
          </div>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}
