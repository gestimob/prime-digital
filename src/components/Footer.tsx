const Footer = () => {
  return (
    <footer className="border-t border-primary/10 py-8 px-5 text-center relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <img 
            src="https://nmkxyncyhucsekvumatb.supabase.co/storage/v1/object/public/imoveis/assets/primesolucoes.png" 
            alt="Prime Digital Logo" 
            className="h-6 md:h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
        <p className="text-muted-foreground text-xs font-mono">
          © {new Date().getFullYear()} — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
