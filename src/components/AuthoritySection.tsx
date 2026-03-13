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
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-10" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Pensada para funcionar no
            <br />
            <span className="text-gradient-neon">mundo real.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-2 border-neon-hover p-6 flex items-start gap-4 group"
            >
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="text-foreground/80 font-body text-sm font-light leading-relaxed">{pillar}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block border-2 border-primary p-8 md:p-10 relative" style={{ boxShadow: "var(--neon-glow)" }}>
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary" />
            <p className="text-2xl md:text-3xl font-display font-bold">
              "Não é sobre promessas.
              <br />
              <span className="text-gradient-neon">É sobre método.</span>"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthoritySection;
