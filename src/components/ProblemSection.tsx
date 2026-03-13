import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section id="problema" className="section-pad relative overflow-hidden">
      {/* Diagonal line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          {/* Left — big quote */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="border-l-2 border-primary pl-6 md:pl-8">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6">
                <span className="text-neon">"Ela não</span>
                <br />
                <span className="text-foreground">está mais</span>
                <br />
                <span className="text-neon">lá."</span>
              </h2>
              <p className="text-muted-foreground text-lg font-body font-light">
                Atenção não espera.<br />Leads também não.
              </p>
            </div>
          </motion.div>

          {/* Right — content cards */}
          <div className="space-y-4">
            {[
              "Hoje, a maioria dos corretores depende de grandes portais imobiliários. Eles são parte do jogo. Mas também definem as regras.",
              "O corretor anuncia, investe, compartilha o link. O tráfego acontece. Mas nem sempre fica.",
              "Quando um cliente acessa um portal, ele pode simplesmente escolher outro anúncio — e desaparecer do radar.",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="border border-neon-hover p-5 md:p-6 bg-secondary/50"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-primary/60 mt-1 shrink-0">
                    0{i + 1}
                  </span>
                  <p className="text-foreground/80 font-body font-light text-sm md:text-base leading-relaxed">
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="border-2 border-neon p-5 md:p-6 bg-primary/[0.03]"
              style={{ boxShadow: "var(--neon-glow)" }}
            >
              <p className="text-foreground font-mono text-sm italic leading-relaxed">
                "Nesse modelo, o corretor só conhece quem entra em contato. Todo o resto pertence ao portal."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
