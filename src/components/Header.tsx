// src/components/Header.tsx
import { useEffect, useMemo, useRef, useState } from "react";

const NAV_ITEMS = [
  { id: "presentation", label: "Inicio" },
  { id: "services", label: "Servicios" },
  { id: "portfolio", label: "Portafolio" },
  { id: "precios", label: "Precios" },
  { id: "about", label: "Sobre Nosotros" },
  { id: "questions", label: "Preguntas Frecuentes" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("presentation");
  const activeIdRef = useRef(activeId);
  const menuRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    activeIdRef.current = activeId;
  }, [activeId]);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const sectionIds = useMemo(() => NAV_ITEMS.map((n) => n.id), []);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        btnRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const intersectingEntries = entries.filter((e) => e.isIntersecting);

        if (intersectingEntries.length === 0) {
          return;
        }

        // Find the entry that is most visible (highest intersectionRatio)
        // If ratios are equal, prioritize the one closer to the top of the viewport
        const bestEntry = intersectingEntries.reduce((prev, current) => {
          if (current.intersectionRatio > prev.intersectionRatio) {
            return current;
          }
          if (
            current.intersectionRatio === prev.intersectionRatio &&
            current.boundingClientRect.top < prev.boundingClientRect.top
          ) {
            return current;
          }
          return prev;
        });

        if (bestEntry.target.id !== activeIdRef.current) {
          setActiveId(bestEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-80px 0px 0px 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1.0], // Simplified threshold array
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [sectionIds]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80;
    const top = el.offsetTop - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-[1000] backdrop-blur-sm bg-[#4e216199] py-2">
      <nav className="flex justify-between items-center px-5 text-[#b4adad] sticky">
        <div className="flex items-center lg:ml-[30px]">
          <img
            src="https://zezenta.shop/placeholders/SHARE/logo-codicoffee-transparente.webp"
            alt="logo"
            className="w-[60px] h-[60px] rounded-full object-cover object-center"
            loading="lazy"
          />
          <h1 className="text-2xl font-bold text-white">Codicoffee</h1>
        </div>

        <button
          ref={btnRef}
          className="lg:hidden bg-none border-none text-2xl text-white/60 cursor-pointer"
          id="menuToggle"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen((v) => !v);
          }}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <ul
          ref={menuRef}
          className={`list-none fixed top-0 h-screen w-[250px] bg-[rgba(78,33,97,0.9)] flex flex-col gap-5 pt-[50px] transition-all duration-300 ease-in-out pl-5 ${
            menuOpen ? "right-0" : "right-[-100%]"
          } lg:static lg:h-auto lg:w-auto lg:flex-row lg:bg-transparent lg:pt-0 lg:mr-[30px]`}
        >
          {NAV_ITEMS.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                data-section={n.id}
                className={`nav-link text-white/60 no-underline p-[5px] transition-all duration-300 ease-in-out hover:text-white font-bold ${
                  activeId === n.id ? "nav-link-active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(n.id);
                }}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
