// src/components/About.tsx
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const aboutSection = document.querySelector(".about");
    const members = document.querySelectorAll<HTMLElement>(".about__members");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            members.forEach((member, idx) => {
              member.classList.add("visible");
              setTimeout(() => {
                const h3 = member.querySelector("h3");
                h3?.classList.add("underline-active");

                const lis = member.querySelectorAll<HTMLLIElement>("li");
                lis.forEach((li, liIdx) => {
                  setTimeout(() => {
                    li.classList.add("visible");
                  }, 600 + liIdx * 300);
                });
              }, 600 + idx);
            });
            if (aboutSection) obs.unobserve(aboutSection);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutSection) obs.observe(aboutSection);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="about section" id="about">
      <h2 className="about__title">Sobre Nosotros</h2>
      <div className="about__members-container">
        <article className="about__members">
          <div className="about__info-container">
            <img
              src="https://avatars.githubusercontent.com/u/101609455?v=4"
              alt="José Véliz"
              loading="lazy"
            />
            <h3>José Véliz</h3>
          </div>
          <ul>
            <li>Administrador de Servidores</li>
            <li>Campeón Nacional de Informática 2023</li>
            <li>Estudiante de Ing en Computación en la ESPAM</li>
            <li>Contacto: jose@codicoffee.com</li>
          </ul>
        </article>

        <article className="about__members">
          <div className="about__info-container">
            <img
              src="https://avatars.githubusercontent.com/u/103219972?v=4"
              alt="Adrián Zambrano"
              loading="lazy"
            />
            <h3>Adrián Zambrano</h3>
          </div>
          <ul>
            <li>Experto en diseño web y desarrollo frontend</li>
            <li>Diseñador UI</li>
            <li>Estudiante de Ing de Software en la ULEAM</li>
            <li>Contacto: adrian@codicoffee.com</li>
          </ul>
        </article>
      </div>
    </section>
  );
}