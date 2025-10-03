// src/components/Presentation.tsx
import { useEffect, useMemo, useRef, useState } from "react";

const WORDS = ["Clínica", "Profesión", "Hotel", "Taller"];
const CELL_IMAGES = [
  "https://zezenta.shop/placeholders/SHARE/clinicaphone.webp",
  "https://zezenta.shop/placeholders/SHARE/abogadosphone.webp",
  "https://zezenta.shop/placeholders/SHARE/hotelphone.webp",
  "https://zezenta.shop/placeholders/SHARE/automotrizphone.webp",
];
const LAPTOP_IMAGES = [
  "https://zezenta.shop/placeholders/SHARE/clinicalaptop.webp",
  "https://zezenta.shop/placeholders/SHARE/abogadoslaptop.webp",
  "https://zezenta.shop/placeholders/SHARE/hotellaptop.webp",
  "https://zezenta.shop/placeholders/SHARE/automotrizlaptop.webp",
];

export default function Presentation() {
  const [isMobile, setIsMobile] = useState<boolean>(
    () => window.innerWidth < 768
  );
  const [wordIndex, setWordIndex] = useState(0);
  const [showUnderline, setShowUnderline] = useState(true);
  const wordRef = useRef<HTMLSpanElement | null>(null);

  const [cellIndex, setCellIndex] = useState(0);
  const [laptopIndex, setLaptopIndex] = useState(0);
  const cellImgRef = useRef<SVGImageElement>(null);
  const laptopImgRef = useRef<SVGImageElement>(null);

  useMemo(() => {
    const cell = CELL_IMAGES.map((src) => {
      const i = new Image();
      i.src = src;
      return i;
    });
    const lap = LAPTOP_IMAGES.map((src) => {
      const i = new Image();
      i.src = src;
      return i;
    });
    return { cell, lap };
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
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

  useEffect(() => {
    const slideImg = (
      ref: React.RefObject<SVGImageElement | null>,
      nextIdx: number,
      arr: string[]
    ) => {
      const el = ref.current;
      if (!el) return;

      el.style.transition = "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)";
      el.style.transform = "scale(0.95) rotateY(-10deg)";
      el.style.opacity = "0";
      el.style.filter = "blur(10px)";

      setTimeout(() => {
        const nextSrc = arr[nextIdx];
        el.setAttribute("href", nextSrc);
        el.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          nextSrc
        );

        el.style.transition = "none";
        el.style.transform = "scale(1.05) rotateY(10deg)";
        el.style.opacity = "0";
        el.style.filter = "blur(0px)";

        setTimeout(() => {
          el.style.transition = "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)";
          el.style.transform = "scale(1) rotateY(0deg)";
          el.style.opacity = "1";
          el.style.filter = "blur(0px)";
        }, 50);
      }, 700);
    };

    const cellInterval = setInterval(() => {
      const next = (cellIndex + 1) % CELL_IMAGES.length;
      slideImg(cellImgRef, next, CELL_IMAGES);
      setCellIndex(next);
    }, 4000);

    const laptopInterval = setInterval(() => {
      const next = (laptopIndex + 1) % LAPTOP_IMAGES.length;
      slideImg(laptopImgRef, next, LAPTOP_IMAGES);
      setLaptopIndex(next);
    }, 4000);

    return () => {
      clearInterval(cellInterval);
      clearInterval(laptopInterval);
    };
  }, [cellIndex, laptopIndex]);


  return (
    <section
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
      
      <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left max-w-4xl mx-auto space-y-6 lg:space-y-8 w-full">
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

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12 mt-12 lg:mt-0 w-full lg:w-auto max-w-4xl mx-auto">
        {/* Phone */}
        <div className="relative flex justify-center animate-slide-up">
          <svg
            id="presentation__cellphoneSVG"
            fill="#000000"
            width="160px"
            height="280px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl hover:drop-shadow-[0_0_20px_rgba(131,10,187,0.3)] transition-all duration-500 hover:scale-105"
          >
            <g id="cellphone-images">
              <image
                id="current-cellphone-image"
                ref={cellImgRef}
                href={CELL_IMAGES[0]}
                xlinkHref={CELL_IMAGES[0]}
                x="2.15"
                y="3"
                width="19.8"
                height="18"
                className="transition-all duration-700 ease-out rounded-modern"
                style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }}
              />
            </g>
            <path
              d="M6,4.5 C6,3.11928813 7.11928813,2 8.5,2 L15.5113578,2 C16.8920696,2 18.0113578,3.11928813 18.0113578,4.5 L18.0113578,19.5 C18.0113578,20.8807119 16.8920696,22 15.5113578,22 L8.5,22 C7.11928813,22 6,20.8807119 6,19.5 L6,4.5 Z M8.5,3 C7.67157288,3 7,3.67157288 7,4.5 L7,19.5 C7,20.3284271 7.67157288,21 8.5,21 L15.5113578,21 C16.3397849,21 17.0113578,20.3284271 17.0113578,19.5 L17.0113578,4.5 C17.0113578,3.67157288 16.3397849,3 15.5113578,3 Z"
              stroke="black"
              strokeWidth="0.25"
              fill="none"
              className="drop-shadow-lg"
            />
          </svg>
        </div>

        {/* Laptop */}
        <div className="relative flex justify-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <svg
            id="presentation__laptopSVG"
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            width="280px"
            height="200px"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
            className="drop-shadow-2xl hover:drop-shadow-[0_0_20px_rgba(131,10,187,0.3)] transition-all duration-500 hover:scale-105"
          >
            <g id="laptop-images">
              <image
                id="current-laptop-image"
                ref={laptopImgRef}
                href={LAPTOP_IMAGES[0]}
                xlinkHref={LAPTOP_IMAGES[0]}
                x="70"
                y="50"
                width="375"
                height="375"
                className="transition-all duration-700 ease-out rounded-modern"
                style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }}
              />
            </g>
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M659 3966 c-74 -51 -70 37 -67 -1230 3 -1127 3 -1135 24 -1163 11 -15 40 -38 64 -50 l44 -23 1836 0 1836 0 44 22 c24 13 53 36 64 51 21 28 21 36 24 1163 3 1267 7 1179 -67 1230 l-36 24 -1865 0 -1865 0 -36 -24z m1935 -22 c19 -18 21 -7 34 -16z m1737 -153 l29 -29 0 -1010 0 -1010 -26 -31 -26 -31 -1748 0 -1748 0 -26 31 -26 31 0 1010 0 1010 29 29 29 29 1742 0 1742 0 29 -29z"
              />
              <path
                d="M292 1393 c-86 -42 -102 -161 -32 -228 l31 -30 2269 0 2269 0 31 30 c71 68 54 187 -33 229 -32 14 -106 16 -746 16 -692 0 -711 -1 -700 -19 7 -10 9 -26 6 -35 -6 -15 -77 -16 -827 -16 -750 0 -821 1 -827 16 -3 9 -1 25 6 35 11 18 -8 19 -701 19 -641 0 -716 -2 -746 -17z"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#830abb]/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#8B4513]/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: "2s" }} />
    </section>
  );
}