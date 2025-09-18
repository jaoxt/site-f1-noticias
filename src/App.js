import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Noticias from "./pages/Noticias";
import Calendario from "./pages/Calendario";
import Pilotos from "./pages/Pilotos";
import Contato from "./pages/Contato";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/pilotos" element={<Pilotos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
