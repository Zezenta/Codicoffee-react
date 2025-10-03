// src/components/Portfolio.tsx
import { useEffect } from "react";

const items = [
  {
    id: "intuitive",
    href: "https://codicoffee.com/clinica",
    img: "https://zezenta.shop/placeholders/SHARE/clinicalaptop.webp",
    title: "Clínica",
    desc: "Ejemplo de una página web informativa de una clínica dental. Con servicios, contacto, y ubicación.",
    label: "CLÍNICA",
  },
  {
    id: "sysadmina",
    href: "https://codicoffee.com/automotriz",
    img: "https://zezenta.shop/placeholders/SHARE/automotrizlaptop.webp",
    title: "Automotriz",
    desc: "Página web de un taller automotriz con catálogo de productos, contacto, y testimonios.",
    label: "TALLER",
  },
  {
    id: "innovative",
    href: "https://codicoffee.com/hotel",
    img: "https://zezenta.shop/placeholders/SHARE/hotellaptop.webp",
    title: "Hotel",
    desc: "Información de Hotel Resort, con sistema para consultar fechas disponibles, y contacto.",
    label: "HOTEL",
  },
  {
    id: "ironclad",
    href: "https://codicoffee.com/abogados",
    img: "https://zezenta.shop/placeholders/SHARE/abogadoslaptop.webp",
    title: "Abogados",
    desc: "Firma de Abogados, con sistema para recibir mensajes de clientes, y uso de correos.",
    label: "ABOGACÍA",
  },
];

export default function Portfolio() {
  useEffect(() => {
    const articles = Array.from(
      document.querySelectorAll<HTMLElement>(".portfolio__article")
    );

    const showOnScroll = () => {
      let newDelay = 0;
      articles.forEach((article) => {
        const rect = article.getBoundingClientRect();
        if (
          rect.top < window.innerHeight * 0.85 &&
          !article.classList.contains("visible")
        ) {
          setTimeout(() => {
            article.classList.add("visible");
          }, newDelay);
          newDelay += 200;
        }
      });
    };

    let timeout: number | undefined;
    const debounce = (fn: () => void, wait: number) => {
      return () => {
        if (timeout) window.clearTimeout(timeout);
        timeout = window.setTimeout(fn, wait);
      };
    };

    const handler = debounce(showOnScroll, 10);
    window.addEventListener("scroll", handler);
    showOnScroll();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 lg:px-8 bg-gradient-to-br from-purpleCC-900 via-blackCC to-coffeeCC-900 text-white overflow-hidden"
      id="portfolio"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purpleCC-500/10 via-transparent to-coffeeCC-500/10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purpleCC-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-coffeeCC-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purpleCC-200 to-coffeeCC-200 bg-clip-text text-transparent drop-shadow-2xl animate-fade-in">
          Portafolio
        </h2>
        <p className="text-grayModern-300 max-w-2xl mx-auto text-lg opacity-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Explora algunos de nuestros proyectos destacados, diseñados con pasión y precisión.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 w-full max-w-6xl mx-auto px-4">
        {items.map((it, index) => (
          <article
            key={it.id}
            className="portfolio__article relative overflow-hidden rounded-xl shadow-card-modern hover:shadow-card-hover transition-all duration-700 ease-out hover:-translate-y-4 group cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20 animate-slide-up"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <a
              href={it.href}
              className="block w-full h-full no-underline text-inherit relative"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Image */}
              <div className="relative w-full h-48 lg:h-56 overflow-hidden rounded-t-xl">
                <img
                  src={it.img}
                  alt={it.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-75 rounded-t-xl"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="relative p-6 lg:p-8 bg-white/10 backdrop-blur-sm rounded-b-xl border-t border-white/20">
                <h2 className="m-0 text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-purpleCC-300 transition-colors duration-300">
                  {it.title}
                </h2>
                <p className="m-0 text-grayModern-300 text-sm lg:text-base leading-relaxed mb-4 opacity-90">
                  {it.desc}
                </p>

                {/* Label overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                  <span className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text text-center px-4 py-2 bg-gradient-to-r from-purpleCC-400 to-coffeeCC-400 animate-bounce-gentle">
                    {it.label}
                  </span>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-2 right-2 w-8 h-8 bg-purpleCC-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}