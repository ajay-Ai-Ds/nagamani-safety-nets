import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

/* ─────────────────────────────────────────────
   CSS-only hero slider — 6 slides, 3s rotation
   No JavaScript, no external library
────────────────────────────────────────────── */

const SLIDES = [
  {
    id: 1,
    label: "Balcony Safety Nets",
    imagePath: "/images/hero-balcony.jpg",
    alt: "Balcony safety net installation in Bangalore apartment",
  },
  {
    id: 2,
    label: "Invisible Grills",
    imagePath: "/images/hero-invisible-grills.jpg",
    alt: "Invisible grills installed on apartment window Bangalore",
  },
  {
    id: 3,
    label: "Bird Nets",
    imagePath: "/images/hero-bird-nets.jpg",
    alt: "Bird net installation to prevent birds in Bangalore",
  },
  {
    id: 4,
    label: "Cloth Hangers",
    imagePath: "/images/hero-cloth-hangers.jpg",
    alt: "Ceiling cloth hanger system installed in Bangalore balcony",
  },
  {
    id: 5,
    label: "Children Safety Nets",
    imagePath: "/images/hero-children-nets.jpg",
    alt: "Children safety net on staircase in Bangalore home",
  },
  {
    id: 6,
    label: "Construction Safety Nets",
    imagePath: "/images/hero-construction-nets.jpg",
    alt: "Construction site safety net installation Bangalore",
  },
];

const TOTAL = SLIDES.length;
const DURATION = 3; // seconds per slide

export default function HeroSlider() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-900" style={{ minHeight: "500px" }}>
      {/* ── Slide Track ── */}
      <div className="hero-slider-track absolute inset-0">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className="hero-slide absolute inset-0"
            style={{ animationDelay: `${i * DURATION}s` }}
          >
            {/* IMAGE PLACEHOLDER
                When you have your real image:
                Replace the div below with:
                <Image
                  src={slide.imagePath}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  sizes="100vw"
                />
            */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-green-800 to-green-900 border-4 border-dashed border-green-500/40">
              <div className="text-center">
                <svg className="w-16 h-16 text-green-400/60 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M3.75 3h16.5M4.5 3v18M19.5 3v18" />
                </svg>
                <p className="text-green-300/80 text-sm font-medium">Add your image here</p>
                <p className="text-green-400/60 text-xs mt-1">{slide.imagePath}</p>
                <p className="text-green-300/50 text-xs mt-1">{slide.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Dark overlay gradient ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10 pointer-events-none" />

      {/* ── Hero Content ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 md:py-32 flex flex-col items-start justify-center min-h-[500px] md:min-h-[620px]">
        <div className="max-w-2xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            <span className="text-yellow-400">⭐ {BUSINESS.rating}/5</span>
            <span className="text-white/70">·</span>
            <span>{BUSINESS.reviewCount}+ Happy Customers</span>
            <span className="text-white/70">·</span>
            <span>Bangalore's #1 Safety Net Company</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
            Premium Safety Nets &amp; Invisible Grills Installation in{" "}
            <span className="text-green-400">Bangalore</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
            Protect your family, children and pets with premium quality safety net solutions. Free inspection · Same day installation · Best price guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={BUSINESS.phoneHref}
              id="hero-call-btn"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-green-900/50 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call Now: {BUSINESS.phoneDisplay}
            </a>
            <Link
              href="/contact"
              id="hero-quote-btn"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-2xl border border-white/30 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Get Free Quote
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Quick trust row */}
          <div className="flex flex-wrap gap-4 mt-8">
            {["Free Site Inspection", "Same Day Installation", "1 Year Warranty", "Best Price Guarantee"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-white/70 text-sm">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Slide dots ── */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <span key={i} className="hero-dot" style={{ animationDelay: `${i * DURATION}s` }} />
        ))}
      </div>

      {/* ── Inline CSS for the slider animation ── */}
      <style>{`
        @keyframes slideShow {
          0%        { opacity: 1; z-index: 2; }
          ${100 / TOTAL - 5}%  { opacity: 1; z-index: 2; }
          ${100 / TOTAL}%      { opacity: 0; z-index: 1; }
          100%      { opacity: 0; z-index: 1; }
        }
        @keyframes dotActive {
          0%        { background-color: #22c55e; width: 24px; }
          ${100 / TOTAL - 5}%  { background-color: #22c55e; width: 24px; }
          ${100 / TOTAL}%      { background-color: rgba(255,255,255,0.4); width: 8px; }
          100%      { background-color: rgba(255,255,255,0.4); width: 8px; }
        }
        .hero-slide {
          opacity: 0;
          animation: slideShow ${TOTAL * DURATION}s linear infinite;
        }
        .hero-dot {
          height: 8px;
          width: 8px;
          border-radius: 9999px;
          background-color: rgba(255,255,255,0.4);
          animation: dotActive ${TOTAL * DURATION}s linear infinite;
          transition: all 0.3s;
        }
      `}</style>
    </section>
  );
}
