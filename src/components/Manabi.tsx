// src/components/Manabi.tsx
export default function Manabi() {
  return (
    <section className="p-0 pb-6 flex flex-col items-center py-10">
      <h2 className="text-base mb-0 lg:text-2xl font-bold">
        <span className="text-[#078930]">HECHO E</span>
        <span className="text-[#da121a]">N MANABÍ</span>
      </h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/68/Bandera_Provincia_Manab%C3%AD.svg"
        className="block mx-auto w-1/5 mb-[90px] lg:w-[150px] lg:mb-0"
        loading="lazy"
        alt="Bandera de Manabí"
      />
    </section>
  );
}
