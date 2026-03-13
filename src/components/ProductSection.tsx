import { motion } from "framer-motion";

const ProductSection = () => {
  return (
    <section id="produto" className="section-pad relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary">
              Interface
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Gestão inteligente em
            <br />
            <span className="text-gradient-neon">alta performance.</span>
          </h2>
        </motion.div>

        {/* Product mockup with neon border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mb-16"
        >
          {/* Corner marks */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary" />
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary" />

          <div className="border border-primary/30 p-1" style={{ boxShadow: "var(--neon-glow-subtle)" }}>
            <div className="aspect-[16/9] bg-secondary overflow-hidden relative">
              <img
                src="https://ufsyauqlbjdyfipckjxs.supabase.co/storage/v1/object/public/assets/dash_principal.jpeg"
                alt="Interface da Vitrine Premium"
                className="w-full h-full object-cover"
              />
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-primary/[0.02] pointer-events-none" />
            </div>
          </div>

          {/* Floating label */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background border border-primary/40 px-6 py-2">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-primary">
              PREVIEW v2.0
            </span>
          </div>
        </motion.div>

        {/* Feature stats */}
        <div className="grid grid-cols-3 gap-px">
          {[
            { icon: "⚡", title: "Performance", desc: "Carregamento instantâneo" },
            { icon: "◉", title: "Intuitivo", desc: "Curva de aprendizado zero" },
            { icon: "◈", title: "Controle", desc: "Histórico completo" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-neon-hover p-6 md:p-8 text-center bg-secondary/30"
            >
              <span className="text-2xl md:text-3xl mb-4 block">{item.icon}</span>
              <h3 className="font-display font-bold text-sm md:text-base mb-1">{item.title}</h3>
              <p className="text-muted-foreground font-mono text-[10px] md:text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
