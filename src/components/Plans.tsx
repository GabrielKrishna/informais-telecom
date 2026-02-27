"use client";

import { useEffect, useRef, useState } from "react";

const plans = [
  {
    id: "inicial",
    name: "Plano Inicial",
    speed: "200",
    price: "85",
    description: "Perfeito para residências e pequenos negócios que querem qualidade com economia.",
    features: [
      "Conexão via fibra óptica",
      "Instalação e Wi-Fi 6 grátis",
      "Suporte a IPv6",
      "Suporte sempre online",
    ],
    highlight: false,
  },
  {
    id: "intermediario",
    name: "Plano Intermediário",
    speed: "400",
    price: "100",
    description: "O mais escolhido. Ideal para empresas e famílias que exigem velocidade e estabilidade.",
    features: [
      "Conexão via fibra óptica",
      "Instalação e Wi-Fi 6 grátis",
      "Suporte a IPv6",
      "Suporte sempre online",
      "Prioridade no suporte técnico",
    ],
    highlight: true,
  },
  {
    id: "avancado",
    name: "Plano Avançado",
    speed: "600",
    price: "115",
    description: "Para quem não abre mão do máximo. Link dedicado com recursos exclusivos.",
    features: [
      "Conexão via fibra óptica",
      "Instalação e Wi-Fi 6 grátis",
      "Suporte a IPv6",
      "Suporte sempre online",
      "Prioridade no suporte técnico",
      "IP Fixo incluso",
    ],
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
    <section id="planos" ref={ref} className="relative py-28 overflow-hidden bg-[#F8FAFC]">
      {/* Top blue wave */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[#1A56DB]"/>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block bg-[#EBF5FF] text-[#1A56DB] font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            // Planos
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl uppercase leading-[0.9] text-[#1E293B] mb-6">
            Escolha o plano{" "}
            <span className="text-[#1A56DB]">ideal</span>{" "}
            para você
          </h2>
          <p className="font-body text-slate-500 text-lg leading-relaxed">
            Planos flexíveis que se ajustam ao seu bolso e às suas necessidades. Todos com fibra óptica e Wi-Fi 6.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`plan-card relative rounded-2xl border overflow-hidden transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              } ${
                plan.highlight
                  ? "border-[#1A56DB] bg-[#1A56DB] shadow-2xl shadow-[#1A56DB]/30 scale-105"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Yellow top bar for highlighted */}
              {plan.highlight && (
                <div className="h-1.5 bg-[#FBBF24]"/>
              )}

              {plan.highlight && (
                <div className="text-center py-2.5 px-4 bg-[#FBBF24]">
                  <span className="font-display font-bold text-xs uppercase tracking-widest text-[#1E293B]">
                    ⚡ Mais popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="mb-6">
                  <h3 className={`font-display font-bold text-xl uppercase mb-2 ${plan.highlight ? "text-white" : "text-[#1E293B]"}`}>
                    {plan.name}
                  </h3>
                  <p className={`font-body text-sm ${plan.highlight ? "text-blue-200" : "text-slate-400"}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-2">
                  <span className={`font-display font-black text-7xl leading-none ${plan.highlight ? "text-white" : "text-[#1E293B]"}`}>
                    {plan.speed}
                  </span>
                  <span className={`font-display font-bold text-2xl ml-2 ${plan.highlight ? "text-[#FBBF24]" : "text-[#1A56DB]"}`}>
                    Mega
                  </span>
                </div>

                <div className={`mb-8 pb-8 border-b ${plan.highlight ? "border-white/20" : "border-slate-100"}`}>
                  <span className={`font-body text-sm ${plan.highlight ? "text-blue-200" : "text-slate-400"}`}>por </span>
                  <span className={`font-display font-black text-2xl ${plan.highlight ? "text-white" : "text-[#1E293B]"}`}>
                    R$ {plan.price},00
                  </span>
                  <span className={`font-body text-sm ${plan.highlight ? "text-blue-200" : "text-slate-400"}`}>/mês</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex items-center gap-3 font-body text-sm ${plan.highlight ? "text-blue-100" : "text-slate-600"}`}>
                      <svg
                        className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? "text-[#FBBF24]" : "text-[#1A56DB]"}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-primary block text-center font-body font-semibold py-4 rounded-xl transition-all ${
                    plan.highlight
                      ? "bg-[#FBBF24] text-[#1E293B] hover:bg-[#D97706] shadow-lg"
                      : "bg-[#1A56DB] text-white hover:bg-[#1E429F] shadow-sm hover:shadow-[#1A56DB]/20 hover:shadow-lg"
                  }`}
                >
                  Quero esse!
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className={`text-center font-body text-slate-400 text-sm mt-10 transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}>
          * Preços sujeitos à disponibilidade na sua região. Consulte nossa equipe de vendas.
        </p>
      </div>
    </section>
  );
}
