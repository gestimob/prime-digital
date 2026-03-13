import { motion } from "framer-motion";
import { Palette, Building, Users, Search } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "CMS totalmente personalizável",
    desc: "Textos, imagens e conteúdos sob seu controle. A vitrine se adapta à sua identidade, não o contrário.",
  },
  {
    icon: Building,
    title: "Cadastro simples de imóveis",
    desc: "O corretor cadastra seus próprios imóveis de forma fácil e intuitiva, através de um painel administrativo pensado para o uso diário.",
  },
  {
    icon: Users,
    title: "Gestão completa de leads",
    desc: "Visualize de onde cada lead veio — formulário, botão de CTA ou contato direto. Tenha histórico e possibilidade de exportação em .CSV.",
  },
  {
    icon: Search,
    title: "Busca inteligente",
    desc: "Quando uma busca não encontra termos exatos, a vitrine retorna imóveis em destaque. O cliente sempre encontra algo relevante.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            "Uma vitrine pensada para o{" "}
            <span className="text-gradient-gold">dia a dia</span> do corretor."
          </h2>
          <p className="text-muted-foreground text-lg font-body font-light max-w-2xl mx-auto">
            Tecnologia que trabalha nos bastidores para dar clareza, controle e presença digital.
          </p>
        </motion.div>

        <div className="space-y-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-glass border border-glass rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start gap-6 hover:border-primary/20 transition-colors duration-500"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 font-display">{feature.title}</h3>
                <p className="text-muted-foreground font-body font-light leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
