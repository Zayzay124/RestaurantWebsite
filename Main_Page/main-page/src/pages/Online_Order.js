import React from 'react';
import { Link } from "react-router-dom";


export default function OO() {
    return (
  <div>
    <h1>Online Ordering</h1>
    <nav class="navbar background">
      <ul class="nav-list">
        <li>
          <Link to="#home">Home</Link>
        </li>
        <li>
          <Link to="#menu">Menu</Link>
        </li>
        <li>
          <Link to="#careers">Career</Link>
        </li>
        <li>
          <Link to="#directions">Directions</Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
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
    <div class="summary">
      <p>Order Summary</p>
    </div>
  </div>
 )
}