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
                <span className="text-neon">"Clientes e</span>
                <br />
                <span className="text-foreground">leads se perdendo</span>
                <br />
                <span className="text-neon">no processo"</span>
              </h2>
              <p className="text-muted-foreground text-lg font-body font-light">
                Imóveis cadastrados em planilhas, documentos espalhados e dificuldade para encontrar informações importantes.
              </p>
            </div>
          </motion.div>

          {/* Right — content cards */}
          <div className="space-y-4">
            {[
              "Imóveis perdidos em planilhas e conversas de WhatsApp nunca se tornam vendas reais.",
              "Leads que chegam e não são atendidos em minutos escolhem outro corretor — e você nem fica sabendo.",
              "Depender apenas de portais é terceirizar o seu faturamento e perder o controle da sua base de clientes.",
              "Processos manuais que consomem tempo: atividades repetitivas acabam tomando tempo da equipe, reduzindo a produtividade e atrasando negociações.",
              "Falta de organização dos imóveis: documentos espalhados e dificuldade para encontrar informações importantes.",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="border border-primary/20 p-5 md:p-6 bg-secondary/50 rounded-lg hover:border-primary/40 transition-colors"
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
              className="border-2 border-neon p-5 md:p-6 bg-primary/[0.03] rounded-lg"
              style={{ boxShadow: "var(--neon-glow)" }}
            >
              <p className="text-foreground font-mono text-lg italic leading-relaxed text-center">
                "A desorganização é o ralo por onde escorre a sua comissão todos os meses."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
