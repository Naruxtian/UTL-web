/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Inicio from "./pages/inicio/Inicio";
import Aspirante from "./pages/aspirante/Aspirante";
import SideMenu from "./components/sideMenu/sideMenu";
import Footer from "./components/footerLogoAso";
import FooterInformativo from "./components/footerInformativo";
import Contactanos from "./pages/aspirante/Contactanos";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./App.css";
import Background from "./components/background";
import Estudiante from "./pages/estudiante/Estudiante";

//mi rama
function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <SideMenu show={showNav} />
      <Background />
      <div className="container">
        <Routes>
          <Route index element={<Inicio />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/Aspirante" element={<Aspirante />} />
          <Route path="/Estudiante" element={<Estudiante />} />
          <Route path="/Contactanos" element={<Contactanos />} />
        </Routes>
      </div>
      <div className="ft">
        <Footer />
        <FooterInformativo />
      </div>
    </>
  );
}

export default App;
