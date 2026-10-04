
export default function Header() {
  return (
    <header className="bg-surface/90 dark:bg-inverse-surface/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/30">
      <nav className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
        <a className="font-headline-md text-xl font-bold text-primary dark:text-inverse-primary" href="#">
          El Gran T´Zunun
        </a>
        <div className="hidden md:flex items-center gap-gutter">
          <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors hover:opacity-80 transition-opacity" href="#packages">Packages</a>
          <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors hover:opacity-80 transition-opacity" href="#about">About</a>
        </div>
        <button className="bg-primary text-on-primary px-6 py-3 rounded-DEFAULT hover:opacity-80 transition-opacity scale-95 active:scale-90 transition-transform">
          Reserve
        </button>
      </nav>
    </header>
  );
}