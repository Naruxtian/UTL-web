/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Inicio from './pages/inicio/Inicio'
import Aspirante from './pages/aspirante/Aspirante'
import './App.css'

function App() {

  return (
    <>
      <Routes>          
            <Route index element={<Inicio/>} />
            <Route path="/" element={<Inicio/>}/>
            <Route path="/Aspirante" element={<Aspirante/>}/>

      </Routes>

    </>
  )
}

export default App
