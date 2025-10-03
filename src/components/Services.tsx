// src/components/Services.tsx
import { useEffect } from "react";

const SERVICES = [
  {
    id: "desarrollo",
    icon: "https://zezenta.shop/placeholders/SHARE/code.gif",
    title: "Desarrollo Web",
    description: "Diseñamos, desarrollamos, y activamos sitios web. Pueden ser a partir de un ejemplo, o pueden ser totalmente personalizados según el cliente necesite (sin precio extra).",
  },
  {
    id: "seo",
    icon: "https://zezenta.shop/placeholders/SHARE/lupa.gif",
    title: "SEO",
    description: "Nos aseguramos de que tu sitio web se muestre entre los primeros resultados de las búsquedas de Google; así, tu negocio llegará a más gente que busque cosas como \"Restaurantes en Manta\" o \"Abogados en Portoviejo\".",
  },
  {
    id: "mantenimiento",
    icon: "https://zezenta.shop/placeholders/SHARE/pc.gif",
    title: "Mantenimiento de Servidores",
    description: "Estamos atentos de que tu sitio web esté activo 24/7. También tenemos en cuenta de que tu sitio web cargue rápido, y sin demoras.",
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
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-purpleCC-500 to-coffeeCC-500 p-4 shadow-glow-purple group-hover:scale-110 transition-transform duration-300">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-contain filter brightness-0 invert group-hover:brightness-100 transition-all duration-300"
                  loading="lazy"
                />
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
