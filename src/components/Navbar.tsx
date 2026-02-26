"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D1A]/95 backdrop-blur-md border-b border-[#1F2060] shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <rect width="36" height="36" rx="8" fill="#1E1E3A"/>
              <path d="M10 26 L18 10 L26 26" stroke="#CC1B1B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <circle cx="18" cy="10" r="2.5" fill="#CC1B1B"/>
              <path d="M8 26 L28 26" stroke="#2B2E8C" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div>
              <span className="font-display font-black text-xl tracking-tight text-white">infor</span>
              <span className="font-display font-black text-xl tracking-tight text-[#CC1B1B]">mais</span>
            </div>
            <span className="block font-body text-[10px] text-gray-400 tracking-widest uppercase leading-none -mt-1">
              Telecom
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Início", href: "#inicio" },
            { label: "Sobre", href: "#sobre" },
            { label: "Serviços", href: "#servicos" },
            { label: "Planos", href: "#planos" },
            { label: "Contato", href: "#contato" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-link font-body text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-body font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}/>
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`}/>
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="bg-[#0D0D1A]/98 backdrop-blur-md border-t border-[#1F2060] px-6 py-4 flex flex-col gap-4">
          {[
            { label: "Início", href: "#inicio" },
            { label: "Sobre", href: "#sobre" },
            { label: "Serviços", href: "#servicos" },
            { label: "Planos", href: "#planos" },
            { label: "Contato", href: "#contato" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-gray-300 hover:text-white py-1 border-b border-white/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-sm px-4 py-3 rounded-lg mt-2"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
