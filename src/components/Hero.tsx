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

      {/* Full background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=85"
          alt="Equipe trabalhando com internet de qualidade"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Strong overlay: white on left fading to blue on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-[#1A56DB]/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-32 w-full">
        <div className="max-w-xl space-y-8">

          <div className="initially-hidden">
            <span className="inline-flex items-center gap-2 bg-[#EBF5FF] border border-[#1A56DB]/20 text-[#1A56DB] font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 bg-[#1A56DB] rounded-full animate-pulse" />
              Fibra Óptica · Link Dedicado
            </span>
          </div>

          <div className="initially-hidden delay-100">
            <h1 className="font-display font-black text-5xl md:text-6xl xl:text-7xl leading-[0.95] uppercase tracking-tight text-[#1E293B]">
              Sua operação
              <br />
              <span className="text-[#1A56DB]">sempre</span>
              <br />
              <span className="relative inline-block">
                funcionando
                <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#FBBF24] rounded-full" />
              </span>
            </h1>
          </div>

          <p className="initially-hidden delay-200 font-body text-lg text-slate-500 leading-relaxed">
            Com o nosso <strong className="text-[#1A56DB] font-semibold">link dedicado</strong>, sua operação não passa por problemas. Internet de alta performance para empresas que não podem parar.
          </p>

          <div className="initially-hidden delay-300 flex flex-wrap gap-4">
            <a
              href="#planos"
              className="btn-primary bg-[#1A56DB] hover:bg-[#1E429F] text-white font-body font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-[#1A56DB]/30 text-base"
            >
              Ver Planos
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-body font-semibold px-6 py-4 rounded-xl transition-all text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="initially-hidden delay-400 grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
            {[
              { value: "600+", label: "Megas disponíveis" },
              { value: "99.9%", label: "Uptime garantido" },
              { value: "24/7", label: "Suporte técnico" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-black text-3xl text-[#1A56DB]">{stat.value}</div>
                <div className="font-body text-xs text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom tags bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-slate-200 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-center md:justify-start gap-10 overflow-x-auto">
          {[
            { icon: "🏪", tag: "Supermercados" },
            { icon: "🏢", tag: "Empresas" },
            { icon: "🏥", tag: "Clínicas" },
            { icon: "🏠", tag: "Residências" },
            { icon: "🎮", tag: "Gaming" },
          ].map((item) => (
            <span key={item.tag} className="flex items-center gap-2 font-body text-sm text-slate-400 whitespace-nowrap">
              <span>{item.icon}</span>
              <span>{item.tag}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
