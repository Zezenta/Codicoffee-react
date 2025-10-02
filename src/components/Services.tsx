// src/components/Services.tsx
import { useEffect } from "react";

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
    <section className="services section" id="services">
      <h2 className="services__title">Nuestros Servicios</h2>
      <div className="service__cards-container">
        <article className="service__card service__card--side">
          <img
            src="https://zezenta.shop/placeholders/SHARE/code.gif"
            alt="lupa"
            className="service__circle"
            loading="lazy"
          />
          <h3>Desarrollo Web</h3>
          <p>
            Diseñamos, desarrollamos, y activamos sitios web. Pueden ser a
            partir de un ejemplo, o pueden ser totalmente personalizados según
            el cliente necesite (sin precio extra).
          </p>
        </article>

        <article className="service__card service__card--center">
          <img
            src="https://zezenta.shop/placeholders/SHARE/lupa.gif"
            alt="lupa"
            className="service__circle"
            loading="lazy"
          />
          <h3>SEO</h3>
          <p>
            Nos aseguramos de que tu sitio web se muestre entre los primeros
            resultados de las búsquedas de Google; así, tu negocio llegará a
            más gente que busque cosas como "Restaurantes en Manta" o "Abogados
            en Portoviejo".
          </p>
        </article>

        <article className="service__card service__card--side">
          <img
            src="https://zezenta.shop/placeholders/SHARE/pc.gif"
            alt="pc"
            className="service__circle"
            loading="lazy"
          />
          <h3>Mantenimiento de Servidores</h3>
          <p>
            Estamos atentos de que tu sitio web esté activo 24/7. También
            tenemos en cuenta de que tu sitio web cargue rápido, y sin demoras.
          </p>
        </article>
      </div>
    </section>
  );
}