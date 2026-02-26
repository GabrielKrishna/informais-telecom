"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: "Performance",
    description: "Temos resiliência em conectividade para manter sempre o serviço disponível e com a qualidade que você merece. Nossa rede é monitorada 24 horas por dia, 7 dias por semana.",
    accent: "#CC1B1B",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
      </svg>
    ),
    title: "Redes Sociais",
    description: "Sabemos como o mundo usa a internet e oferecemos soluções personalizadas para atender a demanda de conexão sem interrupções em todas as plataformas.",
    accent: "#2B2E8C",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "Streaming",
    description: "Sua experiência online com sites de streaming com qualidade e velocidade. Assista, jogue e transmita sem bufferizar com nossa internet dedicada.",
    accent: "#CC1B1B",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    title: "Home Office",
    description: "Videochamadas estáveis, uploads rápidos e latência mínima para quem trabalha de casa. Suporte técnico dedicado para garantir sua produtividade.",
    accent: "#2B2E8C",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
      </svg>
    ),
    title: "Wi-Fi 6",
    description: "Tecnologia de ponta com roteadores Wi-Fi 6 instalados gratuitamente. Cobertura total da sua casa com a mais moderna tecnologia sem fio.",
    accent: "#CC1B1B",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
      </svg>
    ),
    title: "Suporte 24/7",
    description: "Nossa equipe técnica está sempre disponível para resolver qualquer problema rapidamente. Atendimento via WhatsApp, telefone e presencial.",
    accent: "#2B2E8C",
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
    <section id="servicos" ref={ref} className="relative py-28 overflow-hidden bg-[#080812]">
      <div className="absolute inset-0 bg-grid opacity-40"/>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2B2E8C]/8 rounded-full blur-[150px]"/>
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, transparent, #CC1B1B 30%, #2B2E8C 70%, transparent)" }}/>

      <div className="relative max-w-7xl mx-auto px-6">
        <div
          className="srv-card text-center max-w-2xl mx-auto mb-20"
          style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease" }}
        >
          <span className="font-mono text-[#CC1B1B] text-xs uppercase tracking-widest">// Nossos serviços</span>
          <h2 className="font-display font-black text-5xl md:text-6xl uppercase leading-[0.9] mt-3 mb-6 text-white">
            Nossos clientes são{" "}
            <span className="text-[#CC1B1B]">a nossa</span>{" "}
            <span className="text-[#3B3EA0]">prioridade</span>
          </h2>
          <p className="font-body text-gray-400 text-lg leading-relaxed">
            Na Informais Telecom, somos especialistas em entregar o melhor da internet. Conheça nossos serviços e veja como podemos melhorar a sua experiência online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="srv-card group bg-white/3 hover:bg-white/6 border border-white/8 hover:border-[#2B2E8C]/40 rounded-2xl p-8 cursor-default transition-colors duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30"
              style={{ opacity: 0, transform: "translateY(30px)", transition: `all 0.7s ease ${index * 0.1}s` }}
            >
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-colors"
                style={{
                  backgroundColor: `${service.accent}20`,
                  color: service.accent,
                }}
              >
                {service.icon}
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-3 uppercase">{service.title}</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">{service.description}</p>
              <div
                className="mt-6 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: service.accent }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
