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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-glass border-b border-glass" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <span className="font-display font-bold text-lg tracking-tight">
          PRIME<span className="text-primary">.</span>
        </span>
        <a
          href="#contato"
          className="text-sm font-display font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          Contato
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
