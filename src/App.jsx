/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Inicio from './pages/inicio/Inicio'
import Aspirante from './pages/aspirante/Aspirante'
import SideMenu from './components/sideMenu/sideMenu';
import './App.css'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { Link } from "react-router-dom";
import Contactanos from "./pages/aspirante/Contactanos";
function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <SideMenu show={showNav}/> 
      <Routes>          
            <Route index element={<Inicio/>} />
            <Route path="/" element={<Inicio/>}/>
            <Route path="/Aspirante" element={<Aspirante/>}/>
        <Route path="/Contactanos" element={<Contactanos />} />
      </Routes>


    </>
  );
}

export default App;
