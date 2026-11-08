export default function Footer() {
  return (
    <footer className="bg-surface-container-low dark:bg-inverse-surface border-t border-outline-variant w-full">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col md:flex-row justify-between gap-gutter items-center md:items-start">
        <div className="mb-stack-md md:mb-0 text-center md:text-left">
          <span className="font-headline-md text-xl text-on-surface dark:text-inverse-on-surface block mb-2">
            El Gran T´Zunun
          </span>
          <span className="font-body-md text-sm text-on-surface-variant dark:text-surface-variant">
            © 2026 El Gran T´Zunun Nature Park. Todos los derechos reservados.
          </span>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end gap-stack-lg">
          <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors" href="#">Contacto</a>
          <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors" href="#">Ubicación</a>
          <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors" href="#">Instagram</a>
          <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors" href="#">Facebook</a>
        </nav>
      </div>
    </footer>
  );
}