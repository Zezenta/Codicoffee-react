// src/components/Questions.tsx
import { useEffect } from "react";

export default function Questions() {
  useEffect(() => {
    const items =
      document.querySelectorAll<HTMLDetailsElement>(".questions__item");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, idx * 300);
          }
        });
      },
      { threshold: 0.5 }
    );

    items.forEach((i) => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.querySelectorAll(".questions__item").forEach((details) => {
      const det = details as HTMLDetailsElement;
      const content = det.querySelector(
        ".questions__answer"
      ) as HTMLElement | null;
      const triangle = det.querySelector(
        ".questions__triangle"
      ) as HTMLElement | null;

      det.addEventListener("click", (e) => {
        e.preventDefault();
        if (!content || !triangle) return;

        if (det.hasAttribute("open")) {
          content.style.height = `${content.scrollHeight}px`;
          setTimeout(() => {
            content.style.height = "0";
            content.style.opacity = "0";
            content.style.marginBottom = "0";
          }, 10);
          triangle.classList.remove("active");
          setTimeout(() => det.removeAttribute("open"), 300);
        } else {
          det.setAttribute("open", "true");
          content.style.height = "0";
          triangle.classList.add("active");
          setTimeout(() => {
            content.style.height = `${content.scrollHeight}px`;
            content.style.opacity = "1";
            content.style.marginBottom = "15px";
          }, 10);
        }
      });
    });
  }, []);

  return (
    <section className="section questions" id="questions">
      <h2 className="questions__title">Preguntas Frecuentes</h2>
      <div className="questions__item-container">
        <details className="questions__item">
          <summary className="questions__question">
            <span className="questions__triangle"></span>¿Hay algún cobro
            mensual por mantener activa la web?
          </summary>
          <p className="questions__answer">
            Sí. Este precio es de $5 para páginas web normales, cuya función es
            principalmente informativa. Si la web tiene funciones y sistemas más
            avanzados y complejos, este precio puede aumentar.
          </p>
        </details>

        <details className="questions__item">
          <summary className="questions__question">
            <span className="questions__triangle"></span>¿Los precios incluyen
            impuestos? ¿Facturan?
          </summary>
          <p className="questions__answer">
            Como somos una microempresa informal, no cobramos impuestos de
            ningún tipo. Todo pago se hace por medio de transferencias bancarias
            normales.
          </p>
        </details>

        <details className="questions__item">
          <summary className="questions__question">
            <span className="questions__triangle"></span>¿La web la tengo que
            diseñar yo o la diseñan ustedes?
          </summary>
          <p className="questions__answer">
            ¡Como prefieras! Si ya tienes una idea de cómo quieres que se vea tu
            sitio web, la podemos implementar por ti. Si no quieres preocuparte
            por esto, nosotros nos encargamos de todo, pidiéndote opiniones
            durante el diseño. Puedes estar tan involucrado en el diseño como
            quieras.
          </p>
        </details>

        <details className="questions__item">
          <summary className="questions__question">
            <span className="questions__triangle"></span>¿Cuánto tiempo demoran
            en construir la web?
          </summary>
          <p className="questions__answer">
            Depende de cuánto contenido tengamos que construir. Para una página
            web promedio, tardamos alrededor de 2 semanas. Este tiempo puede
            variar dependiendo de la cantidad de trabajo y nuestras
            responsabilidades personales (¡somos universitarios después de
            todo!).
          </p>
        </details>

        <details className="questions__item">
          <summary className="questions__question">
            <span className="questions__triangle"></span>¿Tengo que pagar por
            adelantado?
          </summary>
          <p className="questions__answer">
            Pedimos la mitad del pago antes del desarrollo y la otra mitad
            cuando hayamos terminado el trabajo.
          </p>
        </details>

        <details className="questions__item">
          <summary className="questions__question">
            <span className="questions__triangle"></span>Si quiero cambiar de
            proveedor o encargarme yo mismo del sitio web, ¿puedo hacerlo?
          </summary>
          <p className="questions__answer">
            Sí, si decides cambiar de proveedor o encargarte tú mismo del
            mantenimiento, te enviaremos todo el código de tu sitio web para que
            puedas gestionarlo sin problemas.
          </p>
        </details>

        <details className="questions__item">
          <summary className="questions__question">
            <span className="questions__triangle"></span>¿Desarrollan versiones
            tanto para computadora como para celulares?
          </summary>
          <p className="questions__answer">
            Sí, todas las webs que hacemos son adaptables tanto para
            computadoras como para celulares. No hay costo extra por esto.
          </p>
        </details>
      </div>
    </section>
  );
}