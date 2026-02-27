"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    icon: "⚡",
    title: "Link Dedicado",
    description: "Sua operação não passa por problemas. Banda exclusiva para a sua empresa, sem compartilhamento e sem instabilidade.",
    accent: "#1A56DB",
  },
  {
    icon: "🏪",
    title: "PDV & Caixas",
    description: "Fluxo de caixa de supermercado, farmácia ou loja funcionando sem interrupção. Transações rápidas e seguras o tempo todo.",
    accent: "#FBBF24",
  },
  {
    icon: "📺",
    title: "Streaming",
    description: "Assista, jogue e transmita sem bufferizar. Nossa internet entrega a velocidade que plataformas de streaming exigem.",
    accent: "#1A56DB",
  },
  {
    icon: "💻",
    title: "Home Office",
    description: "Videochamadas estáveis, uploads rápidos e latência mínima. Produtividade garantida para quem trabalha de casa.",
    accent: "#FBBF24",
  },
  {
    icon: "📶",
    title: "Wi-Fi 6",
    description: "Roteadores Wi-Fi 6 instalados gratuitamente. Cobertura total com a tecnologia sem fio mais avançada do mercado.",
    accent: "#1A56DB",
  },
  {
    icon: "🛠️",
    title: "Suporte 24/7",
    description: "Equipe técnica sempre disponível. Atendimento via WhatsApp, telefone ou presencial para resolver qualquer problema.",
    accent: "#FBBF24",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".srv-card").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicos" ref={ref} className="relative py-28 overflow-hidden bg-white">

      {/* Image Banner with overlay — supermercado */}
      <div className="relative h-64 mb-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=1600&q=80"
          alt="Fluxo de caixa de supermercado funcionando com internet de qualidade"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1A56DB]/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="font-mono text-[#FBBF24] text-xs uppercase tracking-widest mb-3">// Link Dedicado</span>
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-white leading-tight max-w-3xl">
            Com o nosso link dedicado,{" "}
            <span className="text-[#FBBF24]">sua operação não para.</span>
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className="srv-card text-center max-w-2xl mx-auto mb-16"
          style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease" }}
        >
          <span className="inline-block bg-[#EBF5FF] text-[#1A56DB] font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            // Nossos serviços
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl uppercase leading-[0.9] text-[#1E293B] mb-6">
            Nossos clientes são{" "}
            <span className="text-[#1A56DB]">nossa</span>{" "}
            <span className="relative">
              prioridade
              <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#FBBF24] rounded-full block"/>
            </span>
          </h2>
          <p className="font-body text-slate-500 text-lg leading-relaxed">
            Soluções completas de internet para residências, empresas e comércios que precisam de conexão confiável.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="srv-card group bg-white hover:bg-[#EBF5FF] border border-slate-200 hover:border-[#1A56DB]/30 rounded-2xl p-8 cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#1A56DB]/10 shadow-sm"
              style={{ opacity: 0, transform: "translateY(30px)", transition: `all 0.7s ease ${index * 0.1}s` }}
            >
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 text-2xl"
                style={{ backgroundColor: `${service.accent}15` }}
              >
                {service.icon}
              </div>
              <h3 className="font-display font-bold text-2xl text-[#1E293B] mb-3 uppercase group-hover:text-[#1A56DB] transition-colors">{service.title}</h3>
              <p className="font-body text-slate-500 text-sm leading-relaxed">{service.description}</p>
              <div
                className="mt-6 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ backgroundColor: service.accent }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
