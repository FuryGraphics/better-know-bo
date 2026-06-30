/* ============================================================
   BETTER KNOW BO — SiteHeader Component
   Design: Courtroom Noir — sticky dark nav, orange CTAs
   ============================================================ */

import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const practiceAreas = [
  { label: "Criminal Defense", href: "/pg/criminal-defense-nashville" },
  { label: "DUI / DWI Defense", href: "/pg/dui-defense-nashville" },
  { label: "Personal Injury", href: "/pg/personal-injury-nashville" },
  { label: "Truck Wrecks", href: "/pg/truck-wreck-attorney-nashville" },
  { label: "Motorcycle Accidents", href: "/pg/motorcycle-accident-attorney-nashville" },
  { label: "Drug Charges", href: "/pg/criminal-defense-nashville" },
  { label: "Assault & Aggravated Assault", href: "/pg/criminal-defense-nashville" },
  { label: "Rape & Sexual Assault", href: "/pg/criminal-defense-nashville" },
];

const areasServed = [
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
];

function DropdownMenu({
  label,
  items,
  isOpen,
  onToggle,
}: {
  label: string;
  items: { label: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        if (isOpen) onToggle();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onToggle]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-xs font-semibold tracking-widest uppercase text-white/80 hover:text-[#F97316] transition-colors duration-150 py-2"
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown
          size={13}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`nav-dropdown ${isOpen ? "open" : ""}`}>
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onToggle}
            className="block px-4 py-3 text-sm font-medium text-white/80 hover:text-[#F97316] hover:bg-white/5 transition-colors duration-150 border-b border-[#2a2a3e] last:border-0"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobilePracticeOpen, setMobilePracticeOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [location] = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setPracticeOpen(false);
    setAreasOpen(false);
  }, [location]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "#0f0f18", borderBottom: "1px solid #2a2a3e" }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-[70px]">
          {/* Logo */}
          <Link href="/pg/home" className="flex-shrink-0">
            <span
              className="font-bold text-lg lg:text-xl tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F97316" }}
            >
              Better Know Bo
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              href="/pg/home"
              className="text-xs font-semibold tracking-widest uppercase text-white/80 hover:text-[#F97316] transition-colors duration-150"
            >
              Home
            </Link>
            <DropdownMenu
              label="Practice Areas"
              items={practiceAreas}
              isOpen={practiceOpen}
              onToggle={() => {
                setPracticeOpen((v) => !v);
                setAreasOpen(false);
              }}
            />
            <DropdownMenu
              label="Areas Served"
              items={areasServed}
              isOpen={areasOpen}
              onToggle={() => {
                setAreasOpen((v) => !v);
                setPracticeOpen(false);
              }}
            />
            <Link
              href="/pg/about"
              className="text-xs font-semibold tracking-widest uppercase text-white/80 hover:text-[#F97316] transition-colors duration-150"
            >
              About
            </Link>
            <Link
              href="/pg/reviews"
              className="text-xs font-semibold tracking-widest uppercase text-white/80 hover:text-[#F97316] transition-colors duration-150"
            >
              Reviews
            </Link>
            <Link
              href="/pg/contact"
              className="text-xs font-semibold tracking-widest uppercase text-white/80 hover:text-[#F97316] transition-colors duration-150"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:6159698904"
              className="flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-[#F97316] transition-colors duration-150"
            >
              <Phone size={14} />
              615-969-8904
            </a>
            <Link href="/pg/contact" className="btn-primary text-xs py-2.5 px-5">
              Free Consultation
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{ backgroundColor: "#0f0f18", borderColor: "#2a2a3e" }}
        >
          <div className="container py-4 flex flex-col gap-1">
            <Link
              href="/pg/home"
              className="py-3 text-sm font-semibold tracking-widest uppercase text-white/80 hover:text-[#F97316] transition-colors border-b border-[#2a2a3e]"
            >
              Home
            </Link>

            {/* Mobile Practice Areas */}
            <div className="border-b border-[#2a2a3e]">
              <button
                onClick={() => setMobilePracticeOpen((v) => !v)}
                className="w-full flex justify-between items-center py-3 text-sm font-semibold tracking-widest uppercase text-white/80 hover:text-[#F97316] transition-colors"
              >
                Practice Areas
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${mobilePracticeOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobilePracticeOpen && (
                <div className="pl-4 pb-2 flex flex-col gap-1">
                  {practiceAreas.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="py-2 text-sm text-white/60 hover:text-[#F97316] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Areas Served */}
            <div className="border-b border-[#2a2a3e]">
              <button
                onClick={() => setMobileAreasOpen((v) => !v)}
                className="w-full flex justify-between items-center py-3 text-sm font-semibold tracking-widest uppercase text-white/80 hover:text-[#F97316] transition-colors"
              >
                Areas Served
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${mobileAreasOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileAreasOpen && (
                <div className="pl-4 pb-2 flex flex-col gap-1">
                  {areasServed.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="py-2 text-sm text-white/60 hover:text-[#F97316] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/pg/about"
              className="py-3 text-sm font-semibold tracking-widest uppercase text-white/80 hover:text-[#F97316] transition-colors border-b border-[#2a2a3e]"
            >
              About
            </Link>
            <Link
              href="/pg/reviews"
              className="py-3 text-sm font-semibold tracking-widest uppercase text-white/80 hover:text-[#F97316] transition-colors border-b border-[#2a2a3e]"
            >
              Reviews
            </Link>
            <Link
              href="/pg/contact"
              className="py-3 text-sm font-semibold tracking-widest uppercase text-white/80 hover:text-[#F97316] transition-colors border-b border-[#2a2a3e]"
            >
              Contact
            </Link>

            <div className="pt-4 flex flex-col gap-3">
              <a href="tel:6159698904" className="btn-secondary text-center text-xs py-3">
                <Phone size={14} className="inline mr-2" />
                615-969-8904
              </a>
              <Link href="/pg/contact" className="btn-primary text-center text-xs py-3">
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
