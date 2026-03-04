"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".initially-hidden").forEach((el, i) => {
              setTimeout(() => el.classList.add("animate-fade-up"), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="inicio" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">

      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/working.png"
          alt="Equipe trabalhando com internet de qualidade"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E]/95 via-[#0D1B3E]/80 to-[#0D1B3E]/40" />
      </div>

      {/* Yellow top accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FBBF24] z-10" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pt-24 pb-28">
        <div className="max-w-2xl space-y-8">

          <div className="initially-hidden">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-[#FBBF24] rounded-full animate-pulse" />
              Fibra Óptica · Link Dedicado
            </span>
          </div>

          <div className="initially-hidden delay-100">
            <h1 className="font-display font-black text-5xl md:text-6xl xl:text-[5.5rem] leading-[0.9] uppercase tracking-tight text-white">
              Sua
              <br />
              <span className="text-[#FBBF24]">operação</span>
              <br />
              <span className="relative inline-block">
                não para.
                <span className="absolute -bottom-2 left-0 right-0 h-2 bg-[#1A56DB] rounded-full" />
              </span>
            </h1>
          </div>

          <p className="initially-hidden delay-200 font-body text-lg text-slate-300 leading-relaxed max-w-lg">
            Com o nosso <strong className="text-white font-semibold">link dedicado</strong>, sua empresa fica sempre online. Supermercados, clínicas, lojas — internet que acompanha o ritmo do seu negócio.
          </p>

          <div className="initially-hidden delay-300 flex flex-wrap gap-4">
            <a
              href="#planos"
              className="btn-primary bg-[#1A56DB] hover:bg-[#1E429F] text-white font-body font-semibold px-8 py-4 rounded-xl transition-all text-base"
            >
              Ver Planos
            </a>
            <a
              href="#contato"
              className="btn-primary bg-[#FBBF24] hover:bg-[#D97706] text-[#1E293B] font-body font-semibold px-8 py-4 rounded-xl transition-all text-base"
            >
              Falar conosco
            </a>
          </div>

          {/* Stats pills — all uniform glass style */}
          <div className="initially-hidden delay-400 flex flex-wrap gap-3 pt-2">
            {[
              { value: "600 Mbps", label: "de velocidade"   },
              { value: "99.9%",    label: "uptime garantido" },
              { value: "24/7",     label: "suporte técnico"  },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/20 border border-white/30 backdrop-blur-sm text-white rounded-2xl px-5 py-3"
              >
                <div className="font-display font-black text-xl leading-none">{stat.value}</div>
                <div className="font-body text-xs mt-0.5 opacity-60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
