// src/components/FinalCTA.tsx
export default function FinalCTA() {
  return (
    <section
      className="relative py-20 px-4 lg:px-8 bg-gradient-to-br from-grayModern-900 via-blackCC to-coffeeCC-900 text-white overflow-hidden"
      id="cta"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purpleCC-500/20 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purpleCC-500 to-coffeeCC-500" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purpleCC-200 to-coffeeCC-200 bg-clip-text text-transparent animate-fade-in">
          ¿Listo para automatizar tu próxima entrega?
        </h2>
        <p className="text-lg lg:text-xl text-grayModern-200 leading-relaxed">
          Cuéntanos qué necesitas y te enviamos una cotización el mismo día. Trabajamos por WhatsApp, manteniendo decisiones rápidas y soporte directo.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://wa.me/593999405155?text=Hola%20Codicoffee,%20quiero%20una%20cotizaci%C3%B3n%20para%20mi%20proyecto."
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-purpleCC-500 to-coffeeCC-500 text-white font-semibold text-lg shadow-glow-purple hover:shadow-card-hover transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribir por WhatsApp
          </a>
          <a
            href="mailto:jose@codicoffee.com"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 text-white/90 font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-transform duration-300 hover:-translate-y-1"
          >
            Enviar correo
          </a>
        </div>
      </div>
    </section>
  );
}
