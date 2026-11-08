export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      <a className="hidden md:flex items-center gap-2 bg-surface text-on-surface px-4 py-2.5 rounded-full shadow-xl mr-3 font-semibold hover:bg-surface-container transition-all border border-outline-variant/30" href="https://wa.me/529990000000?text=Hola%2C%20quisiera%20cotizar%20mi%20visita%20a%20El%20Gran%20T%C2%B4Zunun" target="_blank" rel="noopener noreferrer">
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping"></span>
        <span className="text-xs">¡Cotiza tu día aquí!</span>
      </a>
      <a aria-label="Contactar por WhatsApp" className="relative w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95" href="https://wa.me/529990000000?text=Hola%2C%20quisiera%20cotizar%20mi%20visita%20a%20El%20Gran%20T%C2%B4Zunun" target="_blank" rel="noopener noreferrer">
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none"></span>
        <svg className="w-9 h-9 fill-current relative z-10" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.449.741.964 1.201.662.591 1.221.774 1.394.861.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.203.043.072.043.419-.101.824z"></path>
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.178L2 22l4.98-1.306C8.423 21.523 10.153 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.273c-1.636 0-3.15-.494-4.417-1.341l-.316-.214-2.97.779.792-2.896-.231-.368A8.243 8.243 0 0 1 3.727 12c0-4.562 3.711-8.273 8.273-8.273 4.562 0 8.273 3.711 8.273 8.273 0 4.562-3.711 8.273-8.273 8.273z"></path>
        </svg>
      </a>
    </div>
  );
}