import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contato" className="section-pad relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/[0.04] blur-[100px] pointer-events-none" />

      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block mb-8">
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary" />
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold px-8 py-4">
              Sua vitrine.
              <br />
              <span className="text-gradient-neon">Seu controle.</span>
            </h2>
          </div>

          <p className="text-muted-foreground text-base md:text-lg font-body font-light max-w-xl mx-auto mb-12">
            Chegou o momento de construir uma presença digital que realmente trabalha para você.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="neon-btn">
            Falar Agora
          </a>
          <a href="mailto:contato@primesolucoes.online" className="neon-btn-outline">
            Enviar E-mail
          </a>
        </motion.div>

        {/* Decorative bottom */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-20 h-px w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        />
      </div>
    </section>
  );
};

export default ContactSection;
