import logoV2Concept1 from "@/assets/devshift-logo-v2-concept1.png";
import logoV2Concept2 from "@/assets/devshift-logo-v2-concept2.png";
import logoV2Concept3 from "@/assets/devshift-logo-v2-concept3.png";
import { Zap, Globe, Smartphone, Monitor, Link2, Lightbulb } from "lucide-react";

const colors = [
  { hex: "#0d0d0d", name: "Obsidian", role: "Background" },
  { hex: "#171717", name: "Carbon", role: "Surfaces" },
  { hex: "#e63946", name: "Inferno Red", role: "Primary" },
  { hex: "#ff6b35", name: "Blaze Orange", role: "Accent" },
];

const services = [
  { icon: Zap, name: "Automações Prontas" },
  { icon: Globe, name: "Sites & Landing Pages" },
  { icon: Smartphone, name: "Aplicativos Mobile" },
  { icon: Monitor, name: "Sistemas Web" },
  { icon: Link2, name: "Integrações & APIs" },
  { icon: Lightbulb, name: "Consultoria Tech" },
];

const logos = [
  { src: logoV2Concept1, label: "Conceito 1 — Seta gradiente" },
  { src: logoV2Concept2, label: "Conceito 2 — Brackets bold" },
  { src: logoV2Concept3, label: "Conceito 3 — D com seta" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center py-24 px-6 text-center">
        <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
          Brand Identity — V2 🔥
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-foreground leading-tight">
          Dev<span className="text-primary">Shift</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl">
          Versão agressiva — Vermelho & Laranja. Energia, velocidade e impacto.
        </p>
      </section>

      {/* Color Palette */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-2">Paleta de Cores</h2>
        <p className="text-muted-foreground mb-8">Inferno — Agressividade, energia e presença marcante.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {colors.map((c) => (
            <div key={c.hex} className="rounded-xl overflow-hidden border border-border">
              <div className="h-28" style={{ backgroundColor: c.hex }} />
              <div className="p-4 bg-card">
                <p className="font-semibold text-foreground text-sm">{c.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{c.role}</p>
                <p className="text-xs text-primary font-mono mt-1">{c.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-2">Tipografia</h2>
        <p className="text-muted-foreground mb-8">Syne + Plus Jakarta Sans</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border bg-card p-8">
            <span className="text-xs uppercase tracking-widest text-primary mb-4 block">Heading</span>
            <p className="text-4xl font-extrabold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              Syne Bold
            </p>
            <p className="text-muted-foreground mt-2 text-sm">Títulos, CTAs e destaques visuais</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-8">
            <span className="text-xs uppercase tracking-widest text-primary mb-4 block">Body</span>
            <p className="text-2xl font-medium text-foreground" style={{ fontFamily: 'var(--font-body)' }}>
              Plus Jakarta Sans
            </p>
            <p className="text-muted-foreground mt-2 text-sm">Texto corrido, descrições e interface</p>
          </div>
        </div>
      </section>

      {/* Logo Concepts */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-2">Conceitos de Logo — V2</h2>
        <p className="text-muted-foreground mb-8">Ícone + texto — 3 direções em vermelho & laranja</p>
        <div className="grid md:grid-cols-3 gap-6">
          {logos.map((logo, i) => (
            <div key={i} className="rounded-xl border border-border bg-card overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="bg-foreground flex items-center justify-center p-8">
                <img src={logo.src} alt={logo.label} className="w-48 h-48 object-contain" loading="lazy" width={512} height={512} />
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-foreground">{logo.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dark version preview */}
        <div className="mt-8">
          <p className="text-muted-foreground text-sm mb-4">Aplicação sobre fundo escuro:</p>
          <div className="grid md:grid-cols-3 gap-6">
            {logos.map((logo, i) => (
              <div key={i} className="rounded-xl border border-border bg-muted flex items-center justify-center p-8">
                <img src={logo.src} alt={`${logo.label} dark`} className="w-40 h-40 object-contain" loading="lazy" width={512} height={512} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regras de Uso de Cores */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-2">Regras de Uso — Cores & Logo</h2>
        <p className="text-muted-foreground mb-8">Diretrizes para aplicação correta da marca em diferentes contextos.</p>

        {/* Uso correto */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs">✓</span>
            Uso Correto
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Fundo escuro */}
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="p-8 flex items-center justify-center" style={{ backgroundColor: '#0d0d0d' }}>
                <div className="flex items-center gap-3">
                  <img src={logoV2Concept1} alt="Logo fundo escuro" className="w-16 h-16 object-contain" />
                  <span className="text-2xl font-extrabold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                    Dev<span className="text-primary">Shift</span>
                  </span>
                </div>
              </div>
              <div className="p-4 bg-card">
                <p className="text-sm font-semibold text-foreground">Fundo Escuro (Preferencial)</p>
                <p className="text-xs text-muted-foreground mt-1">Logo colorido sobre fundos #0d0d0d ou #171717. Uso principal.</p>
              </div>
            </div>
            {/* Fundo branco */}
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="p-8 flex items-center justify-center bg-white">
                <div className="flex items-center gap-3">
                  <img src={logoV2Concept1} alt="Logo fundo claro" className="w-16 h-16 object-contain" />
                  <span className="text-2xl font-extrabold" style={{ fontFamily: 'var(--font-heading)', color: '#0d0d0d' }}>
                    Dev<span style={{ color: '#e63946' }}>Shift</span>
                  </span>
                </div>
              </div>
              <div className="p-4 bg-card">
                <p className="text-sm font-semibold text-foreground">Fundo Claro</p>
                <p className="text-xs text-muted-foreground mt-1">Logo colorido + texto escuro sobre fundos brancos ou claros.</p>
              </div>
            </div>
            {/* Monocromático escuro */}
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="p-8 flex items-center justify-center" style={{ backgroundColor: '#e63946' }}>
                <span className="text-2xl font-extrabold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                  DevShift
                </span>
              </div>
              <div className="p-4 bg-card">
                <p className="text-sm font-semibold text-foreground">Sobre Cor Primária</p>
                <p className="text-xs text-muted-foreground mt-1">Logo branco sobre fundo Inferno Red. Ideal para CTAs e banners.</p>
              </div>
            </div>
            {/* Gradiente */}
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="p-8 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #e63946, #ff6b35)' }}>
                <span className="text-2xl font-extrabold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                  DevShift
                </span>
              </div>
              <div className="p-4 bg-card">
                <p className="text-sm font-semibold text-foreground">Gradiente Inferno</p>
                <p className="text-xs text-muted-foreground mt-1">Logo branco sobre gradiente vermelho→laranja. Uso em peças de destaque.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Uso incorreto */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center text-destructive text-xs">✕</span>
            Uso Incorreto
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-destructive/30 overflow-hidden">
              <div className="p-8 flex items-center justify-center" style={{ backgroundColor: '#2a5c2a' }}>
                <span className="text-2xl font-extrabold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>DevShift</span>
              </div>
              <div className="p-4 bg-card">
                <p className="text-sm font-semibold text-destructive">Fundos coloridos conflitantes</p>
                <p className="text-xs text-muted-foreground mt-1">Nunca use sobre cores que competem com o vermelho/laranja.</p>
              </div>
            </div>
            <div className="rounded-xl border border-destructive/30 overflow-hidden">
              <div className="p-8 flex items-center justify-center bg-card">
                <span className="text-2xl font-extrabold text-muted-foreground/30" style={{ fontFamily: 'var(--font-heading)' }}>DevShift</span>
              </div>
              <div className="p-4 bg-card">
                <p className="text-sm font-semibold text-destructive">Baixo contraste</p>
                <p className="text-xs text-muted-foreground mt-1">Nunca aplique o logo com opacidade reduzida ou cores apagadas.</p>
              </div>
            </div>
            <div className="rounded-xl border border-destructive/30 overflow-hidden">
              <div className="p-8 flex items-center justify-center bg-card">
                <span className="text-2xl font-extrabold text-foreground italic" style={{ fontFamily: 'serif' }}>DevShift</span>
              </div>
              <div className="p-4 bg-card">
                <p className="text-sm font-semibold text-destructive">Tipografia alterada</p>
                <p className="text-xs text-muted-foreground mt-1">Nunca substitua a fonte Syne por outra tipografia.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Regras de cor */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6">Hierarquia de Cores</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: '#e63946' }} />
                <div>
                  <p className="text-sm font-semibold text-foreground">Inferno Red — Primária</p>
                  <p className="text-xs text-primary font-mono">#e63946</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Uso principal: logo, CTAs, botões primários, links ativos. Máximo 30% da composição.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: '#ff6b35' }} />
                <div>
                  <p className="text-sm font-semibold text-foreground">Blaze Orange — Acento</p>
                  <p className="text-xs text-accent font-mono">#ff6b35</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Uso secundário: ícones, badges, hovers, destaques. Sempre acompanhando o vermelho, nunca sozinho.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: '#0d0d0d' }} />
                <div>
                  <p className="text-sm font-semibold text-foreground">Obsidian — Fundo</p>
                  <p className="text-xs text-muted-foreground font-mono">#0d0d0d</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Base principal de fundo. Domina 60-70% do layout. Transmite sofisticação.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: '#171717' }} />
                <div>
                  <p className="text-sm font-semibold text-foreground">Carbon — Superfícies</p>
                  <p className="text-xs text-muted-foreground font-mono">#171717</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Cards, modais e superfícies elevadas. Cria hierarquia visual sobre o fundo Obsidian.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Icons */}
      <section className="max-w-5xl mx-auto px-6 py-16 pb-24">
        <h2 className="text-3xl font-bold text-foreground mb-2">Serviços</h2>
        <p className="text-muted-foreground mb-8">Ícones sugeridos para cada serviço</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.name} className="rounded-xl border border-border bg-card p-6 flex items-center gap-4 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground">{s.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
