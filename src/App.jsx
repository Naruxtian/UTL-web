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
import Docente from "./pages/docente/Docente";
import Administrativo from "./pages/administrativo/Administrativo";
import Empresario from "./pages/empresario/Empresario";
import Egresado from "./pages/egresado/Egresado";
import SomosUtl from "./pages/somosUtl/somosUtl";

//mi rama
function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <Background />
      <div className="container">
        <Routes>
          <Route index element={<Inicio />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/Aspirante" element={<Aspirante />} />
          <Route path="/Estudiante" element={<Estudiante />} />
          <Route path="/Docente" element={<Docente />} />
          <Route path="/Administrativo" element={<Administrativo />} />
          <Route path="/Empresario" element={<Empresario />} />
          <Route path="/Egresado" element={<Egresado />} />
          <Route path="/SomosUtl" element={<SomosUtl />} />
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
