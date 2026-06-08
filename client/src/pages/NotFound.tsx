/* ============================================================
   BETTER KNOW BO — 404 Not Found Page
   ============================================================ */

import { Link } from "wouter";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f0f18" }}>
      <SiteHeader />
      <div className="pt-16 lg:pt-[70px] min-h-screen flex items-center">
        <div className="container text-center py-24">
          <p
            className="text-8xl md:text-9xl font-bold mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(249,115,22,0.15)" }}
          >
            404
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Page Not Found
          </h1>
          <p className="text-white/50 mb-10 max-w-md mx-auto">
            The page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/pg/home" className="btn-primary">
              Return Home
            </Link>
            <Link href="/pg/contact" className="btn-secondary">
              Contact Bo
            </Link>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
