// src/components/Prices.tsx
export default function Prices() {
  return (
    <section className="precios section" id="precios">
      <h2>Precios</h2>
      <div className="precios__container">
        <div className="precios__container__text">
          <p>
            Gracias a nuestra estructura flexible y a que somos un equipo de
            estudiantes apasionados por el desarrollo web, podemos ofrecer los
            mejores precios del país.
          </p>
          <ul>
            <li>
              💰 Sin tarifas fijas, ni costos inflados.{" "}
              <strong>Solo pagas por lo que realmente necesitas.</strong>
            </li>
            <li>
              <strong>📄 Sin límite de páginas.</strong> No te cobramos por
              cantidad, sino por funcionalidad y calidad.
            </li>
            <li>
              🚀 Webs profesionales desde solo $100. Otros pueden cobrarte
              $200, $400 o incluso $800 por lo mismo. Nosotros te ofrecemos{" "}
              <strong>la mejor opción, al mejor precio.</strong>
            </li>
          </ul>
        </div>

        <aside className="precios__container__graphics">
          <article className="box box--otros">
            <h2>Otros Proveedores</h2>
            <ul>
              <li>Precios inflados</li>
              <li>Costo extra por funciones innecesarias</li>
              <li>Tarifas fijas exageradas</li>
            </ul>
            <span>$200 $400 $800</span>
          </article>
          <article className="box box--nosotros">
            <h2>Nosotros</h2>
            <ul>
              <li>Pagas por lo que necesitas, ni un dólar más</li>
              <li>Ética de trabajo transparente</li>
              <li>Planes flexibles</li>
            </ul>
            <span>$100</span>
          </article>
        </aside>
      </div>

      <p id="precios__footer__text">
        Si buscas una página web bien hecha, sin pagar de más, somos tu mejor
        alternativa. ¡Contáctanos y cotiza gratis!
      </p>

      <button
        className="portfolio__btn"
        onClick={() => {
          const el = document.getElementById("questions");
          if (!el) return;
          const offset = 70;
          window.scrollTo({
            top: el.offsetTop - offset,
            behavior: "smooth"
          });
        }}
      >
        Aprende más sobre los precios
      </button>
    </section>
  );
}