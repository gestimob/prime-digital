import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase mb-8 font-body">
            Prime Soluções
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
        >
          Sua vitrine precisa{" "}
          <br className="hidden md:block" />
          chamar atenção igual a essa{" "}
          <span className="text-gradient-gold">tecnologia</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body font-light"
        >
          Construímos vitrines digitais para corretores que buscam o topo do mercado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <a
            href="#contato"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg font-display font-semibold text-sm tracking-[0.15em] uppercase hover:brightness-110 transition-all duration-300 glow-gold"
          >
            Quero me destacar
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-muted-foreground/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
