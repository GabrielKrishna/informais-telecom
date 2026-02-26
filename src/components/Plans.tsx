"use client";

import { useEffect, useRef, useState } from "react";

const plans = [
  {
    id: "inicial",
    name: "Plano Inicial",
    speed: "200",
    price: "85",
    description: "Perfeito para quem quer economizar e desfrutar de uma conexão de qualidade.",
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
    description: "O mais escolhido pelos nossos clientes. Velocidade e custo-benefício ideais.",
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
    description: "Para quem exige o máximo. Máxima velocidade e recursos exclusivos.",
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
    <section id="planos" ref={ref} className="relative py-28 overflow-hidden bg-[#0D0D1A]">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(43,46,140,0.2) 0%, transparent 70%)" }}/>

      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 0 L1440 40 L1440 0 Z" fill="#080812"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="font-mono text-[#CC1B1B] text-xs uppercase tracking-widest">// Planos</span>
          <h2 className="font-display font-black text-5xl md:text-6xl uppercase leading-[0.9] mt-3 mb-6 text-white">
            Escolha o Plano Ideal <br/>
            <span className="text-[#CC1B1B]">para Sua</span>{" "}
            <span className="text-[#3B3EA0]">Conexão</span>
          </h2>
          <p className="font-body text-gray-400 text-lg leading-relaxed">
            Oferecemos planos personalizados para atender às suas necessidades, com opções flexíveis que se ajustam ao seu orçamento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`plan-card relative rounded-2xl border overflow-hidden transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              } ${
                plan.highlight
                  ? "border-[#CC1B1B] bg-gradient-to-b from-[#CC1B1B]/15 to-[#12122A] shadow-2xl shadow-[#CC1B1B]/20 scale-105"
                  : "border-[#1F2060] bg-[#12122A]"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 text-center py-2 bg-[#CC1B1B] font-display font-bold text-xs uppercase tracking-widest text-white">
                  ⚡ Mais popular
                </div>
              )}

              <div className={`p-8 ${plan.highlight ? "pt-12" : ""}`}>
                <div className="mb-6">
                  <h3 className="font-display font-bold text-xl uppercase text-white mb-2">{plan.name}</h3>
                  <p className="font-body text-gray-500 text-sm">{plan.description}</p>
                </div>

                <div className="mb-2">
                  <span className="font-display font-black text-7xl leading-none text-white">{plan.speed}</span>
                  <span className={`font-display font-bold text-2xl ml-2 ${plan.highlight ? "text-[#CC1B1B]" : "text-[#3B3EA0]"}`}>
                    Mega
                  </span>
                </div>

                <div className="mb-8 pb-8 border-b border-white/10">
                  <span className="font-body text-gray-500 text-sm">por </span>
                  <span className="font-display font-black text-2xl text-white">R$ {plan.price},00</span>
                  <span className="font-body text-gray-500 text-sm">/mês</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 font-body text-sm text-gray-300">
                      <svg
                        className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? "text-[#CC1B1B]" : "text-[#3B3EA0]"}`}
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
                      ? "bg-[#CC1B1B] text-white hover:bg-red-600 shadow-lg shadow-[#CC1B1B]/30"
                      : "bg-[#2B2E8C]/40 hover:bg-[#2B2E8C] text-white border border-[#2B2E8C]/60"
                  }`}
                >
                  Quero esse!
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className={`text-center font-body text-gray-600 text-sm mt-10 transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}>
          * Preços sujeitos à disponibilidade na sua região. Consulte nossa equipe de vendas.
        </p>
      </div>
    </section>
  );
}
