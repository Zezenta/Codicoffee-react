// src/components/Prices.tsx
export default function Prices() {
  return (
    <section
      className="flex flex-col p-5 max-w-[750px] mx-auto border-b-[0.5px] border-b-[#999] lg:items-center lg:justify-center lg:mt-5 lg:w-4/5 lg:max-w-[1080px]"
      id="precios"
    >
      <h2 className="m-0 text-[clamp(2rem,5vw,2.5rem)] text-center font-bold">
        Precios
      </h2>
      <div className="flex flex-col lg:mt-4 lg:flex-row lg:gap-5 lg:w-full">
        <div className="lg:w-1/2">
          <p className="text-lg text-center">
            Gracias a nuestra estructura flexible y a que somos un equipo de
            estudiantes apasionados por el desarrollo web, podemos ofrecer los
            mejores precios del país.
          </p>
          <ul className="list-disc pl-5">
            <li className="mt-2.5 text-lg">
              <span>
                💰 Sin tarifas fijas, ni costos inflados.{" "}
                <strong className="text-purpleCC">
                  Solo pagas por lo que realmente necesitas.
                </strong>
              </span>
            </li>
            <li className="mt-2.5 text-lg">
              <span>
                <strong>📄 Sin límite de páginas.</strong> No te cobramos por
                cantidad, sino por funcionalidad y calidad.
              </span>
            </li>
            <li className="mt-2.5 text-lg">
              <span>
                🚀 Webs profesionales desde solo $100. Otros pueden cobrarte
                $200, $400 o incluso $800 por lo mismo. Nosotros te ofrecemos{" "}
                <strong className="text-purpleCC">
                  la mejor opción, al mejor precio.
                </strong>
              </span>
            </li>
          </ul>
        </div>

        <aside className="flex justify-center flex-col items-center gap-3 mt-1 lg:flex-row lg:w-1/2">
          <article className="p-4 text-whiteCC rounded-md shadow-[0_0_5px_#0f0e0e] min-w-[330px] flex flex-col justify-around bg-blackCC lg:min-w-[50%] lg:max-h-[255px] lg:min-h-[255px] lg:justify-center">
            <h2 className="m-0 text-center text-xl font-bold">
              Otros Proveedores
            </h2>
            <ul className="p-0 list-none text-center text-sm">
              <li className="mb-2.5">Precios inflados</li>
              <li className="mb-2.5">Costo extra por funciones innecesarias</li>
              <li className="mb-2.5">Tarifas fijas exageradas</li>
            </ul>
            <span className="text-center text-red-500 text-2xl">
              $200 $400 $800
            </span>
          </article>
          <article className="p-4 text-whiteCC rounded-md shadow-[0_0_5px_#0f0e0e] min-w-[330px] flex flex-col justify-around bg-purpleCC lg:min-w-[50%] lg:max-h-[255px] lg:min-h-[255px] lg:justify-center">
            <h2 className="m-0 text-center text-2xl font-bold">Nosotros</h2>
            <ul className="p-0 list-none text-center text-sm">
              <li className="mb-2.5">
                Pagas por lo que necesitas, ni un dólar más
              </li>
              <li className="mb-2.5">Ética de trabajo transparente</li>
              <li className="mb-2.5">Planes flexibles</li>
            </ul>
            <span className="text-center text-green-500 text-5xl">$100</span>
          </article>
        </aside>
      </div>

      <p className="text-lg mt-5 text-center font-bold">
        Si buscas una página web bien hecha, sin pagar de más, somos tu mejor
        alternativa. ¡Contáctanos y cotiza gratis!
      </p>

      <button
        className="min-w-[130px] min-h-[50px] rounded-md border-none outline-none bg-purpleCC text-whiteCC shadow-[0px_0px_5px_#666] text-base cursor-pointer font-light transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_0px_3px_var(--white)] self-center px-2.5 font-inter font-bold mt-4"
        onClick={() => {
          const el = document.getElementById("questions");
          if (!el) return;
          const offset = 70;
          window.scrollTo({
            top: el.offsetTop - offset,
            behavior: "smooth",
          });
        }}
      >
        Aprende más sobre los precios
      </button>
    </section>
  );
}