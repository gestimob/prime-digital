import { motion } from "framer-motion";

const GeometricShape = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, delay, ease: "easeOut" }}
    className={className}
  />
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* 2D Geometric elements */}
      <GeometricShape
        delay={0.8}
        className="absolute top-20 right-[10%] w-32 h-32 border border-primary/20 rotate-45 animate-float"
      />
      <GeometricShape
        delay={1}
        className="absolute bottom-32 left-[8%] w-20 h-20 border border-primary/15 rotate-12 animate-float"
        
      />
      <GeometricShape
        delay={1.2}
        className="absolute top-[40%] left-[5%] w-3 h-3 bg-primary/40 rounded-full glow-dot"
      />
      <GeometricShape
        delay={1.4}
        className="absolute top-[20%] right-[20%] w-2 h-2 bg-primary/60 rounded-full glow-dot"
      />
      <GeometricShape
        delay={0.6}
        className="absolute bottom-[20%] right-[15%] w-40 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      />
      <GeometricShape
        delay={0.9}
        className="absolute top-[60%] left-[12%] w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent"
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-5">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 border border-primary/30 px-5 py-2 mb-10"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse-neon" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary/80">
            sistema ativo
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight mb-8"
        >
          <span className="block">Sua vitrine</span>
          <span className="block text-gradient-neon">digital</span>
          <span className="block text-2xl md:text-4xl lg:text-5xl font-light text-muted-foreground mt-4">
            no último pavimento.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-12 font-light"
        >
          Construímos vitrines digitais para corretores que buscam o topo do mercado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contato" className="neon-btn">
            Quero me destacar
          </a>
          <a href="#timeline" className="neon-btn-outline">
            Explorar
          </a>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="mt-20 h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-primary/20" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-primary/20" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-primary/20" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-primary/20" />
    </section>
  );
};

export default HeroSection;
