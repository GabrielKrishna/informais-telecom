import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0F172A] overflow-hidden">
      {/* Top gradient bar — matches site accent rhythm */}
      <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #1A56DB 0%, #FBBF24 50%, #1A56DB 100%)" }} />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-white/5">

          {/* Brand — text only, mirrors Navbar */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1.5 mb-1 leading-none">
              <span className="font-display font-black text-2xl uppercase tracking-tight text-white">
                Infor<span className="text-[#FBBF24]">mais</span>
              </span>
              <span className="font-body text-[10px] uppercase tracking-[0.18em] text-white/30 border-l border-white/15 pl-1.5">
                Fibra
              </span>
            </div>
            <p className="font-body text-slate-400 text-xs leading-relaxed mt-3 max-w-[200px]">
              Internet de alta performance para residências e empresas.
            </p>
            <div className="flex items-center gap-2 mt-5">
              {[
                { name: "Facebook",  d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { name: "Instagram", d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" },
                { name: "LinkedIn",  d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#1A56DB] border border-white/10 hover:border-[#1A56DB] flex items-center justify-center text-slate-400 hover:text-white transition-all"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d={social.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {[
            { title: "Saiba mais", links: ["Serviços", "Sobre nós", "Planos", "Cobertura"] },
            { title: "Nos siga",   links: ["Instagram", "Facebook", "LinkedIn", "YouTube"] },
            { title: "Legal",      links: ["Política e privacidade", "Termos e condições", "LGPD"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((item) => (
                  <li key={item}>
                    <Link href="#" className="font-body text-xs text-slate-400 hover:text-[#FBBF24] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-slate-500">© {currentYear} Informais Telecom — Todos os Direitos Reservados.</p>
        </div>
      </div>
    </footer>
  );
}
