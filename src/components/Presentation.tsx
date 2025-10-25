// src/components/Presentation.tsx
import { useEffect, useRef, useState } from "react";

const WORDS = [
  "sitios web",
  "sistemas internos",
  "automatizaciones",
  "inventarios ágiles",
];

const HIGHLIGHTS = [
  {
    id: "delivery",
    label: "Entregas en 7-10 días",
    icon: "⚡",
  },
  {
    id: "integrations",
    label: "Integraciones con WhatsApp y Sheets",
    icon: "🔗",
  },
  {
    id: "transparency",
    label: "50% anticipo, 50% al entregar",
    icon: "🤝",
  },
];

export default function Presentation() {
  const [wordIndex, setWordIndex] = useState(0);
  const [showUnderline, setShowUnderline] = useState(true);
  const wordRef = useRef<HTMLSpanElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Word animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      const el = wordRef.current;
      if (!el) return;

      el.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
      el.style.transform = "translateY(-10px) scale(0.95)";
      el.style.opacity = "0";
      el.style.filter = "blur(4px)";
      setShowUnderline(false);

      setTimeout(() => {
        const next = (wordIndex + 1) % WORDS.length;
        setWordIndex(next);
        el.textContent = WORDS[next];
        el.style.transition = "none";
        el.style.transform = "translateY(10px) scale(1.05)";
        el.style.opacity = "1";
        el.style.filter = "none";

        setTimeout(() => {
          el.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
          el.style.transform = "translateY(0) scale(1)";
          el.style.filter = "none";
          setShowUnderline(true);
        }, 50);
      }, 600);
    }, 4000);
    return () => clearInterval(interval);
  }, [wordIndex]);

  // Smoothed parallax effect for all devices
  useEffect(() => {
    const parallaxContainer = parallaxRef.current;
    if (!parallaxContainer) return;

    const layers = parallaxContainer.querySelectorAll<HTMLElement>("[data-speed]");
    const positions = Array.from(layers).map(() => ({ current: 0, target: 0 }));

    const handleScroll = () => {
      const scrollY = window.scrollY;
      layers.forEach((layer, i) => {
        const speed = parseFloat(layer.dataset.speed || "0");
        let targetPosition = scrollY * speed;

        // Clamp the background image's parallax to prevent gaps on fast scrolls.
        // The background image is the first layer (i === 0).
        if (i === 0) {
          const maxMovement = 150; // Max pixels the background can move
          targetPosition = Math.min(targetPosition, maxMovement);
        }

        positions[i].target = targetPosition;
      });
    };

    let animationFrameId: number;
    const update = () => {
      positions.forEach((pos, i) => {
        const layer = layers[i];
        const diff = pos.target - pos.current;
        const delta = diff * 0.07; // Easing factor for smoothness

        pos.current += delta;

        // Apply transform
        if (layer) {
          layer.style.transform = `translateY(${pos.current}px)`;
        }
      });
      animationFrameId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 lg:px-8 py-20 overflow-hidden bg-gradient-to-br from-grayModern-900 via-purpleCC-900 to-coffeeCC-900 text-white animate-fade-in"
      id="presentation"
    >
      {/* Container for all parallax elements */}
      <div
        ref={parallaxRef}
        className="absolute inset-0"
      >
        {/* Background Image Layer */}
        <div
          data-speed="0.3"
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://zezenta.shop/placeholders/SHARE/coding2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            willChange: 'transform',
          }}
        />

        {/* Icons Layer */}
        <div className="absolute inset-0 pointer-events-none">
          <div data-speed="0.4" style={{ willChange: 'transform' }} className="absolute top-1/4 left-10 text-5xl font-mono text-purpleCC-200/30 opacity-30">{`<`}</div>
          <div data-speed="0.5" style={{ willChange: 'transform' }} className="absolute top-1/2 left-16 text-4xl font-mono text-coffeeCC-200/25 opacity-25">{`{`}</div>
          <div data-speed="0.2" style={{ willChange: 'transform' }} className="absolute bottom-1/4 left-24 text-6xl font-mono text-purpleCC-200/20 opacity-20">{`>`}</div>
          <div data-speed="0.6" style={{ willChange: 'transform' }} className="absolute bottom-1/2 left-32 text-5xl font-mono text-coffeeCC-200/15 opacity-15">{`}`}</div>
          
          <div data-speed="0.45" style={{ willChange: 'transform' }} className="absolute top-1/4 right-10 text-5xl font-mono text-purpleCC-200/30 opacity-30">{`>`}</div>
          <div data-speed="0.55" style={{ willChange: 'transform' }} className="absolute top-1/2 right-16 text-4xl font-mono text-coffeeCC-200/25 opacity-25">{`}`}</div>
          <div data-speed="0.25" style={{ willChange: 'transform' }} className="absolute bottom-1/4 right-24 text-6xl font-mono text-purpleCC-200/20 opacity-20">{`<`}</div>
          <div data-speed="0.65" style={{ willChange: 'transform' }} className="absolute bottom-1/2 right-32 text-5xl font-mono text-coffeeCC-200/15 opacity-15">{`{`}</div>
          
          {/* Icons hidden on mobile to prevent overlap */}
          <div data-speed="0.3" style={{ willChange: 'transform' }} className="absolute top-1/3 right-40 text-4xl font-mono text-purpleCC-200/10 opacity-10 hidden lg:block">{'()'}</div>
          <div data-speed="0.4" style={{ willChange: 'transform' }} className="absolute bottom-1/3 left-40 text-4xl font-mono text-coffeeCC-200/10 opacity-10 hidden lg:block">{'[]'}</div>
          <div data-speed="0.2" style={{ willChange: 'transform' }} className="absolute bottom-1/4 right-1/3 text-4xl font-mono text-coffeeCC-200/10 opacity-10 hidden lg:block">{`;`}</div>
          <div data-speed="0.35" style={{ willChange: 'transform' }} className="absolute bottom-1/4 left-1/3 text-4xl font-mono text-coffeeCC-200/10 opacity-10 hidden lg:block">{`*`}</div>

          <div data-speed="0.7" style={{ willChange: 'transform' }} className="absolute bottom-10 right-10 text-5xl font-mono text-purpleCC-200/25 opacity-25">{`/>`}</div>
          <div data-speed="0.75" style={{ willChange: 'transform' }} className="absolute bottom-10 left-10 text-5xl font-mono text-purpleCC-200/25 opacity-25">{`//`}</div>
        </div>
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-purpleCC-900/40 to-coffeeCC-700/60" />
      
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto space-y-6 lg:space-y-0 lg:space-x-12 px-4 lg:px-8">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-4xl space-y-6 lg:space-y-8 w-full lg:w-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-grayModern-200 bg-clip-text text-transparent drop-shadow-2xl overflow-hidden">
            <>Ahorramos tiempo con<br />software simple para {" "}
              <span className="relative inline-block">
                <span
                  id="dynamic-word"
                  ref={wordRef}
                  className="inline-block transition-all duration-700 ease-out opacity-100 relative whitespace-nowrap font-extrabold bg-gradient-to-r from-white to-grayModern-200 bg-clip-text text-transparent"
                >
                  {WORDS[wordIndex]}
                </span>
                <span
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-purpleCC-500 transform origin-left transition-transform duration-700 ease-out ${showUnderline ? 'scale-x-100' : 'scale-x-0'}`}
                />
              </span>
            </>
          </h2>
          <p className="text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed opacity-90 font-light backdrop-blur-sm bg-white/5 rounded-modern px-6 py-4 border border-white/10">
            Construimos sitios web que convierten, sistemas internos ligeros y automatizaciones
            conectadas a WhatsApp o Google Sheets. Entregamos rápido, con resultados medibles y precios transparentes.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 bg-white/10 border border-white/10 rounded-modern px-4 py-3 backdrop-blur-sm"
              >
                <span className="text-2xl" aria-hidden>{item.icon}</span>
                <span className="text-sm lg:text-base text-grayModern-100">{item.label}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full">
            <a
              href="https://wa.me/593999405155?text=Hola%20Codicoffee,%20quisiera%20agendar%20una%20llamada%20de%2010%20minutos."
              className="inline-flex items-center justify-center px-6 py-4 rounded-full bg-gradient-to-r from-purpleCC-500 to-coffeeCC-500 text-white font-semibold text-lg shadow-glow-purple hover:shadow-card-hover transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablemos 10 minutos
            </a>
            <button
              type="button"
              className="inline-flex items-center justify-center px-6 py-4 rounded-full border border-white/30 text-white/90 font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-transform duration-300 hover:-translate-y-1"
              onClick={() => {
                const prices = document.getElementById("precios");
                if (!prices) return;
                const offset = 80;
                window.scrollTo({ top: prices.offsetTop - offset, behavior: "smooth" });
              }}
            >
              Ver paquetes y add-ons
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
