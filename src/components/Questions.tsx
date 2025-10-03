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
              entry.target.classList.add("opacity-100", "translate-y-0");
            }, idx * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    detailsRefs.current.forEach((i) => i && obs.observe(i));
    return () => obs.disconnect();
  }, []);

  const handleToggle = (e: React.MouseEvent<HTMLDetailsElement>) => {
    e.preventDefault();
    const details = e.currentTarget;
    const content = details.querySelector(".faq-content") as HTMLElement;
    const summary = details.querySelector(".faq-summary") as HTMLElement;
    const icon = details.querySelector(".faq-icon") as HTMLElement;

    if (!content || !summary || !icon) return;

    if (details.open) {
      content.style.height = `${content.scrollHeight}px`;
      content.style.opacity = "1";
      setTimeout(() => {
        content.style.height = "0";
        content.style.opacity = "0";
        icon.classList.remove("rotate-180");
      }, 10);
      setTimeout(() => details.open = false, 300);
    } else {
      details.open = true;
      content.style.height = "0";
      content.style.opacity = "0";
      icon.classList.add("rotate-180");
      setTimeout(() => {
        content.style.height = `${content.scrollHeight}px`;
        content.style.opacity = "1";
      }, 10);
    }
  };

  return (
    <section
      className="relative min-h-screen py-20 px-4 lg:px-8 bg-gradient-to-br from-purpleCC-900 via-blackCC to-coffeeCC-900 text-white flex flex-col justify-center items-center overflow-hidden"
      id="questions"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purpleCC-500/10 via-transparent to-coffeeCC-500/10" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purpleCC-500 to-coffeeCC-500" />

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purpleCC-200 to-coffeeCC-200 bg-clip-text text-transparent drop-shadow-2xl animate-fade-in">
          Preguntas Frecuentes
        </h2>
        <p className="text-grayModern-300 max-w-2xl mx-auto text-lg opacity-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Encuentra respuestas rápidas a las dudas más comunes sobre nuestros servicios.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="relative z-10 w-full max-w-4xl mx-auto space-y-4 px-4">
        {QandA.map((item, idx) => (
          <details
            key={idx}
            ref={(el) => {
              detailsRefs.current[idx] = el;
            }}
            className="faq-item bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden shadow-card-modern hover:shadow-glow-purple transition-all duration-500 ease-out hover:-translate-y-1 opacity-0 translate-y-4 cursor-pointer group"
            onClick={handleToggle}
          >
            <summary className="faq-summary list-none p-6 relative flex items-center justify-between font-bold text-white transition-all duration-300 ease-in-out hover:bg-white/20">
              <span className="faq-question text-lg lg:text-xl relative z-10">
                {item.q}
              </span>
              <span className="faq-icon transition-transform duration-300 ml-4 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="faq-content overflow-hidden transition-all duration-300 ease-in-out">
              <p className="faq-answer m-0 p-6 pt-0 text-grayModern-300 text-base leading-relaxed border-t border-white/20 bg-white/5 relative z-10">
                {item.a}
              </p>
            </div>
          </details>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-purpleCC-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-coffeeCC-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }} />
    </section>
  );
}