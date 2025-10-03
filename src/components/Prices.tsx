// src/components/Prices.tsx
import { useEffect } from "react";

export default function Prices() {
  useEffect(() => {
    // Add fade-in animation for cards
    const cards = document.querySelectorAll(".price-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100", "translate-y-0");
            }, index * 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const scrollToQuestions = () => {
    const el = document.getElementById("questions");
    if (!el) return;
    const offset = 80;
    window.scrollTo({
      top: el.offsetTop - offset,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative py-20 px-4 lg:px-8 bg-gradient-to-br from-grayModern-50 via-white to-grayModern-100 overflow-hidden"
      id="precios"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purpleCC-500/5 via-transparent to-coffeeCC-500/5" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purpleCC-500 to-coffeeCC-500" />

      <div className="relative z-10 max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purpleCC-600 to-coffeeCC-500 bg-clip-text text-transparent animate-fade-in">
          Precios
        </h2>
        <p className="text-grayModern-600 max-w-3xl mx-auto text-lg leading-relaxed opacity-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Gracias a nuestra estructura flexible y a que somos un equipo de estudiantes apasionados por el desarrollo web, podemos ofrecer los mejores precios del país.
        </p>
      </div>

      {/* Benefits list */}
      <div className="relative z-10 max-w-4xl mx-auto mb-16 px-4">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <li className="price-card bg-white rounded-xl p-6 shadow-card-modern hover:shadow-card-hover transition-all duration-300 opacity-0 transform translate-y-4">
            <div className="text-2xl mb-3">💰</div>
            <p className="text-grayModern-700 font-semibold mb-2">Sin tarifas fijas</p>
            <p className="text-grayModern-600 text-sm">Solo pagas por lo que realmente necesitas.</p>
          </li>
          <li className="price-card bg-white rounded-xl p-6 shadow-card-modern hover:shadow-card-hover transition-all duration-300 opacity-0 transform translate-y-4" style={{ animationDelay: "0.2s" }}>
            <div className="text-2xl mb-3">📄</div>
            <p className="text-grayModern-700 font-semibold mb-2">Sin límite de páginas</p>
            <p className="text-grayModern-600 text-sm">No te cobramos por cantidad, sino por funcionalidad y calidad.</p>
          </li>
          <li className="price-card bg-white rounded-xl p-6 shadow-card-modern hover:shadow-card-hover transition-all duration-300 opacity-0 transform translate-y-4" style={{ animationDelay: "0.4s" }}>
            <div className="text-2xl mb-3">🚀</div>
            <p className="text-grayModern-700 font-semibold mb-2">Desde solo $100</p>
            <p className="text-grayModern-600 text-sm">La mejor opción al mejor precio del mercado.</p>
          </li>
        </ul>
      </div>

      {/* Comparison cards */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 mb-16">
        {/* Others card */}
        <article className="price-card relative bg-gradient-to-br from-grayModern-800 to-grayModern-900 text-white rounded-2xl p-8 lg:p-10 shadow-card-modern hover:shadow-card-hover transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden opacity-0 transform translate-y-4">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Otros Proveedores
            </h3>
            <ul className="space-y-3 mb-8 text-left text-sm">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                Precios inflados
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                Costo extra por funciones innecesarias
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                Tarifas fijas exageradas
              </li>
            </ul>
            <div className="text-4xl lg:text-5xl font-bold text-red-400 mb-2">$200 - $800</div>
            <p className="text-red-300 text-xs opacity-80">Precios promedio del mercado</p>
          </div>
        </article>

        {/* Our card */}
        <article className="price-card relative bg-gradient-to-br from-purpleCC-500 to-coffeeCC-500 text-white rounded-2xl p-8 lg:p-10 shadow-glow-purple hover:shadow-card-hover transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden opacity-0 transform translate-y-4" style={{ animationDelay: "0.2s" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-grayModern-200 bg-clip-text text-transparent">
              Nosotros
            </h3>
            <ul className="space-y-3 mb-8 text-left text-sm">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Pagas por lo que necesitas, ni un dólar más
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Ética de trabajo transparente
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Planes flexibles
              </li>
            </ul>
            <div className="text-5xl lg:text-6xl font-bold mb-2">$100</div>
            <p className="text-white/80 text-xs opacity-80">Webs profesionales desde</p>
          </div>
        </article>
      </div>

      {/* Final CTA */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <p className="text-black text-lg lg:text-xl font-semibold mb-8 leading-relaxed opacity-0 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          Si buscas una página web bien hecha, sin pagar de más, somos tu mejor alternativa. ¡Contáctanos y cotiza gratis!
        </p>
        <button
          className="price-card relative inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-purpleCC-500 to-coffeeCC-500 text-white font-bold text-lg shadow-glow-purple hover:shadow-card-hover transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 opacity-0 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
          onClick={scrollToQuestions}
        >
          <span className="mr-2">Aprende más sobre los precios</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  );
}