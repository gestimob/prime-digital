import { motion } from "framer-motion";
import { User, Globe, LayoutDashboard } from "lucide-react";

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
            Tecnologia que
            <br />
            <span className="text-gradient-neon">organiza e vende.</span>
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

          <div className="border border-primary/30 p-1 relative rounded-sm overflow-hidden aspect-video" style={{ boxShadow: "var(--neon-glow-subtle)" }}>
            <video
              src="https://dgfqjgptrqfcuopzdbou.supabase.co/storage/v1/object/public/assets/video%20landing%20page.mp4"
              className="w-full h-full object-cover block"
              autoPlay
              muted
              loop
              playsInline
            />
            {/* Scanline overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-primary/[0.02] pointer-events-none" />

            {/* Watermark Logo (Brought to front) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <img 
                src="https://nmkxyncyhucsekvumatb.supabase.co/storage/v1/object/public/imoveis/assets/primesolucoes.png" 
                alt="" 
                className="w-1/3 md:w-1/4 h-auto opacity-30 brightness-0 invert grayscale"
              />
            </div>
          </div>
        </motion.div>

        {/* Feature stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            {
              icon: <User className="w-8 h-8 text-primary" />,
              title: "CRM Ativo",
              desc: "Gestão inteligente de Leads"
            },
            {
              icon: <Globe className="w-8 h-8 text-primary" />,
              title: "Site Integrado",
              desc: "Sua vitrine sempre online"
            },
            {
              icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
              title: "Gestão Fácil",
              desc: "Controle total em sua mão"
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-primary/20 rounded-lg bg-background/50 backdrop-blur-sm text-center group hover:border-primary/50 transition-colors"
            >
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed whitespace-pre-line">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a href="#oferta" className="neon-btn inline-block">
            QUERO CONHECER
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
