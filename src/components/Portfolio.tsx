// src/components/Portfolio.tsx
import { useEffect } from "react";

const items = [
  {
    id: "intuitive",
    href: "https://codicoffee.com/clinica",
    img: "https://zezenta.shop/placeholders/SHARE/clinicalaptop.webp",
    title: "Clínica",
    desc:
      "Ejemplo de una página web informativa de una clínica dental. Con servicios, contacto, y ubicación.",
    label: "CLÍNICA"
  },
  {
    id: "sysadmina",
    href: "https://codicoffee.com/automotriz",
    img: "https://zezenta.shop/placeholders/SHARE/automotrizlaptop.webp",
    title: "Automotriz",
    desc:
      "Página web de un taller automotriz con catálogo de productos, contacto, y testimonios.",
    label: "TALLER"
  },
  {
    id: "innovative",
    href: "https://codicoffee.com/hotel",
    img: "https://zezenta.shop/placeholders/SHARE/hotellaptop.webp",
    title: "Hotel",
    desc:
      "Información de Hotel Resort, con sistema para consultar fechas disponibles, y contacto.",
    label: "HOTEL"
  },
  {
    id: "ironclad",
    href: "https://codicoffee.com/abogados",
    img: "https://zezenta.shop/placeholders/SHARE/abogadoslaptop.webp",
    title: "Abogados",
    desc:
      "Firma de Abogados, con sistema para recibir mensajes de clientes, y uso de correos.",
    label: "ABOGACÍA"
  }
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
        if (rect.top < window.innerHeight * 0.85 &&
            !article.classList.contains("visible")) {
          setTimeout(() => article.classList.add("visible"), newDelay);
          newDelay += 170;
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
    <section className="portfolio section" id="portfolio">
      <h2 className="portfolio__title">Portafolio</h2>
      <div className="portfolio__articles-container">
        {items.map((it) => (
          <article className="portfolio__article" id={it.id} key={it.id}>
            <a
              href={it.href}
              className="portfolio__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="portfolio__img-wrapper">
                <img
                  src={it.img}
                  alt={it.title}
                  className="portfolio__img"
                  loading="lazy"
                />
              </div>
              <div className="portfolio__text-container">
                <h2>{it.title}</h2>
                <p>
                  <strong>{it.desc}</strong>
                </p>
              </div>
              <span
                className="portfolio__placeholder"
                style={{
                  backgroundImage: `url('${it.img}')`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
                }}
              >
                {it.label}
              </span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}