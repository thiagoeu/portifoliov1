// App.jsx
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Habilidades from "./pages/Habilidades";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Habilidades />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
