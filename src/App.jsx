/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Inicio from './pages/inicio/Inicio'
import Aspirante from './pages/aspirante/Aspirante'
import SideMenu from './components/sideMenu/sideMenu';
import {GiHamburgerMenu} from 'react-icons/gi'
import './App.css'


import { Link } from 'react-router-dom';
function App() {
  const [showNav, setShowNav] = useState(false)


  return (
    <>
      <header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)}/>
      </header>
      <SideMenu show={showNav}/>
      <Routes>          
            <Route index element={<Inicio/>} />
            <Route path="/" element={<Inicio/>}/>
            <Route path="/Aspirante" element={<Aspirante/>}/>
      </Routes>

    </>
  )
}

export default App
