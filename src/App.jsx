// App.jsx
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Habilidades from "./pages/Habilidades";
import Projetos from "./pages/Projetos";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./pages/Contato";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Habilidades />} />
          <Route path="/contact" element={<Contato />} />
          <Route path="/projects" element={<Projetos />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
