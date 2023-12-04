import './App.css';
import React from 'react';
import leaves from './leaves.png';

console.log(leaves);
document.body.style = 'background: #FBBA72;';

function App() {
 return (
  <div>
    <h1>Online Ordering</h1>
    <nav class="navbar background">
      <ul class="nav-list">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#carrer">Careers</a>
        </li>
        <li>
          <a href="#directions">Directions</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div class="rightNav">
        <button class="pickup">Pickup</button>
        <button class="delivery">Delivery</button>
      </div>
    </nav>
    <div class="menu">
      <p>Menu</p>
    </div>
    <div class="img">
      <img src={leaves} alt="Fall Leaves" />
    </div>
    <div class="summary">
      <p>Order Summary</p>
    </div>
  </div>
 )
}

export default App;
