// src/components/Presentation.tsx
import { useEffect, useRef, useState } from "react";

const WORDS = ["Clínica", "Profesión", "Hotel", "Taller"];

export default function Presentation() {
  const [wordIndex, setWordIndex] = useState(0);
  const [showUnderline, setShowUnderline] = useState(true);
  const wordRef = useRef<HTMLSpanElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  let rafId: number;
  const handleScroll = () => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => {
    window.removeEventListener("scroll", handleScroll);
    if (rafId) cancelAnimationFrame(rafId);
  };
}, []);

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
      el.textContent = next === 0 ? "Negocio" : WORDS[next];
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

return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 lg:px-8 py-20 overflow-hidden bg-gradient-to-br from-grayModern-900 via-purpleCC-900 to-coffeeCC-900 text-white animate-fade-in"
      id="presentation"
      style={{
        backgroundImage: "url(https://zezenta.shop/placeholders/SHARE/coding2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-purpleCC-900/40 to-coffeeCC-700/60" />
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto space-y-6 lg:space-y-0 lg:space-x-12 px-4 lg:px-8">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-4xl space-y-6 lg:space-y-8 w-full lg:w-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-grayModern-200 bg-clip-text text-transparent drop-shadow-2xl overflow-hidden">
            <>Hacemos un sitio<br />web para tu<br />{" "}
              <span className="relative block lg:inline-block min-w-[120px] my-0 lg:my-0">
                <span
                  id="dynamic-word"
                  ref={wordRef}
                  className="inline-block transition-all duration-700 ease-out opacity-100 relative whitespace-nowrap font-extrabold bg-gradient-to-r from-white to-grayModern-200 bg-clip-text text-transparent"
                  style={{}}
                >
                  {wordIndex === 0 ? "Negocio" : WORDS[wordIndex]}
                </span>
                <span
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-purpleCC-500 transform origin-left transition-transform duration-700 ease-out ${showUnderline ? 'scale-x-100' : 'scale-x-0'}`}
                />
              </span>
            </>
          </h2>
          <p className="text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed opacity-90 font-light backdrop-blur-sm bg-white/5 rounded-modern px-6 py-4 border border-white/10">
            Somos un par de estudiantes de informática que se dedican a hacer
            sitios webs para pequeños y medianos negocios, a los mejores precios
          </p>
        </div>
      </div>

           {/* Subtle background icons filling the entire section with parallax */}
           <div
             ref={backgroundRef}
             className="absolute inset-0 pointer-events-none overflow-hidden"
             style={{ willChange: 'transform' }}
           >
             {/* More subtle code symbols across entire section - balanced */}
             <div className="absolute top-1/4 left-10 text-5xl font-mono text-purpleCC-200/30 opacity-30">{`<`}</div>
             <div className="absolute top-1/2 left-16 text-4xl font-mono text-coffeeCC-200/25 opacity-25">{`{`}</div>
             <div className="absolute bottom-1/4 left-24 text-6xl font-mono text-purpleCC-200/20 opacity-20">{`>`}</div>
             <div className="absolute bottom-1/2 left-32 text-5xl font-mono text-coffeeCC-200/15 opacity-15">{`}`}</div>
             
             <div className="absolute top-1/4 right-10 text-5xl font-mono text-purpleCC-200/30 opacity-30">{`>`}</div>
             <div className="absolute top-1/2 right-16 text-4xl font-mono text-coffeeCC-200/25 opacity-25">{`}`}</div>
             <div className="absolute bottom-1/4 right-24 text-6xl font-mono text-purpleCC-200/20 opacity-20">{`<`}</div>
             <div className="absolute bottom-1/2 right-32 text-5xl font-mono text-coffeeCC-200/15 opacity-15">{`{`}</div>
             <div className="absolute top-1/3 right-40 text-4xl font-mono text-purpleCC-200/22 opacity-22">{'()'}</div>
             <div className="absolute bottom-1/3 left-40 text-4xl font-mono text-coffeeCC-200/20 opacity-20">{'[]'}</div>
             <div className="absolute bottom-10 right-10 text-5xl font-mono text-purpleCC-200/25 opacity-25">{`/>`}</div>
             <div className="absolute bottom-1/4 right-1/3 text-4xl font-mono text-coffeeCC-200/20 opacity-20">{`;`}</div>
             <div className="absolute bottom-10 left-10 text-5xl font-mono text-purpleCC-200/25 opacity-25">{`//`}</div>
             <div className="absolute bottom-1/4 left-1/3 text-4xl font-mono text-coffeeCC-200/20 opacity-20">{`*`}</div>
           </div>

         </section>
       );
}