import { motion } from "framer-motion";
import { Shield, Eye, Target, Zap } from "lucide-react";

const SolutionSection = () => {
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
            "Quando a vitrine é sua,{" "}
            <span className="text-gradient-gold">o controle também é.</span>"
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl font-body font-light max-w-3xl mx-auto">
            Uma presença digital pensada para o corretor que quer atingir nível máximo de excelência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Eye,
              title: "Cada acesso é seu",
              desc: "Em uma vitrine própria, você sabe exatamente quem visita, de onde vem e o que procura.",
            },
            {
              icon: Target,
              title: "Interesse acompanhado",
              desc: "Cada interação pode ser rastreada e convertida em oportunidade real de negócio.",
            },
            {
              icon: Shield,
              title: "Controle total",
              desc: "Cada oportunidade permanece sob seu controle — do primeiro clique ao contato final.",
            },
            {
              icon: Zap,
              title: "Seja o destino",
              desc: "Você deixa de disputar atenção. Passa a ser o destino.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-glass border border-glass rounded-2xl p-8 group hover:border-primary/20 transition-colors duration-500"
            >
              <item.icon className="w-8 h-8 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3 font-display">{item.title}</h3>
              <p className="text-muted-foreground font-body font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contato"
            className="inline-block border border-primary/40 text-primary px-8 py-3 rounded-lg font-display font-medium text-sm tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Quero minha vitrine
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
