import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import SobreNosotros from "./pages/SobreNosotros";

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-shell__main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}