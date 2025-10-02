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
    <section
      className="[background:radial-gradient(circle,rgba(86,8,122,1)_0%,rgba(34,35,36,1)_36%,rgba(0,0,0,1)_95%)] text-whiteCC flex flex-col items-center justify-center p-5 w-full gap-6 lg:min-h-[90vh]"
      id="portfolio"
    >
      <h2 className="text-center text-[clamp(2rem,5vw,2.5rem)] mt-[30px] tracking-[2.5px] lg:text-4xl font-bold">
        Portafolio
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-3 p-1 w-full max-w-full overflow-hidden lg:max-w-[750px] lg:px-10 lg:gap-6 group">
        {items.map((it) => (
          <article
            className="portfolio__article flex flex-col justify-start items-center h-full cursor-pointer bg-transparent shadow-[0px_0px_9px_#1b1b1b] relative overflow-hidden rounded-md group-hover:opacity-50 hover:!opacity-100"
            id={it.id}
            key={it.id}
          >
            <a
              href={it.href}
              className="no-underline text-inherit flex flex-col w-full h-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full h-[180px]">
                <img
                  src={it.img}
                  alt={it.title}
                  className="w-full h-full object-cover transition-transform duration-400 ease-out group-hover:scale-[3.5] group-hover:brightness-80 lg:group-hover:scale-[3]"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-whiteCC rounded-b-md h-full lg:min-h-[120px]">
                <h2 className="m-0 text-xl text-purpleCC break-all lg:text-2xl font-bold">
                  {it.title}
                </h2>
                <p className="mt-4 mb-1 text-xs tracking-[1.5px] text-blackCC lg:text-sm lg:leading-snug">
                  {it.desc}
                </p>
              </div>
              <span
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-extrabold text-transparent text-center p-2.5 opacity-0 transition-opacity duration-400 bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [filter:invert(1)] [-webkit-text-stroke:2px_black] inline-block group-hover:opacity-100 lg:text-5xl"
                style={{
                  backgroundImage: `url('${it.img}')`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
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