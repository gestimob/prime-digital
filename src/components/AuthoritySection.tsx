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
    <section className="pt-4 md:pt-6 pb-10 md:pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-10" />

      <div className="relative z-10 max-w-4xl mx-auto">


        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-0"
        >
          <div className="inline-block border-2 border-primary p-8 md:p-10 relative" style={{ boxShadow: "var(--neon-glow)" }}>
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary" />
            <p className="text-2xl md:text-3xl font-display font-bold">
              "Não é sobre promessas.
              <br />
              <span className="text-gradient-neon">É sobre estratégia e resultado.</span>"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthoritySection;
