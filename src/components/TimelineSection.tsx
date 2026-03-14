import { motion } from "framer-motion";
import { Palette, Building, Users, Search, Shield, Eye, Target, Zap, BarChart3, MousePointerClick } from "lucide-react";

const timelineItems = [
  {
    step: "01",
    icon: Eye,
    title: "Cada acesso é seu",
    desc: "Você sabe exatamente quem visita, de onde vem e o que procura na sua vitrine.",
    side: "left" as const,
  },
  {
    step: "02",
    icon: Palette,
    title: "CMS personalizável",
    desc: "Textos, imagens e conteúdos sob seu controle. A vitrine se adapta à sua identidade.",
    side: "right" as const,
  },
  {
    step: "03",
    icon: Building,
    title: "Cadastro simples de imóveis",
    desc: "Cadastre imóveis de forma fácil e intuitiva através de um painel pensado para o uso diário.",
    side: "left" as const,
  },
  {
    step: "04",
    icon: Users,
    title: "Gestão completa de leads",
    desc: "Visualize de onde cada lead veio — formulário, CTA ou contato direto. Exporte em .CSV.",
    side: "right" as const,
  },
  {
    step: "05",
    icon: Search,
    title: "Busca inteligente",
    desc: "Quando a busca não encontra termos exatos, retorna imóveis em destaque automaticamente.",
    side: "left" as const,
  },
  {
    step: "06",
    icon: Target,
    title: "Controle total",
    desc: "Cada oportunidade permanece sob seu controle — do primeiro clique ao contato final.",
    side: "right" as const,
  },
  {
    step: "07",
    icon: Zap,
    title: "Performance máxima",
    desc: "Carregamento instantâneo para não perder o interesse do lead. Velocidade é conversão.",
    side: "left" as const,
  },
  {
    step: "08",
    icon: Shield,
    title: "Independência estratégica",
    desc: "Sem depender de portais de terceiros. Sua presença digital, suas regras.",
    side: "right" as const,
  },
  {
    step: "09",
    icon: BarChart3,
    title: "Histórico completo",
    desc: "Cada interação registrada. Acompanhe a evolução da sua vitrine em tempo real.",
    side: "left" as const,
  },
  {
    step: "10",
    icon: MousePointerClick,
    title: "Seja o destino",
    desc: "Você deixa de disputar atenção nos portais. Passa a ser o destino final do cliente.",
    side: "right" as const,
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 border border-primary/30 px-5 py-2 mb-8">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-neon" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary/80">
              jornada completa
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            A plataforma que converte
            <br />
            <span className="text-gradient-neon">presença digital em clientes.</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body font-light max-w-2xl mx-auto">
            Do primeiro clique ao fechamento do negócio, tudo foi projetado para atrair, organizar e converter leads em clientes.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="w-full h-full neon-line origin-top"
            />
          </div>

          {/* Center line - mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="w-full h-full neon-line origin-top"
            />
          </div>

          {/* Items */}
          <div className="space-y-8 md:space-y-12">
            {timelineItems.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{
                  opacity: 0,
                  x: item.side === "left" ? -40 : 40,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative"
              >
                {/* Desktop layout */}
                <div className={`hidden md:grid grid-cols-[1fr_auto_1fr] gap-8 items-center ${
                  item.side === "right" ? "" : ""
                }`}>
                  {/* Left content */}
                  <div className={item.side === "left" ? "" : ""}>
                    {item.side === "left" ? (
                      <TimelineCard item={item} align="right" />
                    ) : (
                      <div />
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-primary bg-background rotate-45 z-10" style={{ boxShadow: "var(--neon-glow)" }} />
                  </div>

                  {/* Right content */}
                  <div>
                    {item.side === "right" ? (
                      <TimelineCard item={item} align="left" />
                    ) : (
                      <div />
                    )}
                  </div>
                </div>

                {/* Mobile layout */}
                <div className="md:hidden flex gap-6 items-start pl-2">
                  {/* Dot */}
                  <div className="relative flex items-center justify-center shrink-0 mt-6">
                    <div className="w-3 h-3 border-2 border-primary bg-background rotate-45 z-10" style={{ boxShadow: "var(--neon-glow)" }} />
                  </div>
                  <TimelineCard item={item} align="left" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({
  item,
  align,
}: {
  item: (typeof timelineItems)[0];
  align: "left" | "right";
}) => {
  const Icon = item.icon;
  return (
    <div
      className={`group border border-primary/20 rounded-lg bg-card/80 p-6 md:p-7 relative transition-all duration-500 hover:border-primary hover:shadow-[0_0_30px_rgba(255,191,0,0.15)] hover:bg-primary/[0.05] ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/0 group-hover:border-primary transition-colors duration-500" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/0 group-hover:border-primary transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/0 group-hover:border-primary transition-colors duration-500" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/0 group-hover:border-primary transition-colors duration-500" />

      <div className={`flex items-center gap-3 mb-4 ${align === "right" ? "justify-end" : "justify-start"}`}>
        <span className="font-mono text-xs text-primary/50">{item.step}</span>
        <div className="w-8 h-8 border border-primary/30 flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
        </div>
      </div>
      <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
      <p className="text-muted-foreground font-body text-sm font-light leading-relaxed">{item.desc}</p>
    </div>
  );
};

export default TimelineSection;
