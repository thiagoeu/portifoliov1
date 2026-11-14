import Header from "./components/Header";
import Hero from "./pages/Hero";
import Habilidades from "./pages/Habilidades";
import Projetos from "./pages/Projetos";
import Footer from "./components/Footer";
import PixelBackground from "./components/PixelBackground";
import ScrollToTop from "./components/ui/ScrollToTop";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contato from "./pages/Contato";

const NotFound = () => (
  <section className="flex min-h-[calc(100vh-160px)] flex-col items-center justify-center px-6 text-center space-y-4">
    <span className="font-mono text-5xl font-extrabold text-sky-400">404</span>
    <h1 className="text-2xl font-bold text-white">Página não encontrada</h1>
    <p className="text-sm text-slate-400 max-w-md">
      O endereço acessado não existe ou foi movido.
    </p>
    <Link
      to="/"
      className="rounded-xl bg-gradient-to-r from-sky-500 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-500/20 hover:scale-105 transition-transform"
    >
      Voltar para o Início
    </Link>
  </section>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative flex min-h-screen flex-col bg-[#070b14] text-slate-200 selection:bg-cyan-500 selection:text-slate-950 font-sans">
        <PixelBackground />
        <Header />
        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/skills" element={<Habilidades />} />
            <Route path="/contact" element={<Contato />} />
            <Route path="/projects" element={<Projetos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
