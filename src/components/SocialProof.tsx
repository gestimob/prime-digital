import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Silva",
    role: "Corretor de Luxo - SP",
    text: "A vitrine digital da Prime mudou o jogo. Antes eu dependia de portais lotados de curiosos, agora recebo leads qualificados direto no meu WhatsApp.",
  },
  {
    name: "Mariana Costa",
    role: "Especialista em Lançamentos - RJ",
    text: "O controle que tenho sobre os meus leads hoje é total. O CMS é muito intuitivo e o carregamento das páginas é impressionante.",
  },
  {
    name: "André Santos",
    role: "Corretor Independente - BH",
    text: "Finalmente uma solução que pensa no corretor e não só na imobiliária. Minha marca pessoal nunca foi tão forte no digital.",
  },
  {
    name: "Fabiana Oliveira",
    role: "Gestora Comercial - Curitiba",
    text: "Os pixels de rastreamento integrados facilitaram muito nossas campanhas. Batemos recorde de vendas no último mês.",
  },
  {
    name: "Juliana Mendes",
    role: "Corretora High-End - Balneário Camboriú",
    text: "O design premium passa a autoridade que meus clientes exigem. É o investimento que se pagou no primeiro contrato fechado.",
  },
  {
    name: "Marcos Vinícius",
    role: "Consultor Imobiliário - Brasília",
    text: "A independência de não estar preso a portais que vendem meus leads para outros corretores não tem preço. Excelente plataforma.",
  },
  {
    name: "Patrícia Lima",
    role: "Especialista em Imóveis de Praia - João Pessoa",
    text: "Minha vitrine é meu cartão de visitas. Os clientes comentam sobre a facilidade de navegar e a beleza do site. Recomendo!",
  },
];

const SocialProof = () => {
  // Triple the items to ensure smooth infinite scroll
  const scrollItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-20 md:py-32 bg-secondary/2 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-5" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 border border-primary/30 px-5 py-2 mb-8">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-neon" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary/80">
              resultados reais
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Corretores que já <span className="text-gradient-neon">dominam o digital.</span>
          </h2>
        </motion.div>
      </div>

      {/* Infinite Carousel Container */}
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 pr-6 whitespace-nowrap"
        >
          {scrollItems.map((item, i) => (
            <div
              key={i}
              className="w-[350px] md:w-[450px] shrink-0 p-8 border border-primary/20 rounded-2xl bg-background/40 backdrop-blur-md relative group hover:border-primary/50 transition-all duration-500 whitespace-normal"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-background border border-primary/20 flex items-center justify-center rounded-lg shadow-lg">
                <Quote className="w-5 h-5 text-primary" />
              </div>
              
              <div className="mb-6">
                <p className="text-muted-foreground font-body italic text-base md:text-lg leading-relaxed">
                  "{item.text}"
                </p>
              </div>

              <div className="flex flex-col">
                <span className="font-display font-bold text-primary text-lg">
                  {item.name}
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground/60">
                  {item.role}
                </span>
              </div>

              {/* Glowing decorative dot */}
              <div className="absolute top-4 right-4 w-1 h-1 bg-primary rounded-full blur-[2px] opacity-30 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Fade Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default SocialProof;
