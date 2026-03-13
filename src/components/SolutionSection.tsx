import { motion } from "framer-motion";

const SolutionSection = () => {
  return (
    <section id="solução" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Geometric frame */}
          <div className="relative inline-block mb-12">
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary" />
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold px-8 py-4">
              Quando a vitrine é sua,
              <br />
              <span className="text-gradient-neon">o controle também é.</span>
            </h2>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-muted-foreground text-lg md:text-xl font-body font-light max-w-2xl mx-auto mb-16"
        >
          Uma presença digital pensada para o corretor que quer atingir nível máximo de excelência.
        </motion.p>

        {/* Big stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-primary/10">
          {[
            { value: "100%", label: "Controle" },
            { value: "0", label: "Concorrentes" },
            { value: "∞", label: "Possibilidades" },
            { value: "24/7", label: "Presença" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-6 md:p-8 text-center"
            >
              <span className="block text-3xl md:text-4xl font-display font-bold text-neon mb-2">
                {stat.value}
              </span>
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contato" className="neon-btn">
            Quero minha vitrine
          </a>
        </motion.div>

        {/* Decorative quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 font-mono text-sm text-muted-foreground italic"
        >
          "Você deixa de disputar atenção. Passa a ser o destino."
        </motion.p>
      </div>
    </section>
  );
};

export default SolutionSection;
