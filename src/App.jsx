import Header from "./components/Header";
import Hero from "./pages/Hero";
import Habilidades from "./pages/Habilidades";
import Projetos from "./pages/Projetos";
import Footer from "./components/Footer";
import PixelBackground from "./components/PixelBackground";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./pages/Contato";

function App() {
  return (
    <BrowserRouter>
      <div className="relative flex min-h-screen flex-col bg-[#0b0f19] text-slate-200 selection:bg-cyan-500 selection:text-slate-950 font-sans">
        <PixelBackground />
        <Header />
        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/skills" element={<Habilidades />} />
            <Route path="/contact" element={<Contato />} />
            <Route path="/projects" element={<Projetos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
