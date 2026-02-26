# Informais Telecom — Site Oficial

Site institucional da **Informais Telecom**, vertente de telecomunicações da Informais Informática.

## Stack

- **Next.js 14** — App Router
- **TypeScript** — Tipagem estrita
- **Tailwind CSS** — Estilização utilitária
- **Google Fonts** — Barlow Condensed + DM Sans

## Identidade Visual

| Cor | Hex | Uso |
|-----|-----|-----|
| Vermelho | `#CC1B1B` | Acento principal, CTAs, destaques |
| Navy | `#2B2E8C` | Fundos secundários, elementos de suporte |
| Navy Dark | `#1E2070` | Cards, gradientes |
| Dark | `#0D0D1A` | Background principal |

## Como rodar localmente

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build
npm start
```

Acesse: [http://localhost:3000](http://localhost:3000)

## Estrutura

```
src/
├── app/
│   ├── globals.css        # Estilos globais, animações, fontes
│   ├── layout.tsx         # Layout raiz com metadata SEO
│   └── page.tsx           # Página principal
└── components/
    ├── Navbar.tsx          # Navegação fixa com scroll detection
    ├── Hero.tsx            # Seção principal com card de velocidade
    ├── About.tsx           # Sobre a empresa
    ├── Services.tsx        # Grid de serviços (6 cards)
    ├── Plans.tsx           # Planos de internet (3 planos)
    ├── Contact.tsx         # Formulário de contato + canais
    └── Footer.tsx          # Rodapé completo com links
```

## Seções

1. **Hero** — Headline impactante, card de velocidade animado, stats
2. **Sobre** — História da empresa, diferenciais, galeria visual
3. **Serviços** — Performance, Redes Sociais, Streaming, Home Office, Wi-Fi 6, Suporte 24/7
4. **Planos** — Inicial (200MB/R$85), Intermediário (400MB/R$100), Avançado (600MB/R$115)
5. **Contato** — Formulário + WhatsApp, E-mail, Localização
6. **Footer** — Links, redes sociais, legal

## Personalização

Para adaptar o site à sua realidade, edite:
- **Preços e velocidades** → `src/components/Plans.tsx`
- **Número WhatsApp** → Busque por `wa.me/5500000000000` e substitua
- **Endereço/cidade** → `src/components/Contact.tsx`
- **Cores** → `tailwind.config.ts` → `theme.extend.colors.brand`
