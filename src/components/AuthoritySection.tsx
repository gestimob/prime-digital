import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const pillars = [
  "Estrutura pensada para conversão e gestão.",
  "Navegação clara para o cliente final.",
  "Controle total do corretor sobre sua presença digital.",
  "Independência estratégica em relação a plataformas de terceiros.",
];

const AuthoritySection = () => {
  return (
    <section className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            "Uma estrutura pensada para funcionar no{" "}
            <span className="text-gradient-gold">mundo real.</span>"
          </h2>
          <p className="text-muted-foreground text-lg font-body font-light max-w-3xl mx-auto">
            A vitrine foi construída a partir da rotina de corretores que atuam diariamente no mercado. Cada decisão foi pensada para resolver problemas reais.
          </p>
        </motion.div>

        <div className="space-y-4 mb-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-4 bg-glass border border-glass rounded-xl p-5"
            >
              <CheckCircle className="w-5 h-5 text-primary shrink-0" strokeWidth={1.5} />
              <p className="text-foreground/90 font-body font-light">{pillar}</p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-display font-bold italic text-foreground/60">
            "Não é sobre promessas.{" "}
            <span className="text-gradient-gold">É sobre método.</span>"
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default AuthoritySection;
