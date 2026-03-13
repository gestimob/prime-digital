import { motion } from "framer-motion";

const ProblemSection = () => {
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
            <span className="text-gradient-gold">"Ela não está mais lá."</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl font-body font-light">
            Atenção não espera. Leads também não.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-glass border border-glass rounded-2xl p-8 md:p-12 space-y-6"
        >
          <p className="text-foreground/80 text-lg font-body font-light leading-relaxed">
            Hoje, para vender ou alugar, a maioria dos corretores depende de grandes portais imobiliários. Eles são parte do jogo. Mas também definem as regras.
          </p>
          <p className="text-foreground/80 text-lg font-body font-light leading-relaxed">
            O corretor anuncia, investe para destacar seus imóveis e compartilha o link do portal com seus próprios contatos. O tráfego acontece. A atenção chega. Mas nem sempre fica.
          </p>
          <p className="text-foreground/80 text-lg font-body font-light leading-relaxed">
            Quando um cliente acessa um portal, ele pode falar com quem indicou o imóvel. Ou pode simplesmente escolher outro anúncio — e desaparecer do radar.
          </p>
          <blockquote className="border-l-2 border-primary pl-6 py-2">
            <p className="text-foreground italic text-lg font-body">
              "Nesse modelo, o corretor só conhece quem entra em contato. Todo o resto pertence ao portal."
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
