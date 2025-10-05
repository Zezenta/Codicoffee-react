// src/App.tsx
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Services from "./components/Services";
import Prices from "./components/Prices";
import Process from "./components/Process";
import About from "./components/About";
import Questions from "./components/Questions";
import Manabi from "./components/Manabi";
import FinalCTA from "./components/FinalCTA";
import WhatsappButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <Services />
        {/* <Portfolio /> */  }
        <Prices />
        <Process />
        <About />
        <Questions />
        <Manabi />
        <FinalCTA />
      </main>
      <WhatsappButton />
    </>
  );
}
