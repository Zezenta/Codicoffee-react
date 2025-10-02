// src/components/Header.tsx
import { useEffect, useMemo, useRef, useState } from "react";

const NAV_ITEMS = [
  { id: "presentation", label: "Inicio" },
  { id: "services", label: "Servicios" },
  { id: "portfolio", label: "Portafolio" },
  { id: "precios", label: "Precios" },
  { id: "about", label: "Sobre Nosotros" },
  { id: "questions", label: "Preguntas Frecuentes" }
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("presentation");
  const menuRef = useRef<HTMLUListElement | null>(null);
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
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { root: null, threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [sectionIds]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 70;
    const top = el.offsetTop - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="header__navbar">
        <div className="header__logo-container">
          <img
            src="https://zezenta.shop/placeholders/SHARE/logo-codicoffee-transparente.webp"
            alt="logo"
            className="header__img"
            loading="lazy"
          />
          <h1 className="header__logo">Codicoffee</h1>
        </div>

        <button
          ref={btnRef}
          className="menu-toggle"
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
          className={`header__links-container ${menuOpen ? "active" : ""}`}
        >
          {NAV_ITEMS.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                data-section={n.id}
                className={`nav-link ${activeId === n.id ? "active" : ""}`}
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