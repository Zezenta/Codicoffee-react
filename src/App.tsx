// src/App.tsx
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Prices from "./components/Prices";
import About from "./components/About";
import Questions from "./components/Questions";
import Manabi from "./components/Manabi";
import WhatsappButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <Services />
        <Portfolio />
        <Prices />
        <About />
        <Questions />
        <Manabi />
      </main>
      <WhatsappButton />
    </>
  );
}