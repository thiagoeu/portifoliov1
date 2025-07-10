// App.jsx
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
