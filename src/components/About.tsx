// src/components/About.tsx
import { useEffect } from "react";

const TEAM_MEMBERS = [
  {
    id: "jose",
    name: "José Véliz",
    image: "https://avatars.githubusercontent.com/u/101609455?v=4",
    role: "Infraestructura & Automatizaciones",
    achievements: "Campeón Nacional de Informática 2023 · experiencia en bots y despliegues 24/7",
    education: "Ing. en Computación (ESPAM) · DevOps & cloud ligero",
    contact: "jose@codicoffee.com",
  },
  {
    id: "adrian",
    name: "Adrián Zambrano",
    image: "https://avatars.githubusercontent.com/u/103219972?v=4",
    role: "Frontend & Experiencias de usuario",
    achievements: "Diseñador UI · integra CRM simples y automatizaciones con WhatsApp",
    education: "Ing. de Software (ULEAM) · Especialista en accesibilidad",
    contact: "adrian@codicoffee.com",
  },
];

export default function About() {
  useEffect(() => {
    const aboutSection = document.querySelector(".about");
    const members = document.querySelectorAll<HTMLElement>(".about__member");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            members.forEach((member, idx) => {
              setTimeout(() => {
                member.classList.add("visible");
                const h3 = member.querySelector("h3");
                h3?.classList.add("underline-active");

                const lis = member.querySelectorAll<HTMLLIElement>("ul li");
                lis.forEach((li, liIdx) => {
                  setTimeout(() => {
                    li.classList.add("visible");
                  }, liIdx * 100);
                });
              }, idx * 300);
            });
            obs.unobserve(aboutSection as Element);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutSection) obs.observe(aboutSection);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="about relative py-20 px-4 lg:px-8 bg-gradient-to-br from-grayModern-900 via-purpleCC-900 to-coffeeCC-900 text-white overflow-hidden min-h-screen flex flex-col justify-center items-center"
      id="about"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purpleCC-500/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purpleCC-500 to-coffeeCC-500" />

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purpleCC-200 to-coffeeCC-200 bg-clip-text text-transparent drop-shadow-2xl animate-fade-in">
          Sobre Nosotros
        </h2>
      </div>

      {/* Team cards */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto w-full px-4">
        {TEAM_MEMBERS.map((member, index) => (
          <article
            key={member.id}
            className="about__member relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 lg:p-10 shadow-card-modern hover:shadow-glow-purple transition-all duration-700 ease-out hover:-translate-y-3 overflow-hidden opacity-0 translate-y-10 group min-h-[350px] flex flex-col justify-between"
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            {/* Card overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purpleCC-500/5 to-coffeeCC-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            
            {/* Image */}
            <div className="relative mb-6 flex justify-center">
              <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-2xl group-hover:shadow-glow-purple transition-all duration-500 group-hover:scale-110">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Name */}
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-2 bg-gradient-to-r from-white to-grayModern-200 bg-clip-text text-transparent relative z-10">
              {member.name}
            </h3>

            {/* Role */}

            {/* Details list */}
            <ul className="space-y-3 relative z-10 flex-1 flex flex-col justify-center">
              <li className="about__member-li flex justify-center opacity-0 transform translate-y-20 transition-all duration-500" style={{ transitionDelay: "0s" }}>
                <span className="text-purpleCC-300 font-semibold">{member.role}</span>
              </li>
              <li className="about__member-li flex items-center opacity-0 transform translate-y-20 transition-all duration-500" style={{ transitionDelay: "0.1s" }}>
                <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                <span className="text-grayModern-200 text-base">{member.achievements}</span>
              </li>
              <li className="about__member-li flex items-center opacity-0 transform translate-y-20 transition-all duration-500" style={{ transitionDelay: "0.2s" }}>
                <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                <span className="text-grayModern-200 text-base">{member.education}</span>
              </li>
              <li className="about__member-li flex items-center opacity-0 transform translate-y-20 transition-all duration-500" style={{ transitionDelay: "0.3s" }}>
                <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                <span className="text-grayModern-200 text-base">Contacto: <a href={`mailto:${member.contact}`} className="underline hover:text-purpleCC-300 transition-colors">{member.contact}</a></span>
              </li>
            </ul>

            {/* Decorative element */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-purpleCC-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
          </article>
        ))}
      </div>
    </section>
  );
}
