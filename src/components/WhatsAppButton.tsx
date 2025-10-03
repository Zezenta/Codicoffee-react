// src/components/WhatsAppButton.tsx
import { useEffect, useState } from "react";

export default function WhatsappButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/593999405155"
      className={`fixed bottom-6 right-6 z-[1000] flex items-center gap-3 px-6 py-4 rounded-full text-white font-semibold text-base lg:text-lg shadow-glow-purple transition-all duration-500 ease-out backdrop-blur-xl border border-white/20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } animate-bounce-gentle hover:-translate-y-2 hover:scale-105 hover:shadow-card-hover`}
      style={{
        background: 'linear-gradient(135deg, var(--purpleCC-500) 0%, var(--coffeeCC-500) 100%)',
      }}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctanos por WhatsApp"
    >
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 lg:w-9 lg:h-9 relative z-10"
        >
          <path
            d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"
          />
        </svg>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-30 blur-xl animate-pulse rounded-full" />
      </div>
      <span className="relative z-10 hidden sm:inline animate-pulse-glow">Contáctanos</span>
    </a>
  );
}
