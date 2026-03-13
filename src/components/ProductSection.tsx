import { motion } from "framer-motion";
import { Gauge, MousePointerClick, BarChart3 } from "lucide-react";

const ProductSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Gestão inteligente em uma interface de{" "}
            <span className="text-gradient-gold">alta performance.</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body font-light max-w-2xl mx-auto">
            Uma plataforma completa, pensada para ser intuitiva e poderosa, dando total controle ao corretor.
          </p>
        </motion.div>

        {/* Product mockup area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="relative mb-20"
        >
          <div className="bg-glass border border-glass rounded-2xl p-2 glow-gold">
            <div className="bg-secondary rounded-xl aspect-[16/9] flex items-center justify-center overflow-hidden">
              <img
                src="https://ufsyauqlbjdyfipckjxs.supabase.co/storage/v1/object/public/assets/dash_principal.jpeg"
                alt="Interface da Vitrine Premium - Painel administrativo"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Features row */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Gauge,
              title: "Performance",
              desc: "Carregamento instantâneo para não perder o interesse do lead.",
            },
            {
              icon: MousePointerClick,
              title: "Intuitivo",
              desc: "Curva de aprendizado zero: focado na sua produtividade real.",
            },
            {
              icon: BarChart3,
              title: "Controle",
              desc: "Histórico completo de cada interação feita na sua vitrine.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-5">
                <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold mb-2 font-display">{item.title}</h3>
              <p className="text-muted-foreground font-body font-light text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
