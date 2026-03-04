"use client";

import { useEffect, useRef, useState } from "react";

const plans = [
  {
    id: "inicial",
    name: "Plano Inicial",
    speed: "200",
    price: "85",
    description: "Ideal para residências e pequenos negócios.",
    features: ["Fibra óptica", "Wi-Fi 6 grátis", "Suporte a IPv6", "Suporte online"],
    highlight: false,
  },
  {
    id: "intermediario",
    name: "Plano Intermediário",
    speed: "400",
    price: "100",
    description: "O mais escolhido. Perfeito para empresas e famílias exigentes.",
    features: ["Fibra óptica", "Wi-Fi 6 grátis", "Suporte a IPv6", "Suporte online", "Prioridade no suporte"],
    highlight: true,
  },
  {
    id: "avancado",
    name: "Plano Avançado",
    speed: "600",
    price: "115",
    description: "Máxima velocidade com link dedicado para sua operação.",
    features: ["Fibra óptica", "Wi-Fi 6 grátis", "Suporte a IPv6", "Suporte online", "Prioridade no suporte", "IP Fixo incluso"],
    highlight: false,
  },
];

export default function Plans() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="planos" ref={ref} className="relative overflow-hidden">
      {/* Top blue separator */}
      <div className="h-1.5 bg-[#1A56DB]" />

      {/* Diagonal stripe background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            rgba(26, 86, 219, 0.06) 20px,
            rgba(26, 86, 219, 0.06) 24px
          )`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block bg-[#EBF5FF] text-[#1A56DB] border border-[#1A56DB]/15 font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            // Planos
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl uppercase leading-[0.9] text-[#1E293B] mb-4">
            Escolha o plano{" "}
            <span className="text-[#1A56DB]">ideal</span>
          </h2>
          <p className="font-body text-slate-500 text-lg leading-relaxed">
            Fibra óptica real, Wi-Fi 6 grátis e suporte 24/7 em todos os planos.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`plan-card relative rounded-2xl overflow-hidden bg-white transition-all duration-700 ${
                plan.highlight
                  ? "shadow-2xl shadow-[#1A56DB]/20 scale-105"
                  : "shadow-lg shadow-[#1A56DB]/10"
              } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`w-full bg-[#1A56DB] ${plan.highlight ? "h-1.5" : "h-px"}`} />

              {plan.highlight && (
                <div className="bg-[#FBBF24] text-center py-2">
                  <span className="font-display font-bold text-xs uppercase tracking-widest text-[#1E293B]">
                    ⚡ Mais popular
                  </span>
                </div>
              )}

              <div className={`p-8 ${plan.highlight ? "py-10" : "py-8"}`}>
                <h3 className="font-display font-bold text-lg uppercase text-[#1E293B] mb-1">
                  {plan.name}
                </h3>
                <p className="font-body text-slate-400 text-sm mb-6">
                  {plan.description}
                </p>

                <div className="mb-1">
                  <span className={`font-display font-black text-7xl leading-none ${plan.highlight ? "text-[#1A56DB]" : "text-[#1E293B]"}`}>
                    {plan.speed}
                  </span>
                  <span className="font-display font-bold text-2xl ml-2 text-[#FBBF24]">
                    Mega
                  </span>
                </div>

                <div className="mb-8 pb-8 border-b border-slate-100">
                  <span className="font-body text-sm text-slate-400">por </span>
                  <span className="font-display font-black text-2xl text-[#1E293B]">R$ {plan.price},00</span>
                  <span className="font-body text-sm text-slate-400">/mês</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 font-body text-sm text-slate-600">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? "bg-[#EBF5FF]" : "bg-slate-100"}`}>
                        <svg className={`w-3 h-3 ${plan.highlight ? "text-[#1A56DB]" : "text-slate-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/5500000000000"
                  target="_blank" rel="noopener noreferrer"
                  className={`btn-primary block text-center font-body font-semibold py-4 rounded-xl transition-all ${
                    plan.highlight
                      ? "bg-[#FBBF24] hover:bg-[#D97706] text-[#1E293B] shadow-lg shadow-[#FBBF24]/30"
                      : "bg-[#1A56DB] hover:bg-[#1E429F] text-white shadow-md shadow-[#1A56DB]/20"
                  }`}
                >
                  Quero esse!
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className={`text-center font-body text-slate-400 text-sm mt-10 transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}>
          * Preços sujeitos à disponibilidade na sua região.
        </p>
      </div>
    </section>
  );
}
