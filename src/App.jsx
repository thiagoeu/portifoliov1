import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto max-w-screen-xl p-4"></main>
      <Footer />
    </div>
  );
}

export default App;
