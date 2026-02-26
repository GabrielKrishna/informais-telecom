"use client";

import { useEffect, useRef } from "react";

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
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0D0D1A]"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-70" />

      {/* Diagonal red accent lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[3px] h-[200vh] bg-gradient-to-b from-[#CC1B1B] via-[#CC1B1B]/40 to-transparent"
          style={{ top: "-20%", right: "25%", transform: "rotate(25deg)", transformOrigin: "top" }}
        />
        <div
          className="absolute w-[2px] h-[150vh] bg-gradient-to-b from-[#CC1B1B]/60 via-[#CC1B1B]/20 to-transparent"
          style={{ top: "-10%", right: "35%", transform: "rotate(25deg)", transformOrigin: "top" }}
        />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#2B2E8C]/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#CC1B1B]/8 rounded-full blur-[100px]" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#1E2070]/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="initially-hidden">
              <span className="inline-flex items-center gap-2 bg-[#CC1B1B]/10 border border-[#CC1B1B]/30 text-[#CC1B1B] font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 bg-[#CC1B1B] rounded-full animate-pulse" />
                Fibra Óptica — Alta Performance
              </span>
            </div>

            <div className="initially-hidden delay-100">
              <h1 className="font-display font-black text-6xl md:text-7xl xl:text-8xl leading-[0.9] uppercase tracking-tight">
                <span className="text-white">Sua internet</span>
                <br />
                <span className="text-[#CC1B1B]">no limite</span>
                <br />
                <span className="text-white">da</span>{" "}
                <span className="text-transparent" style={{ WebkitTextStroke: "2px #2B2E8C" }}>
                  velocidade
                </span>
              </h1>
            </div>

            <p className="initially-hidden delay-200 font-body text-lg text-gray-400 max-w-xl leading-relaxed">
              Conecte-se, trabalhe, jogue e transmita sem limites. A Informais Telecom traz fibra óptica de verdade até a sua porta — com estabilidade, suporte e tecnologia de ponta.
            </p>

            <div className="initially-hidden delay-300 flex flex-wrap gap-4">
              <a
                href="#planos"
                className="btn-primary bg-[#CC1B1B] hover:bg-red-700 text-white font-body font-semibold px-8 py-4 rounded-lg transition-all hover:shadow-lg text-base"
              >
                Ver Planos
              </a>
              <a
                href="#sobre"
                className="flex items-center gap-2 text-gray-300 hover:text-white font-body font-medium px-6 py-4 border border-white/10 hover:border-white/30 rounded-lg transition-all text-base"
              >
                Conheça a empresa
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="initially-hidden delay-400 grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              {[
                { value: "600+", label: "Megas disponíveis" },
                { value: "99.9%", label: "Uptime garantido" },
                { value: "24/7", label: "Suporte técnico" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-black text-3xl text-[#CC1B1B]">{stat.value}</div>
                  <div className="font-body text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Speed card */}
          <div className="initially-hidden delay-300 relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative bg-[#12122A] border border-[#1F2060] rounded-2xl p-8 shadow-2xl">
                {/* Red corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[64px] border-l-transparent border-t-[64px] border-t-[#CC1B1B]" />
                </div>

                <div className="text-center space-y-6">
                  <div className="font-body text-gray-500 text-sm uppercase tracking-widest">Velocidade atual</div>

                  <div className="relative w-48 h-48 mx-auto">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="#1F2060" strokeWidth="6"/>
                      <circle cx="50" cy="50" r="42" fill="none" stroke="#CC1B1B" strokeWidth="6" strokeLinecap="round" strokeDasharray="263.9" strokeDashoffset="26"/>
                      <circle cx="50" cy="50" r="42" fill="none" stroke="#2B2E8C" strokeWidth="3" strokeLinecap="round" strokeDasharray="263.9" strokeDashoffset="63" opacity="0.5"/>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-display font-black text-5xl text-white">600</span>
                      <span className="font-body text-[#CC1B1B] text-sm font-semibold">Mbps</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#0D0D1A] rounded-xl p-4 text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <svg className="w-4 h-4 text-[#3B3EA0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        <span className="font-body text-xs text-gray-500">Download</span>
                      </div>
                      <span className="font-display font-bold text-xl text-white">600 Mb</span>
                    </div>
                    <div className="bg-[#0D0D1A] rounded-xl p-4 text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <svg className="w-4 h-4 text-[#CC1B1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4-4m0 0l-4-4m4 4H3" />
                        </svg>
                        <span className="font-body text-xs text-gray-500">Upload</span>
                      </div>
                      <span className="font-display font-bold text-xl text-white">300 Mb</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-green-400 text-sm font-body">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
                    Conexão estável · Latência 2ms
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-6 -left-8 bg-[#2B2E8C] border border-[#3B3EA0] rounded-xl px-4 py-3 shadow-xl">
                <div className="font-body text-xs text-gray-400">Wi-Fi 6</div>
                <div className="font-display font-bold text-white text-sm">Grátis na instalação</div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#12122A] border border-[#CC1B1B]/30 rounded-xl px-4 py-3 shadow-xl">
                <div className="font-body text-xs text-gray-400">Suporte</div>
                <div className="font-display font-bold text-[#CC1B1B] text-sm">24h / 7 dias</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="font-body text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent animate-bounce"/>
        </div>
      </div>

      {/* Tags strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center md:justify-start gap-10 overflow-x-auto">
          {[
            { icon: "📺", tag: "#Streaming" },
            { icon: "📱", tag: "#RedesSociais" },
            { icon: "🎮", tag: "#Gaming" },
            { icon: "🏠", tag: "#HomeOffice" },
          ].map((item) => (
            <span key={item.tag} className="flex items-center gap-2 font-body text-sm text-gray-500 whitespace-nowrap">
              <span>{item.icon}</span>
              <span>{item.tag}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
