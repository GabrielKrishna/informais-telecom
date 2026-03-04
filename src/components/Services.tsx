"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    title: "Link Dedicado",
    description: "Banda exclusiva para a sua empresa. Sem compartilhamento, sem instabilidade — sua operação nunca para.",
    icon: "/3dicons-link-dynamic-gradient.png",
  },
  {
    title: "PDV & Caixas",
    description: "Fluxo de caixa de supermercado, farmácia ou loja funcionando sem interrupção. Cada transação no tempo certo.",
    icon: "/3dicons-bag-dynamic-color.png",
  },
  {
    title: "Streaming",
    description: "Assista, jogue e transmita sem bufferizar. Velocidade e latência otimizadas para todas as plataformas.",
    icon: "/3dicons-play-dynamic-color.png",
  },
  {
    title: "Home Office",
    description: "Videochamadas estáveis, uploads rápidos, latência mínima. Produtividade garantida para quem trabalha de casa.",
    icon: "/3dicons-computer-dynamic-color.png",
  },
  {
    title: "Wi-Fi 6",
    description: "Roteadores Wi-Fi 6 instalados gratuitamente. Cobertura total com a tecnologia sem fio mais moderna.",
    icon: "/3dicons-wifi-dynamic-color.png",
  },
  {
    title: "Suporte 24/7",
    description: "Time técnico sempre disponível. WhatsApp, telefone ou presencial — resolvemos rápido, qualquer hora.",
    icon: "/3dicons-flash-dynamic-premium.png",
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
              }, i * 80);
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
    <section id="servicos" ref={ref} className="relative overflow-hidden">

      {/* Banner with supermarket image */}
      <div className="relative h-75 overflow-hidden">
        <Image
          src="/cashier.png"
          alt="Supermercado com operação estável graças ao link dedicado"
          fill
          className="object-cover object-[50%_80%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1A56DB]/50" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FBBF24]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="font-mono text-[#FBBF24] text-xs uppercase tracking-widest mb-3">// Link Dedicado</span>
          <h2 className="font-display font-black text-3xl md:text-5xl uppercase text-white leading-tight max-w-3xl">
            Com o nosso link dedicado,{" "}
            <span className="text-[#FBBF24]">sua operação não para.</span>
          </h2>
        </div>
      </div>

      {/* Cards on blue with grid pattern */}
      <div className="relative bg-[#1A56DB] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div
            className="srv-card text-center max-w-xl mx-auto mb-14"
            style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease" }}
          >
            <span className="inline-block bg-white/15 text-white font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-white/20">
              // Nossos serviços
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase leading-[0.95] text-white">
              Nossos clientes são{" "}
              <span className="text-[#FBBF24]">nossa</span>{" "}
              <span className="relative inline-block">
                prioridade
                <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#FBBF24] rounded-full block" />
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="srv-card group bg-white rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ opacity: 0, transform: "translateY(30px)", transition: `all 0.6s ease ${index * 0.08}s` }}
              >
                {/* 3D icon */}
                <div className="w-14 h-14 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-3deg]">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="font-display font-bold text-lg text-[#1E293B] uppercase mb-2 group-hover:text-[#1A56DB] transition-colors">
                  {service.title}
                </h3>
                <p className="font-body text-slate-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
