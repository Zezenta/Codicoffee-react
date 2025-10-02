// src/components/Questions.tsx
import { useEffect, useRef } from "react";

const QandA = [
  {
    q: "¿Hay algún cobro mensual por mantener activa la web?",
    a: "Sí. Este precio es de $5 para páginas web normales, cuya función es principalmente informativa. Si la web tiene funciones y sistemas más avanzados y complejos, este precio puede aumentar.",
  },
  {
    q: "¿Los precios incluyen impuestos? ¿Facturan?",
    a: "Como somos una microempresa informal, no cobramos impuestos de ningún tipo. Todo pago se hace por medio de transferencias bancarias normales.",
  },
  {
    q: "¿La web la tengo que diseñar yo o la diseñan ustedes?",
    a: "¡Como prefieras! Si ya tienes una idea de cómo quieres que se vea tu sitio web, la podemos implementar por ti. Si no quieres preocuparte por esto, nosotros nos encargamos de todo, pidiéndote opiniones durante el diseño. Puedes estar tan involucrado en el diseño como quieras.",
  },
  {
    q: "¿Cuánto tiempo demoran en construir la web?",
    a: "Depende de cuánto contenido tengamos que construir. Para una página web promedio, tardamos alrededor de 2 semanas. Este tiempo puede variar dependiendo de la cantidad de trabajo y nuestras responsabilidades personales (¡somos universitarios después de todo!).",
  },
  {
    q: "¿Tengo que pagar por adelantado?",
    a: "Pedimos la mitad del pago antes del desarrollo y la otra mitad cuando hayamos terminado el trabajo.",
  },
  {
    q: "Si quiero cambiar de proveedor o encargarme yo mismo del sitio web, ¿puedo hacerlo?",
    a: "Sí, si decides cambiar de proveedor o encargarte tú mismo del mantenimiento, te enviaremos todo el código de tu sitio web para que puedas gestionarlo sin problemas.",
  },
  {
    q: "¿Desarrollan versiones tanto para computadora como para celulares?",
    a: "Sí, todas las webs que hacemos son adaptables tanto para computadoras como para celulares. No hay costo extra por esto.",
  },
];

export default function Questions() {
  const detailsRefs = useRef<(HTMLDetailsElement | null)[]>([]);

  useEffect(() => {
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

    detailsRefs.current.forEach((i) => i && obs.observe(i));
    return () => obs.disconnect();
  }, []);

  const handleToggle = (e: React.MouseEvent<HTMLDetailsElement>) => {
    e.preventDefault();
    const details = e.currentTarget;
    const content = details.querySelector("p");
    const triangle = details.querySelector(".triangle");

    if (!content || !triangle) return;

    if (details.hasAttribute("open")) {
      content.style.height = `${content.scrollHeight}px`;
      setTimeout(() => {
        content.style.height = "0";
        content.style.opacity = "0";
        content.style.marginBottom = "0";
      }, 10);
      triangle.classList.remove("rotate-45");
      setTimeout(() => details.removeAttribute("open"), 300);
    } else {
      details.setAttribute("open", "true");
      content.style.height = "0";
      triangle.classList.add("rotate-45");
      setTimeout(() => {
        content.style.height = `${content.scrollHeight}px`;
        content.style.opacity = "1";
        content.style.marginBottom = "15px";
      }, 10);
    }
  };

  return (
    <section
      className="[background:linear-gradient(0deg,rgba(131,10,187,1)_0%,rgba(75,25,99,1)_30%,rgba(34,35,36,1)_80%)] p-10 min-h-[90vh] flex flex-col justify-center items-center lg:min-h-0"
      id="questions"
    >
      <h2 className="text-[clamp(2rem,5vw,2.5rem)] text-center text-whiteCC mb-8 font-bold">
        Preguntas Frecuentes
      </h2>
      <div className="flex flex-col gap-4 w-full max-w-[1100px]">
        {QandA.map((item, idx) => (
          <details
            key={idx}
            ref={(el) => {
              detailsRefs.current[idx] = el;
            }}
            className="questions__item bg-whiteCC rounded-md cursor-pointer opacity-0 translate-y-5 hover:bg-[#d5d5d5]"
            onClick={handleToggle}
          >
            <summary className="font-bold transition-all duration-300 ease-in-out select-none list-none p-2">
              <span className="triangle inline-block w-2.5 h-2.5 border-solid border-black border-r-2 border-b-2 transform -rotate-45 transition-transform duration-300 ease-in-out mr-2.5"></span>
              {item.q}
            </summary>
            <p className="m-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out select-none px-2 pb-2">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}