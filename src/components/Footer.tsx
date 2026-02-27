import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#1E293B] overflow-hidden">
      <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #1A56DB 0%, #FBBF24 50%, #1A56DB 100%)" }}/>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 py-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="Informais Telecom"
                width={180}
                height={68}
                className="object-contain"
              />
              <div className="font-body text-[10px] text-slate-400 tracking-widest uppercase mt-1">Telecom</div>
            </div>
            <p className="font-body text-slate-400 text-sm leading-relaxed max-w-sm">
              Conectando pessoas e empresas com internet de alta performance. Fibra óptica, tecnologia e suporte de qualidade.
            </p>
            <div className="flex items-center gap-4 mt-8">
              {[
                { name: "Facebook", d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { name: "Instagram", d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" },
                { name: "LinkedIn", d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#1A56DB] border border-white/10 hover:border-[#1A56DB] flex items-center justify-center text-slate-400 hover:text-white transition-all"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d={social.d}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-white mb-6">Saiba mais</h4>
            <ul className="space-y-3">
              {["Serviços", "Sobre nós", "Planos", "Cobertura"].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-body text-sm text-slate-400 hover:text-[#FBBF24] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-white mb-6">Nos siga</h4>
            <ul className="space-y-3">
              {["Instagram", "Facebook", "LinkedIn", "YouTube"].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-body text-sm text-slate-400 hover:text-[#FBBF24] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              {["Política e privacidade", "Termos e condições", "LGPD"].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-body text-sm text-slate-400 hover:text-[#FBBF24] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-slate-500">© {currentYear} Informais Telecom — Todos os Direitos Reservados.</p>
          <p className="font-body text-xs text-slate-600">
            Desenvolvido com ❤️ pela <span className="text-slate-400">Informais Informática</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
