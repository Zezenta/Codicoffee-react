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
    <section
      className="bg-white p-10 text-center lg:flex lg:flex-col lg:justify-center lg:pt-[15px]"
      id="services"
    >
      <h2 className="text-[clamp(2rem,5vw,2.5rem)] mb-5 lg:mt-0 font-bold">
        Nuestros Servicios
      </h2>
      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:gap-[35px]">
        <article className="service__card bg-[#333] shadow-[0_0_5px_#0f0e0e] text-white p-6 rounded-lg w-4/5 max-w-[350px] min-h-[310px] text-center flex flex-col items-center gap-2.5 lg:min-h-[290px] lg:max-h-[295px]">
          <img
            src="https://zezenta.shop/placeholders/SHARE/code.gif"
            alt="lupa"
            className="w-[70px] h-[70px]"
            loading="lazy"
          />
          <h3 className="m-0 relative text-center font-bold">Desarrollo Web</h3>
          <p className="text-base">
            Diseñamos, desarrollamos, y activamos sitios web. Pueden ser a
            partir de un ejemplo, o pueden ser totalmente personalizados según
            el cliente necesite (sin precio extra).
          </p>
        </article>

        <article className="service__card bg-[#333] shadow-[0_0_5px_#0f0e0e] text-white p-6 rounded-lg w-4/5 max-w-[350px] min-h-[310px] text-center flex flex-col items-center gap-2.5 lg:min-h-[325px] lg:max-h-[330px]">
          <img
            src="https://zezenta.shop/placeholders/SHARE/lupa.gif"
            alt="lupa"
            className="w-[70px] h-[70px]"
            loading="lazy"
          />
          <h3 className="m-0 relative text-center font-bold">SEO</h3>
          <p className="text-base">
            Nos aseguramos de que tu sitio web se muestre entre los primeros
            resultados de las búsquedas de Google; así, tu negocio llegará a
            más gente que busque cosas como "Restaurantes en Manta" o "Abogados
            en Portoviejo".
          </p>
        </article>

        <article className="service__card bg-[#333] shadow-[0_0_5px_#0f0e0e] text-white p-6 rounded-lg w-4/5 max-w-[350px] min-h-[310px] text-center flex flex-col items-center gap-2.5 lg:min-h-[290px] lg:max-h-[295px]">
          <img
            src="https://zezenta.shop/placeholders/SHARE/pc.gif"
            alt="pc"
            className="w-[70px] h-[70px]"
            loading="lazy"
          />
          <h3 className="m-0 relative text-center font-bold">
            Mantenimiento de Servidores
          </h3>
          <p className="text-base">
            Estamos atentos de que tu sitio web esté activo 24/7. También
            tenemos en cuenta de que tu sitio web cargue rápido, y sin demoras.
          </p>
        </article>
      </div>
    </section>
  );
}
