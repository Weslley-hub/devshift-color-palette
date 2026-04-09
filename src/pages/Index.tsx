import logoConcept1 from "@/assets/devshift-logo-concept1.png";
import logoConcept2 from "@/assets/devshift-logo-concept2.png";
import logoConcept3 from "@/assets/devshift-logo-concept3.png";
import { Zap, Globe, Smartphone, Monitor, Link2, Lightbulb } from "lucide-react";

const colors = [
  { hex: "#0a0a1a", name: "Deep Space", role: "Background" },
  { hex: "#141432", name: "Midnight", role: "Surfaces" },
  { hex: "#0ea5e9", name: "Cyan Core", role: "Primary" },
  { hex: "#38bdf8", name: "Sky Glow", role: "Accent" },
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
  { src: logoConcept1, label: "Conceito 1 — Seta geométrica" },
  { src: logoConcept2, label: "Conceito 2 — Brackets + seta" },
  { src: logoConcept3, label: "Conceito 3 — D com seta" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center py-24 px-6 text-center">
        <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
          Brand Identity
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-foreground leading-tight">
          Dev<span className="text-primary">Shift</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl">
          Software house focada em transformação digital. Automação, desenvolvimento e consultoria tech.
        </p>
      </section>

      {/* Color Palette */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-2">Paleta de Cores</h2>
        <p className="text-muted-foreground mb-8">Midnight Tech — Confiança, inovação e profundidade.</p>
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
        <h2 className="text-3xl font-bold text-foreground mb-2">Conceitos de Logo</h2>
        <p className="text-muted-foreground mb-8">Ícone + texto — 3 direções criativas</p>
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
