import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Sua vitrine.{" "}
            <span className="text-gradient-gold">Seu controle.</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl font-body font-light max-w-2xl mx-auto mb-12">
            Chegou o momento de deixar de depender da atenção emprestada e construir uma presença digital que realmente trabalha para você.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg font-display font-semibold text-sm tracking-[0.15em] uppercase hover:brightness-110 transition-all duration-300 glow-gold"
          >
            Falar Agora
          </a>
          <a
            href="mailto:contato@primesolucoes.online"
            className="inline-block border border-primary/40 text-primary px-10 py-4 rounded-lg font-display font-medium text-sm tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Enviar E-mail
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
