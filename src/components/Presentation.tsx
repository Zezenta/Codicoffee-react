// src/components/Presentation.tsx
import { useEffect, useMemo, useRef, useState } from "react";

const WORDS = ["Clínica", "Profesión", "Hotel", "Taller"];
const CELL_IMAGES = [
  "https://zezenta.shop/placeholders/SHARE/clinicaphone.webp",
  "https://zezenta.shop/placeholders/SHARE/abogadosphone.webp",
  "https://zezenta.shop/placeholders/SHARE/hotelphone.webp",
  "https://zezenta.shop/placeholders/SHARE/automotrizphone.webp"
];
const LAPTOP_IMAGES = [
  "https://zezenta.shop/placeholders/SHARE/clinicalaptop.webp",
  "https://zezenta.shop/placeholders/SHARE/abogadoslaptop.webp",
  "https://zezenta.shop/placeholders/SHARE/hotellaptop.webp",
  "https://zezenta.shop/placeholders/SHARE/automotrizlaptop.webp"
];

export default function Presentation() {
  const [isMobile, setIsMobile] = useState<boolean>(
    () => window.innerWidth < 768
  );
  const [wordIndex, setWordIndex] = useState(0);
  const wordRef = useRef<HTMLSpanElement | null>(null);

  const [cellIndex, setCellIndex] = useState(0);
  const [laptopIndex, setLaptopIndex] = useState(0);
  const cellImgRef = useRef<SVGImageElement | null>(null);
  const laptopImgRef = useRef<SVGImageElement | null>(null);

  const preloadImgs = useMemo(() => {
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
      // animar salida
      const el = wordRef.current;
      if (!el) return;

      el.style.transition = "transform 0.5s ease-in-out, opacity 0.5s";
      el.style.transform = "translateX(-50%)";
      el.style.opacity = "0";

      setTimeout(() => {
        const next = (wordIndex + 1) % WORDS.length;
        setWordIndex(next);
        el.style.transition = "none";
        el.style.transform = "translateX(50%)";

        setTimeout(() => {
          el.style.transition = "transform 0.5s ease-in-out, opacity 0.5s";
          el.style.transform = "translateX(0)";
          el.style.opacity = "1";
        }, 50);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [wordIndex]);

  // Slide anim para imágenes de SVG
  useEffect(() => {
    const slideImg = (
      ref: React.RefObject<SVGImageElement>,
      nextIdx: number,
      arr: string[]
    ) => {
      const el = ref.current;
      if (!el) return;

      el.style.transition = "transform 0.5s ease-in-out, opacity 0.5s";
      el.style.transform = "translateX(-50%)";
      el.style.opacity = "0";

      setTimeout(() => {
        const nextSrc = arr[nextIdx];
        // Intentar setAttribute para href y xlink:href para compatibilidad
        el.setAttribute("href", nextSrc);
        el.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          nextSrc
        );

        el.style.transition = "none";
        el.style.transform = "translateX(50%)";

        setTimeout(() => {
          el.style.transition = "transform 0.5s ease-in-out, opacity 0.5s";
          el.style.transform = "translateX(0)";
          el.style.opacity = "1";
        }, 50);
      }, 500);
    };

    const cellInterval = setInterval(() => {
      const next = (cellIndex + 1) % CELL_IMAGES.length;
      slideImg(cellImgRef, next, CELL_IMAGES);
      setCellIndex(next);
    }, 3000);

    const laptopInterval = setInterval(() => {
      const next = (laptopIndex + 1) % LAPTOP_IMAGES.length;
      slideImg(laptopImgRef, next, LAPTOP_IMAGES);
      setLaptopIndex(next);
    }, 3000);

    return () => {
      clearInterval(cellInterval);
      clearInterval(laptopInterval);
    };
  }, [cellIndex, laptopIndex]);

  const brush = (
    <span className="TextShape-node">
      <svg viewBox="0 0 300 60" width="100%" height="100%">
        <path
          // key fuerza re-montaje para que la animación CSS se reproduzca
          key={wordIndex}
          id="brush-stroke"
          d="M 0,56.43 c 31.625,-1.5675000000000026 63.25,-4.845000000000006 126.5,-6.269999999999996 c 63.25,-1.4249999999999972 96.14000000000001,7.105427357601002e-15 126.5,0.5700000000000003 c 6.072000000000003,0.11399999999999721 -4.807000000000016,1.6244999999999976 -5.060000000000002,1.7100000000000009"
        ></path>
      </svg>
    </span>
  );

  return (
    <section className="presentation section" id="presentation">
      <div className="presentation__text">
        <h2 id="presentationtext">
          {isMobile ? (
            <>
              Hacemos un{" "}
              <span style={{ display: "block" }}>
                sitio web{" "}
                <span style={{ display: "block" }}>
                  para tu{" "}
                  <span style={{ display: "block" }}>
                    <span style={{ display: "block" }}>
                      <span className="presentation__text__container">
                        <span id="dynamic-word" ref={wordRef}>
                          {wordIndex === 0 ? "Negocio" : WORDS[wordIndex]}
                        </span>
                        {brush}
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </>
          ) : (
            <>
              Hacemos un sitio web{" "}
              <span style={{ display: "block" }}>
                para tu{" "}
                <span className="presentation__text__container">
                  <span id="dynamic-word" ref={wordRef}>
                    {wordIndex === 0 ? "Negocio" : WORDS[wordIndex]}
                  </span>
                  {brush}
                </span>
              </span>
            </>
          )}
        </h2>
        <p id="presentation__small__text">
          Somos un par de estudiantes de informática que se dedican a hacer
          sitios webs para pequeños y medianos negocios, a los mejores precios
        </p>
      </div>

      <div className="presentation__icon-container">
        <svg
          id="presentation__cellphoneSVG"
          fill="#000000"
          width="140px"
          height="200px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
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
            />
          </g>
          <path
            d="M6,4.5 C6,3.11928813 7.11928813,2 8.5,2 L15.5113578,2 C16.8920696,2 18.0113578,3.11928813 18.0113578,4.5 L18.0113578,19.5 C18.0113578,20.8807119 16.8920696,22 15.5113578,22 L8.5,22 C7.11928813,22 6,20.8807119 6,19.5 L6,4.5 Z M8.5,3 C7.67157288,3 7,3.67157288 7,4.5 L7,19.5 C7,20.3284271 7.67157288,21 8.5,21 L15.5113578,21 C16.3397849,21 17.0113578,20.3284271 17.0113578,19.5 L17.0113578,4.5 C17.0113578,3.67157288 16.3397849,3 15.5113578,3 Z"
            stroke="black"
            strokeWidth="0.25"
          />
        </svg>

        <svg
          id="presentation__laptopSVG"
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          width="200px"
          height="200px"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
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
    </section>
  );
}