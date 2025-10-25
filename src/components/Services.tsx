// src/components/Services.tsx
import { useEffect } from "react";

const SERVICES = [
  {
    id: "web",
    icon: "🖥️",
    title: "Sitios web",
    description:
      "Landing o multipágina, responsive, SEO técnico básico, WhatsApp y Analytics. Desde $180 + mantenimiento opcional.",
  },
  {
    id: "catalog",
    icon: "🗂️",
    title: "Catálogo y distribuidores",
    description:
      "Grid de productos, fichas y formulario que envía leads directo a WhatsApp o correo. Desde $240.",
  },
  {
    id: "systems",
    icon: "📦",
    title: "Sistemas internos a medida",
    description:
      "Inventario, pedidos, CRM simple o paneles en la nube. Nos ajustamos a tu flujo actual e integramos con Google Sheets si lo necesitas.",
  },
  {
    id: "automation",
    icon: "🤖",
    title: "Automatizaciones e IA",
    description:
      "Bots de WhatsApp, respuestas automáticas, extracción de datos y reportes. Incluimos setup y capacitación para tu equipo.",
  },
  {
    id: "domain",
    icon: "✉️",
    title: "Dominio y correo corporativo",
    description:
      "Te asesoramos en la compra del dominio y configuramos correos tipo ventas@tuempresa.com (Zoho, ImprovMX, DNS).",
  },
  {
    id: "consulting",
    icon: "🧠",
    title: "Consultoría técnica",
    description:
      "Sesiones cortas para resolver dudas, elegir stack, auditar tu web o acompañarte durante una implementación.",
  },
];

export default function Services() {
  useEffect(() => {
    const servicesSection = document.getElementById("services");
    const headings = document.querySelectorAll<HTMLHeadingElement>(
      ".service__card h3"
    );

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            headings.forEach((h) => h.classList.add("underline-active"));
            obs.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (servicesSection) obs.observe(servicesSection);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="relative py-20 px-4 lg:px-8 bg-gradient-to-br from-purpleCC-900 via-blackCC to-coffeeCC-900 overflow-hidden text-white"
      id="services"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purpleCC-500/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purpleCC-500 to-coffeeCC-500" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purpleCC-600 to-coffeeCC-500 bg-clip-text text-transparent animate-fade-in">
          Nuestros Servicios
        </h2>
        <p className="text-grayModern-300 max-w-2xl mx-auto text-lg opacity-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Ofrecemos soluciones completas para potenciar tu presencia digital con calidad y a precios accesibles.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16 px-4">
        {SERVICES.map((service, index) => (
          <article
            key={service.id}
            className="service__card group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-card-modern hover:shadow-glow-purple transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] overflow-hidden animate-slide-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Card background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purpleCC-500/5 to-coffeeCC-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
            
            {/* Icon */}
            <div className="relative mb-6 flex justify-center">
              <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purpleCC-500 to-coffeeCC-500 shadow-glow-purple group-hover:scale-110 transition-transform duration-300 text-4xl">
                <span aria-hidden>{service.icon}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="m-0 relative text-xl lg:text-2xl font-bold text-white mb-4 text-center group-hover:text-purpleCC-300 transition-colors duration-300">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-grayModern-200 text-base leading-relaxed text-center relative z-10">
              {service.description}
            </p>

            {/* Hover overlay */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purpleCC-500 to-coffeeCC-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            {/* Decorative element */}
            <div className="absolute top-4 right-4 w-6 h-6 bg-purpleCC-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
          </article>
        ))}
      </div>
    </section>
  );
}
