import React from 'react';
import "./App.css";
import img1 from './images/autumn_cafe_entrance.jpg'
import img2 from "./images/leaves_piles.png"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Test from "./pages/Test"
import Navbar from './Navbar';

const AutumnCafe = () => {
  return (
    <div>
      <header>
        <h1>Autumn Cafe</h1>
        <p>Fall in Love with Every Sip, Only at Autumn Cafe!</p>
      </header>
           
      <>
      return <Navbar/>
      <Routes>
        <Route path="/test_page"/>
      </Routes>
      </>

      <img src={img1} alt="View of front entrance of Autumn Cafe" />
      <img class = "leaves" src={img2} alt="View of front entrance of Autumn Cafe" />

      <footer>
        <p>&copy; 2023 Autumn Cafe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AutumnCafe;
