// src/components/Manabi.tsx
import { useEffect } from "react";

export default function Manabi() {
  useEffect(() => {
    const section = document.querySelector(".manabi-section");
    if (section) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      }, { threshold: 0.5 });

      observer.observe(section);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <section className="manabi-section relative py-16 px-4 lg:px-8 bg-gradient-to-br from-grayModern-900 via-purpleCC-900 to-coffeeCC-900 text-white overflow-hidden opacity-0 translate-y-10 transition-all duration-1000 ease-out">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purpleCC-500/10 via-transparent to-coffeeCC-500/10" />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6 max-w-4xl mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-[#078930] via-white to-[#da121a] bg-clip-text text-transparent drop-shadow-2xl animate-fade-in">
          <span className="text-[#078930]">HECHO E</span>
          <span className="text-[#da121a]">N MANABÍ</span>
        </h2>
        
        <div className="relative animate-bounce-gentle">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/68/Bandera_Provincia_Manab%C3%AD.svg"
            className="w-24 h-16 lg:w-32 lg:h-20 object-contain drop-shadow-glow-purple hover:scale-110 transition-transform duration-300"
            loading="lazy"
            alt="Bandera de Manabí"
          />
          {/* Flag glow effect */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#078930] to-[#da121a] opacity-30 blur-xl animate-pulse" />
        </div>

        <p className="text-grayModern-300 text-sm lg:text-base max-w-2xl mx-auto opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          Con orgullo desarrollamos desde la costa ecuatoriana, llevando innovación y calidad a cada proyecto.
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-[#078930]/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#da121a]/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }} />
    </section>
  );
}
