const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6 text-center">
      <p className="text-muted-foreground text-sm font-body">
        © {new Date().getFullYear()} Prime Soluções. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
