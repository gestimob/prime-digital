import { motion } from "framer-motion";
import { Globe, User, Target, Home, BarChart3, Globe2 } from "lucide-react";

const OfferSection = () => {
  const offers = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Site Público Integrado",
      desc: "Site profissional conectado ao sistema com captação de leads."
    },
    {
      icon: <User className="w-8 h-8 text-primary" />,
      title: "CRM de Clientes",
      desc: "Centralize todos os clientes em um lugar."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Gestão de Leads",
      desc: "Capture e gerencie oportunidades de negócios."
    },
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      title: "Gestão de Imóveis",
      desc: "Controle completo dos imóveis com cadastro profissional."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Pixels para Ads",
      desc: "Prepare suas campanhas com rastreamento de conversões."
    },
    {
      icon: <Globe2 className="w-8 h-8 text-primary" />,
      title: "Domínio Gratuito",
      desc: "Seu domínio profissional incluso por 1 ano."
    }
  ];

  return (
    <section id="oferta" className="pt-20 md:pt-32 pb-10 md:pb-16 bg-secondary/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 border border-primary/30 px-5 py-2 mb-8">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-neon" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary/80">
              OFERTA NEGOCIÁVEL
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            A Plataforma Completa para corretores
          </h2>
          <p className="text-muted-foreground text-lg font-body font-light max-w-2xl mx-auto">
            Tudo que o corretor precisa para atrair clientes, organizar operações e vender mais.
          </p>
        </motion.div>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-0">
          {offers.map((offer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-primary/20 rounded-lg bg-background/50 backdrop-blur-sm text-center group hover:border-primary hover:shadow-[0_0_30px_rgba(255,191,0,0.15)] hover:bg-primary/[0.05] transition-all duration-500"
            >
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {offer.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                {offer.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {offer.desc}
              </p>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default OfferSection;
