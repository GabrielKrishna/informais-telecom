"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [formState, setFormState] = useState({ email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ email: "", subject: "", message: "" });
  };

  return (
    <section id="contato" ref={ref} className="relative py-28 overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#FBBF24]"/>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Info */}
          <div className={`space-y-10 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div>
              <span className="inline-block bg-[#EBF5FF] text-[#1A56DB] font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                // Entre em contato
              </span>
              <h2 className="font-display font-black text-5xl md:text-6xl uppercase leading-[0.9] text-[#1E293B]">
                Fale com a{" "}
                <span className="text-[#1A56DB]">gente!</span>
              </h2>
              <p className="font-body text-slate-500 text-lg leading-relaxed mt-6">
                Dúvida técnica? Quer assinar um plano? Precisa de suporte? Nosso time responde rápido — fale agora pelo WhatsApp ou deixe sua mensagem.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  ),
                  label: "WhatsApp", value: "(00) 00000-0000",
                  href: "https://wa.me/5500000000000",
                  color: "text-[#25D366]", bg: "bg-[#25D366]/10 border-[#25D366]/30",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  ),
                  label: "E-mail", value: "contato@informaistelecom.com.br",
                  href: "mailto:contato@informaistelecom.com.br",
                  color: "text-[#1A56DB]", bg: "bg-[#EBF5FF] border-[#1A56DB]/20",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  ),
                  label: "Localização", value: "Sua cidade, Estado",
                  href: "#",
                  color: "text-[#D97706]", bg: "bg-[#FBBF24]/10 border-[#FBBF24]/30",
                },
              ].map((item) => (
                <a key={item.label} href={item.href} className={`flex items-center gap-4 p-4 rounded-xl border ${item.bg} hover:opacity-80 transition-opacity shadow-sm`}>
                  <div className={`${item.color} flex-shrink-0`}>{item.icon}</div>
                  <div>
                    <div className="font-body text-xs text-slate-400 uppercase tracking-wider">{item.label}</div>
                    <div className="font-body text-slate-700 font-medium text-sm mt-0.5">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h3 className="font-display font-bold text-2xl text-[#1E293B] uppercase mb-8">Envie sua mensagem</h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 border border-green-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h4 className="font-display font-bold text-xl text-[#1E293B] mb-2">Mensagem enviada!</h4>
                  <p className="font-body text-slate-500 text-sm">Entraremos em contato em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-body text-xs text-slate-400 uppercase tracking-wider mb-2">Seu e-mail</label>
                    <input
                      type="email" required placeholder="exemplo@gmail.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-white border border-slate-200 focus:border-[#1A56DB] rounded-xl px-4 py-3 font-body text-sm text-slate-700 placeholder-slate-300 outline-none transition-colors shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs text-slate-400 uppercase tracking-wider mb-2">Assunto</label>
                    <input
                      type="text" required placeholder="Como podemos ajudar você?"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full bg-white border border-slate-200 focus:border-[#1A56DB] rounded-xl px-4 py-3 font-body text-sm text-slate-700 placeholder-slate-300 outline-none transition-colors shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs text-slate-400 uppercase tracking-wider mb-2">Sua mensagem</label>
                    <textarea
                      required placeholder="Deixe sua mensagem..." rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-white border border-slate-200 focus:border-[#1A56DB] rounded-xl px-4 py-3 font-body text-sm text-slate-700 placeholder-slate-300 outline-none transition-colors resize-none shadow-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full bg-[#1A56DB] hover:bg-[#1E429F] text-white font-body font-semibold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-[#1A56DB]/30"
                  >
                    Enviar mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
