"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={ref} className="relative py-28 overflow-hidden bg-[#0D0D1A]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2B2E8C] to-transparent"/>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2B2E8C] to-transparent"/>

      <div
        className="absolute right-0 top-0 bottom-0 w-[45%] bg-[#1E2070]/15 border-l border-[#2B2E8C]/20"
        style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image grid */}
          <div
            className="reveal order-2 lg:order-1"
            style={{ opacity: 0, transform: "translateY(2rem)", transition: "all 0.7s ease" }}
          >
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 rounded-2xl bg-[#1E2070]/50 border border-[#2B2E8C]/30 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-16 h-16 text-[#3B3EA0]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
                      </svg>
                    </div>
                    <div className="absolute bottom-3 left-3 font-body text-xs text-gray-400">Infraestrutura</div>
                  </div>
                  <div className="h-36 rounded-2xl bg-[#CC1B1B]/10 border border-[#CC1B1B]/20 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-12 h-12 text-[#CC1B1B]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </div>
                    <div className="absolute bottom-3 left-3 font-body text-xs text-gray-400">Velocidade</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="h-36 rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
                      </svg>
                    </div>
                    <div className="absolute bottom-3 left-3 font-body text-xs text-gray-400">Conectividade</div>
                  </div>
                  <div className="h-48 rounded-2xl bg-[#2B2E8C]/20 border border-[#2B2E8C]/30 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-16 h-16 text-[#3B3EA0]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div className="absolute bottom-3 left-3 font-body text-xs text-gray-400">Suporte humano</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#CC1B1B] text-white font-display font-bold text-sm px-6 py-3 rounded-full shadow-lg whitespace-nowrap">
                + de 5 anos no mercado
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div
              className="reveal"
              style={{ opacity: 0, transform: "translateY(2rem)", transition: "all 0.7s ease" }}
            >
              <span className="font-mono text-[#CC1B1B] text-xs uppercase tracking-widest">// Sobre nós</span>
              <h2 className="font-display font-black text-5xl md:text-6xl uppercase leading-[0.9] mt-3 text-white">
                Sobre a <br/>
                <span className="text-[#CC1B1B]">Informais</span>{" "}
                <span className="text-[#3B3EA0]">Telecom</span>
              </h2>
            </div>

            <div
              className="reveal space-y-4 font-body text-gray-400 leading-relaxed"
              style={{ opacity: 0, transform: "translateY(2rem)", transition: "all 0.7s ease 150ms" }}
            >
              <p>
                Somos a vertente de telecomunicações da Informais, empresa consolidada no mercado de tecnologia da informação. Com o DNA de inovação e excelência técnica que nos define, agora levamos internet de alta qualidade diretamente para residências e empresas da nossa região.
              </p>
              <p>
                Desde nossa fundação, unimos estratégia, tecnologia e atendimento humano para garantir que nossos clientes tenham acesso à internet com estabilidade, segurança e a velocidade que precisam para ir além.
              </p>
            </div>

            <div
              className="reveal grid grid-cols-2 gap-4"
              style={{ opacity: 0, transform: "translateY(2rem)", transition: "all 0.7s ease 200ms" }}
            >
              {[
                { icon: "🔧", title: "Instalação técnica", desc: "Equipe especializada com Wi-Fi 6 incluso" },
                { icon: "📡", title: "Fibra óptica real", desc: "Infraestrutura moderna e robusta" },
                { icon: "🛡️", title: "Conexão segura", desc: "Suporte a IPv6 e proteção de rede" },
                { icon: "🚀", title: "Expansão constante", desc: "Novos bairros e cidades todo mês" },
              ].map((item) => (
                <div key={item.title} className="bg-white/3 hover:bg-white/6 border border-white/8 rounded-xl p-4 transition-colors group cursor-default">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-body font-semibold text-white text-sm group-hover:text-[#CC1B1B] transition-colors">{item.title}</div>
                  <div className="font-body text-gray-500 text-xs mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
