// src/components/Process.tsx
import { useEffect } from "react";

const STEPS = [
  {
    id: "step-1",
    title: "1. Llamada de 10 minutos",
    description:
      "Agendamos por WhatsApp para entender el objetivo, alcances y deadlines. Salimos con una lista clara de entregables.",
  },
  {
    id: "step-2",
    title: "2. Anticipo y materiales",
    description:
      "Recibimos el 50% de anticipo, logo, textos e imágenes. Si necesitas ayuda con el contenido, te guiamos con plantillas rápidas.",
  },
  {
    id: "step-3",
    title: "3. Entrega en 3–7 días",
    description:
      "Diseñamos, desarrollamos y mostramos avances por etapas. Incluimos 1–2 rondas de ajustes para dejarlo fino.",
  },
  {
    id: "step-4",
    title: "4. Publicación y soporte",
    description:
      "Publicamos en tu dominio o en el nuestro, capacitamos al equipo y quedamos disponibles para soporte continuo.",
  },
];

export default function Process() {
  useEffect(() => {
    const steps = document.querySelectorAll(".process-step");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100", "translate-y-0");
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative py-20 px-4 lg:px-8 bg-gradient-to-br from-grayModern-900 via-purpleCC-900 to-coffeeCC-900 text-white overflow-hidden"
      id="process"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purpleCC-500/10 via-transparent to-coffeeCC-500/10" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purpleCC-500 to-coffeeCC-500" />

      <div className="relative z-10 max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purpleCC-200 to-coffeeCC-200 bg-clip-text text-transparent animate-fade-in">
          Nuestro proceso
        </h2>
        <p
          className="text-grayModern-300 max-w-3xl mx-auto text-lg leading-relaxed opacity-0 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Trabajamos con entregas cortas, comunicación directa y documentación mínima para que avances sin fricción.
        </p>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {STEPS.map((step, index) => (
          <article
            key={step.id}
            className="process-step relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-card-modern transition-all duration-500 ease-out opacity-0 translate-y-8 hover:-translate-y-2 hover:shadow-glow-purple"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purpleCC-500/5 to-coffeeCC-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            <div className="relative z-10 flex flex-col gap-3 text-left">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-purpleCC-200/80">
                Paso {index + 1}
              </span>
              <h3 className="text-2xl font-bold text-white">{step.title}</h3>
              <p className="text-grayModern-200 text-base leading-relaxed">{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

