"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

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
    <section id="sobre" ref={ref} className="relative overflow-hidden bg-[#F8FAFC]">
      <div className="grid lg:grid-cols-2 min-h-[600px]">

        {/* Left: Image as full block */}
        <div
          className="reveal relative min-h-[400px] lg:min-h-full order-2 lg:order-1"
          style={{ opacity: 0, transform: "translateY(2rem)", transition: "all 0.8s ease" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85"
            alt="Caixa de supermercado atendendo com internet estável"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Blue overlay bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#1A56DB]/70 to-transparent" />
          {/* Badge over image */}
          <div className="absolute bottom-8 left-8 bg-white rounded-xl px-5 py-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1A56DB] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-sm text-[#1E293B]">Operação garantida</div>
                <div className="font-body text-xs text-slate-400">Sem quedas, sem prejuízo</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="order-1 lg:order-2 flex items-center">
          <div className="px-10 py-20 lg:px-16 space-y-8 max-w-xl">

            <div
              className="reveal"
              style={{ opacity: 0, transform: "translateY(2rem)", transition: "all 0.7s ease" }}
            >
              <span className="inline-block bg-[#EBF5FF] text-[#1A56DB] font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                // Sobre nós
              </span>
              <h2 className="font-display font-black text-5xl md:text-6xl uppercase leading-[0.9] text-[#1E293B]">
                Sobre a <br />
                <span className="text-[#1A56DB]">Informais</span>{" "}
                <span className="relative">
                  Telecom
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#FBBF24] rounded-full block" />
                </span>
              </h2>
            </div>

            <div
              className="reveal space-y-4 font-body text-slate-500 leading-relaxed"
              style={{ opacity: 0, transform: "translateY(2rem)", transition: "all 0.7s ease 150ms" }}
            >
              <p>
                Somos a vertente de telecomunicações da Informais, empresa consolidada no mercado de tecnologia. Com DNA de inovação, levamos internet de alta qualidade para residências e empresas que precisam de conexão confiável para operar.
              </p>
              <p>
                Nosso <strong className="text-[#1A56DB] font-semibold">link dedicado</strong> garante que supermercados, clínicas, lojas e escritórios nunca fiquem offline. Porque sabemos que cada minuto sem internet é prejuízo para o seu negócio.
              </p>
            </div>

            <div
              className="reveal grid grid-cols-2 gap-4"
              style={{ opacity: 0, transform: "translateY(2rem)", transition: "all 0.7s ease 200ms" }}
            >
              {[
                { icon: "🔧", title: "Instalação técnica", desc: "Wi-Fi 6 incluso" },
                { icon: "📡", title: "Fibra óptica real", desc: "Infraestrutura robusta" },
                { icon: "🏪", title: "Para empresas", desc: "Link dedicado exclusivo" },
                { icon: "🚀", title: "Expansão constante", desc: "Novos bairros todo mês" },
              ].map((item) => (
                <div key={item.title} className="bg-white hover:bg-[#EBF5FF] border border-slate-200 hover:border-[#1A56DB]/30 rounded-xl p-4 transition-all group cursor-default shadow-sm">
                  <div className="text-xl mb-2">{item.icon}</div>
                  <div className="font-body font-semibold text-slate-700 text-sm group-hover:text-[#1A56DB] transition-colors">{item.title}</div>
                  <div className="font-body text-slate-400 text-xs mt-0.5">{item.desc}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
