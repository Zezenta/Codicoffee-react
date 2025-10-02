// src/components/Manabi.tsx
export default function Manabi() {
  return (
    <section className="manabi">
      <h2 className="manabi__title">
        <span id="manabi__green">HECHO E</span>
        <span id="manabi__red">N MANABÍ</span>
      </h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/68/Bandera_Provincia_Manab%C3%AD.svg"
        className="manabi__img"
        loading="lazy"
        alt="Bandera de Manabí"
      />
    </section>
  );
}