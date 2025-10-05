// src/components/Prices.tsx
import { useEffect } from "react";

const PLANS = [
  {
    id: "landing",
    name: "Landing Page",
    price: "$180",
    monthly: "+ $15/mes mantenimiento opcional",
    description:
      "3–4 secciones, WhatsApp, formulario, 1 ronda de cambios y hosting incluido el primer año o deploy en tu servidor.",
    features: [
      "Optimización técnica básica SEO",
      "Integración con Analytics y métricas básicas",
      "Entrega en 7-10 días con contenidos listos",
    ],
  },
  {
    id: "catalog",
    name: "Catálogo / Distribuidores",
    price: "$240",
    monthly: "+ $20/mes mantenimiento opcional",
    description:
      "Catálogo administrable, fichas de productos y formulario que llega directo a WhatsApp o correo.",
    features: [
      "Búsqueda y filtros básicos",
      "Dashboard con métricas simples",
      "Capacitación de uso para tu equipo",
    ],
  },
];

const ADD_ONS = [
  {
    id: "hero",
    title: "Hero 3D ligero",
    price: "+ $60",
    description: "Animación inicial para destacar tu propuesta de valor sin afectar la velocidad.",
  },
  {
    id: "mail",
    title: "Correo corporativo",
    price: "$25 único",
    description: "Configuración (Zoho/ImprovMX) + DNS para correos tipo ventas@tuempresa.com.",
  },
  {
    id: "automation",
    title: "Automatizaciones con WhatsApp/Sheets",
    price: "desde $80 setup",
    description: "Bots, flujos de respuesta y reportes conectados con tus herramientas actuales.",
  },
];

export default function Prices() {
  useEffect(() => {
    const cards = document.querySelectorAll(".price-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100", "translate-y-0");
            }, index * 150);
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
          Precios claros y sin sorpresas
        </h2>
        <p
          className="text-grayModern-600 max-w-3xl mx-auto text-lg leading-relaxed opacity-0 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Trabajamos con precios cerrados, anticipo del 50% y balance al entregar. Soporte local, deploy controlado y acompañamiento post lanzamiento.
        </p>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 mb-16">
        {PLANS.map((plan, index) => (
          <article
            key={plan.id}
            className="price-card relative bg-gradient-to-br from-grayModern-800 to-grayModern-900 text-white rounded-2xl p-8 lg:p-10 shadow-card-modern hover:shadow-card-hover transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden opacity-0 translate-y-4 border border-white/20"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purpleCC-500/10 to-coffeeCC-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-grayModern-200 bg-clip-text text-transparent">
                {plan.name}
              </h3>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 mb-4">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="text-sm font-medium text-purpleCC-200 bg-white/5 border border-white/10 rounded-full px-4 py-1">
                  {plan.monthly}
                </span>
              </div>
              <p className="text-grayModern-300 text-sm lg:text-base leading-relaxed mb-6">
                {plan.description}
              </p>
              <ul className="space-y-3 text-sm lg:text-base text-grayModern-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purpleCC-400 rounded-full mt-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 mb-16">
        <article
          className="price-card relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 lg:p-10 shadow-card-modern hover:shadow-glow-purple transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden opacity-0 translate-y-4"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purpleCC-500/5 to-coffeeCC-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-grayModern-200 bg-clip-text text-transparent">
              Add-ons para potenciar tu proyecto
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ADD_ONS.map((item) => (
                <div key={item.id} className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col gap-2">
                  <span className="text-sm font-semibold text-purpleCC-200">{item.price}</span>
                  <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                  <p className="text-sm text-grayModern-200 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <p className="text-lg lg:text-xl font-semibold mb-8 leading-relaxed opacity-0 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          Nota: 50% anticipo, 50% al entregar. Tiempos de 7–10 días con contenidos listos y soporte continuo vía WhatsApp.
        </p>
        <button
          className="price-card relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purpleCC-500 to-coffeeCC-500 text-white font-bold text-lg shadow-glow-purple hover:shadow-card-hover transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 opacity-0 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
          onClick={scrollToQuestions}
        >
          <span>Preguntas comunes sobre el precio</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
