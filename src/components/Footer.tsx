const Footer = () => {
  return (
    <footer className="border-t border-primary/10 py-8 px-5 text-center relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Prime Soluções
          </span>
        </div>
        <p className="text-muted-foreground text-xs font-mono">
          © {new Date().getFullYear()} — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
