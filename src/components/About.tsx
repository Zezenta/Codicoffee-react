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
    <section
      className="about pt-0 flex flex-col justify-center items-center py-10"
      id="about"
    >
      <h2 className="text-[clamp(2rem,5vw,2.5rem)] lg:text-4xl font-bold py-4">
        Sobre Nosotros
      </h2>
      <div className="flex flex-col gap-5 items-center justify-center text-white max-w-[370px] lg:flex-row lg:gap-[60px] lg:max-w-full">
        <article className="about__members bg-[#333] p-7 rounded-lg shadow-[0_0_5px_#0f0e0e] w-full text-left flex flex-col justify-center items-center gap-5 lg:flex-row lg:min-h-[270px] lg:max-w-[490px] h-full">
          <div className="text-center flex flex-col justify-center items-center gap-2.5 lg:min-w-[140px]">
            <img
              src="https://avatars.githubusercontent.com/u/101609455?v=4"
              alt="José Véliz"
              loading="lazy"
              className="w-[100px] h-[100px] object-cover rounded-full shadow-[0px_0px_5px_1.5px_var(--purple)]"
            />
            <h3 className="m-0 relative font-bold">José Véliz</h3>
          </div>
          <ul className="m-0 list-disc self-start p-2.5 lg:self-center lg:pl-5">
            <li className="mb-2 leading-normal">
              <span>Administrador de Servidores</span>
            </li>
            <li className="mb-2 leading-normal">
              <span>Campeón Nacional de Informática 2023</span>
            </li>
            <li className="mb-2 leading-normal">
              <span>
                Estudiante de Ing en Computación en la ESPAM
              </span>
            </li>
            <li className="mb-2 leading-normal">
              <span>Contacto: jose@codicoffee.com</span>
            </li>
          </ul>
        </article>

        <article className="about__members bg-[#333] p-7 rounded-lg shadow-[0_0_5px_#0f0e0e] w-full text-left flex flex-col justify-center items-center gap-5 lg:flex-row lg:min-h-[270px] lg:max-w-[490px] h-full">
          <div className="text-center flex flex-col justify-center items-center gap-2.5 lg:min-w-[140px]">
            <img
              src="https://avatars.githubusercontent.com/u/103219972?v=4"
              alt="Adrián Zambrano"
              loading="lazy"
              className="w-[100px] h-[100px] object-cover rounded-full shadow-[0px_0px_5px_1.5px_var(--purple)]"
            />
            <h3 className="m-0 relative font-bold">Adrián Zambrano</h3>
          </div>
          <ul className="m-0 list-disc self-start p-2.5 lg:self-center lg:pl-5">
            <li className="mb-2 leading-normal">
              <span>
                Experto en diseño web y desarrollo frontend
              </span>
            </li>
            <li className="mb-2 leading-normal">
              <span>Diseñador UI</span>
            </li>
            <li className="mb-2 leading-normal">
              <span>
                Estudiante de Ing de Software en la ULEAM
              </span>
            </li>
            <li className="mb-2 leading-normal">
              <span>Contacto: adrian@codicoffee.com</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}