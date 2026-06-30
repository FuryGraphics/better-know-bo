/* ============================================================
   BETTER KNOW BO — SiteFooter Component
   Design: Courtroom Noir — 4-column dark footer
   ============================================================ */

import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer style={{ backgroundColor: "#0a0a14", borderTop: "1px solid #2a2a3e" }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo + Tagline + Contact */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F97316" }}
              >
                Better Know Bo
              </span>
            </div>
            <p className="text-sm text-white/50 mb-6 leading-relaxed">
              Nashville's fighter in your corner. Criminal defense, DUI, and personal injury representation across Middle Tennessee.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:6159698904"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-[#F97316] transition-colors"
              >
                <Phone size={14} className="text-[#F97316] flex-shrink-0" />
                615-969-8904
              </a>
              <a
                href="mailto:Bo@BetterKnowBo.com"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-[#F97316] transition-colors"
              >
                <Mail size={14} className="text-[#F97316] flex-shrink-0" />
                Bo@BetterKnowBo.com
              </a>
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin size={14} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                <span>1308 Rosa Parks Blvd<br />Nashville, TN 37208</span>
              </div>
            </div>
          </div>

          {/* Column 2: Practice Areas */}
          <div>
            <h3
              className="text-sm font-semibold tracking-widest uppercase mb-5"
              style={{ color: "#F97316" }}
            >
              Practice Areas
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Criminal Defense", href: "/pg/criminal-defense-nashville" },
                { label: "DUI / DWI Defense", href: "/pg/dui-defense-nashville" },
                { label: "Personal Injury", href: "/pg/personal-injury-nashville" },
                { label: "Truck Wrecks", href: "/pg/truck-wreck-attorney-nashville" },
                { label: "Motorcycle Accidents", href: "/pg/motorcycle-accident-attorney-nashville" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-[#F97316] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3
              className="text-sm font-semibold tracking-widest uppercase mb-5"
              style={{ color: "#F97316" }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Home", href: "/pg/home" },
                { label: "About Bo", href: "/pg/about" },
                { label: "Client Reviews", href: "/pg/reviews" },
                { label: "FAQs", href: "/pg/faqs" },
                { label: "Contact Us", href: "/pg/contact" },
                { label: "Privacy Policy", href: "/pg/privacy-policy" },
                { label: "Terms & Conditions", href: "/pg/terms-and-conditions" },
                { label: "Disclaimer", href: "/pg/disclaimer" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-[#F97316] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Areas We Serve */}
          <div>
            <h3
              className="text-sm font-semibold tracking-widest uppercase mb-5"
              style={{ color: "#F97316" }}
            >
              Areas We Serve
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Nashville", href: "/pg/nashville-criminal-defense-lawyer" },
                { label: "Franklin", href: "/pg/franklin-criminal-defense-lawyer" },
                { label: "Brentwood", href: "/pg/brentwood-criminal-defense-lawyer" },
                { label: "Lebanon", href: "/pg/lebanon-criminal-defense-lawyer" },
                { label: "Mount Juliet", href: "/pg/mount-juliet-criminal-defense-lawyer" },
                { label: "Ashland City", href: "/pg/ashland-city-criminal-defense-lawyer" },
                { label: "Dickson", href: "/pg/dickson-criminal-defense-lawyer" },
                { label: "Murfreesboro", href: "/pg/murfreesboro-criminal-defense-lawyer" },
                { label: "Smyrna", href: "/pg/smyrna-criminal-defense-lawyer" },
                { label: "Columbia", href: "/pg/columbia-criminal-defense-lawyer" },
                { label: "Mount Pleasant", href: "/pg/mount-pleasant-criminal-defense-lawyer" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-[#F97316] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid #2a2a3e", backgroundColor: "#070710" }}>
        <div className="container py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
            <p>
              © 2026 Better Know Bo — Ladner Criminal Defense and DUI Lawyer. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/pg/privacy-policy" className="hover:text-[#F97316] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/pg/terms-and-conditions" className="hover:text-[#F97316] transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/pg/disclaimer" className="hover:text-[#F97316] transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
          <p className="text-xs text-white/25 mt-3 text-center md:text-left leading-relaxed">
            The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. Receipt or viewing does not constitute an attorney-client relationship. Attorney advertising.
          </p>
        </div>
      </div>
    </footer>
  );
}
