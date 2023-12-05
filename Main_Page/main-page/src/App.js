import React from 'react'
import "./App.css"
import img1 from './images/autumn_cafe_entrance.jpg'
import img2 from "./images/leaves_piles.png"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Test from "./pages/Test"
import OO from './pages/Online_Order'
import Navbar from './Navbar'

export default function AutumnCafe() {
  return (
    <div>
      <header>
        <h1>Autumn Cafe</h1>
        <p>Fall in Love with Every Sip, Only at Autumn Cafe!</p>
      </header>

      return <Navbar/>

      <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="/OO" element={<OO/>}/>
      </Routes>

      <img src={img1} alt="View of front entrance of Autumn Cafe" />
      <img class = "leaves" src={img2} alt="View of front entrance of Autumn Cafe" />

      <footer>
        <p>&copy; 2023 Autumn Cafe. All rights reserved.</p>
      </footer>
    </div>
  )
}
