import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Contact from "./components/Contacts";

function App() {
  const [lang, setLang] = useState("te");

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Menu lang={lang} />
      <Contact lang={lang} />
    </>
  );
}

export default App;