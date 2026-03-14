import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-neon/10"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="https://nmkxyncyhucsekvumatb.supabase.co/storage/v1/object/public/imoveis/assets/primesolucoes.png" 
            alt="Prime Digital Logo" 
            className="h-8 md:h-10 w-auto"
          />
        </div>

        {/* Nav items */}
        <div className="hidden md:flex items-center gap-8">
          {["Problema", "Solução", "Produto", "Timeline"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-neon transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <a href="#oferta" className="font-mono text-xs tracking-[0.2em] uppercase border border-primary/40 px-5 py-2 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
          QUERO AGORA
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
