"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BUSINESS, SERVICES } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo.webp"
              alt="Nagamani Safety Nets Logo"
              width={48}
              height={48}
              priority
              className="rounded-xl object-contain"
            />
            <div>
              <span className="text-green-700 font-extrabold text-lg leading-tight block">Nagamani</span>
              <span className="text-gray-600 text-xs leading-tight block">Safety Nets</span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-green-600 transition-colors py-2" aria-haspopup="true" aria-label="Services menu">
                Services
                <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 w-64 grid grid-cols-1 gap-1">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}`}
                      className="px-3 py-2 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors text-sm text-gray-700 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/gallery" className="hover:text-green-600 transition-colors">Gallery</Link>
            <Link href="/about-us" className="hover:text-green-600 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-green-600 transition-colors">Contact</Link>
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 font-semibold text-sm hover:bg-green-100 transition-colors border border-green-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-600 text-white font-bold text-sm hover:bg-green-700 transition-colors shadow-lg shadow-green-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call Now
            </a>
          </div>

          {/* ── Mobile: Call + Hamburger ── */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-green-600 text-white font-bold text-sm hover:bg-green-700 transition-colors shadow"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1">
            <Link href="/" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium transition-colors">Home</Link>

            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              aria-controls="mobile-services-menu"
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium transition-colors"
            >
              Services
              <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div id="mobile-services-menu" className="pl-4 space-y-1" role="region" aria-label="Services list">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/gallery" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium transition-colors">Gallery</Link>
            <Link href="/about-us" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium transition-colors">About</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium transition-colors">Contact</Link>

            <div className="pt-2 flex gap-2 px-4">
              <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-3 py-2.5 rounded-xl bg-green-50 text-green-700 font-semibold text-sm border border-green-200">WhatsApp</a>
              <a href={BUSINESS.phoneHref} className="flex-1 text-center px-3 py-2.5 rounded-xl bg-green-600 text-white font-bold text-sm shadow">Call Now</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
