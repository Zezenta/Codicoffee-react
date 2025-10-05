// src/components/Header.tsx
import { useEffect, useMemo, useRef, useState } from "react";

const NAV_ITEMS = [
  { id: "presentation", label: "Inicio" },
  { id: "services", label: "Servicios" },
  { id: "precios", label: "Precios" },
  { id: "process", label: "Proceso" },
  { id: "about", label: "Sobre Nosotros" },
  { id: "questions", label: "Preguntas Frecuentes" },
  { id: "cta", label: "Contacto" },
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
        threshold: [0, 0.5, 1.0],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [sectionIds]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const handleScroll = () => {
      const scrollY = window.scrollY + 80; // Offset for header height
      let newActiveId = "presentation";

      for (let i = 0; i < sections.length; i++) {
        const currentSection = sections[i];
        const nextSection = sections[i + 1];

        if (nextSection) {
          if (scrollY >= currentSection.offsetTop && scrollY < nextSection.offsetTop) {
            newActiveId = currentSection.id;
            break;
          }
        } else if (scrollY >= currentSection.offsetTop) {
          newActiveId = currentSection.id;
        }
      }

      if (newActiveId !== activeIdRef.current) {
        setActiveId(newActiveId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
    <header className="fixed w-full top-0 z-[1000] backdrop-blur-md bg-white/5 border-b border-white/10 py-3 px-4 lg:px-8 shadow-lg shadow-purpleCC-500/10">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <img
            src="https://zezenta.shop/placeholders/SHARE/logo-codicoffee-transparente.webp"
            alt="logo"
            className="w-12 h-12 rounded-full object-cover object-center transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purpleCC-600 to-coffeeCC-500 bg-clip-text text-transparent">
            Codicoffee
          </h1>
        </div>

        <button
          ref={btnRef}
          className="lg:hidden p-2 rounded-full backdrop-blur-md bg-white/5 border border-white/10 text-white transition-all duration-300 hover:bg-white/10 hover:scale-105"
          id="menuToggle"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen((v) => !v);
          }}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <g className="transition-transform duration-300 origin-center">
                <line x1="6" y1="6" x2="18" y2="18" strokeWidth={2} strokeLinecap="round" />
                <line x1="6" y1="18" x2="18" y2="6" strokeWidth={2} strokeLinecap="round" />
              </g>
            ) : (
              <g className="transition-transform duration-300 origin-center">
                <line x1="4" y1="7" x2="20" y2="7" strokeWidth={2} strokeLinecap="round" />
                <line x1="4" y1="12" x2="20" y2="12" strokeWidth={2} strokeLinecap="round" />
                <line x1="4" y1="17" x2="20" y2="17" strokeWidth={2} strokeLinecap="round" />
              </g>
            )}
          </svg>
        </button>

        <ul
          ref={menuRef}
          className={`${
            menuOpen ? "flex" : "hidden"
          } lg:flex list-none fixed lg:static top-16 lg:top-0 left-0 w-full lg:w-auto h-[calc(100vh-64px)] lg:h-auto bg-black/85 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-0 border-b lg:border-b-0 border-white/10 lg:border-none flex-col lg:flex-row gap-4 lg:gap-8 pt-6 lg:pt-0 px-6 lg:px-0 items-stretch lg:items-center overflow-y-auto lg:overflow-visible transition-all duration-500 ease-in-out z-50 lg:z-auto`}
        >
          {NAV_ITEMS.map((n) => (
            <li key={n.id} className="w-full lg:w-auto">
              <a
                href={`#${n.id}`}
                data-section={n.id}
                className={`nav-link block text-white/90 lg:text-grayModern-200 no-underline py-4 lg:py-3 px-4 rounded-modern transition-all duration-200 ease-out font-semibold focus-visible:bg-white/10 lg:hover:text-white lg:hover:bg-white/5 lg:hover:translate-y-[-2px] relative overflow-hidden group ${
                  activeId === n.id
                    ? "nav-link-active text-white underline underline-offset-4 decoration-2 bg-gradient-to-r from-purpleCC-500/20 to-coffeeCC-500/20 backdrop-blur-sm bg-gradient-to-r from-purpleCC-500 to-coffeeCC-500 bg-clip-text text-transparent shadow-[0_0_10px_rgba(131,10,187,0.3)] border-l-4 border-purpleCC-500/50 ml-[-4px] pl-4"
                    : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(n.id);
                }}
              >
                <span className="relative z-10">{n.label}</span>
                <span className={`absolute inset-0 bg-gradient-to-r from-purpleCC-500/10 to-coffeeCC-500/10 rounded-modern scale-0 lg:group-hover:scale-100 ${activeId === n.id ? 'scale-100' : ''} transition-transform duration-300 origin-center`}></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm lg:hidden z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
