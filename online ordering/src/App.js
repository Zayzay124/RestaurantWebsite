import './App.css';
import React from 'react';
import leaves from './leaves.png';
import { Link } from "react-router-dom";
import { useState } from 'react';


console.log(leaves);
document.body.style = 'background: #FBBA72;';


function App() {
 return (

  <div>
    <h1>Online Ordering</h1>
    <nav class="navbar background">
      <ul class="nav-list">
        <li>
          <Link to="https://www.google.com">Home</Link>
        </li>
        <li>
          <Link to="https://www.google.com">Menu</Link>
        </li>
        <li>
          <Link to="/careers.js">Career</Link>
        </li>
        <li>
          <Link to="https://www.google.com">Directions</Link>
        </li>
        <li>
          <Link to="https://www.google.com">Contact</Link>
        </li>
      </ul>
      <div class="rightNav">
        <button>Pickup</button>
        <button>Delivery</button>
      </div>
    </nav>
    <div class="container">
      <div class="img">
        <img src={leaves} alt="Fall Leaves" />
      </div>
      <Menu />
      <div class="img2">
        <img src={leaves} alt="Fall Leaves" />
      </div>
    </div>
    <Popup />
  </div>
 )
}

function Menu() {
  const [clickedButtons, setClickedButtons] = useState([]);

  const handleClick = (buttonText) => {
    // Toggle the button's click status
    const isClicked = clickedButtons.includes(buttonText);
    if (isClicked) {
      // Remove the button from the clickedButtons array
      setClickedButtons((prevButtons) =>
        prevButtons.filter((button) => button !== buttonText)
      );
    } else {
      // Add the button to the clickedButtons array
      setClickedButtons((prevButtons) => [...prevButtons, buttonText]);
    }
  };

  return (
    <div className="menu">
      <p className="title">Menu</p>
      <br />
      <p>Appetizer</p>
      <button
        className={`app ${clickedButtons.includes('Salmon and Asparagus Reuben Canapes') ? 'clicked' : ''}`}
        onClick={() => handleClick('Salmon and Asparagus Reuben Canapes')}
      >
        Salmon and Asparagus Reuben Canapes {clickedButtons.includes('Salmon and Asparagus Reuben Canapes') && 'X'}
      </button>
      <br />
      <p>First Course</p>
      <button
        className={`first ${clickedButtons.includes('Mixed Greens Garden Salad') ? 'clicked' : ''}`}
        onClick={() => handleClick('Mixed Greens Garden Salad')}
      >
        Mixed Greens Garden Salad {clickedButtons.includes('Mixed Greens Garden Salad') && 'X'}
      </button>
      <br />
      <p>Main Course</p>
      <button
        className={`main ${clickedButtons.includes('Baked Lemon Chicken') ? 'clicked' : ''}`}
        onClick={() => handleClick('Baked Lemon Chicken')}
      >
        Baked Lemon Chicken {clickedButtons.includes('Baked Lemon Chicken') && 'X'}
      </button>
      <button
        className={`main ${clickedButtons.includes('Grilled Filet Mignon') ? 'clicked' : ''}`}
        onClick={() => handleClick('Grilled Filet Mignon')}
      >
        Grilled Filet Mignon {clickedButtons.includes('Grilled Filet Mignon') && 'X'}
      </button>
      <button
        className={`main ${clickedButtons.includes('Edamame Pilaf') ? 'clicked' : ''}`}
        onClick={() => handleClick('Edamame Pilaf')}
      >
        Edamame Pilaf {clickedButtons.includes('Edamame Pilaf') && 'X'}
      </button>
      <br />
      <p>Desserts</p>
      <button
        className={`desserts ${clickedButtons.includes('Chocolate Raspberry Wedding') ? 'clicked' : ''}`}
        onClick={() => handleClick('Chocolate Raspberry Wedding')}
      >
        Chocolate Raspberry Wedding {clickedButtons.includes('Chocolate Raspberry Wedding') && 'X'}
      </button>
      <button
        className={`desserts ${clickedButtons.includes('Cake French Vanilla Ice Cream') ? 'clicked' : ''}`}
        onClick={() => handleClick('Cake French Vanilla Ice Cream')}
      >
        Cake French Vanilla Ice Cream {clickedButtons.includes('Cake French Vanilla Ice Cream') && 'X'}
      </button>
      <button
        className={`desserts ${clickedButtons.includes('Macaroons') ? 'clicked' : ''}`}
        onClick={() => handleClick('Macaroons')}
      >
        Macaroons {clickedButtons.includes('Macaroons') && 'X'}
      </button>
    </div>
  );
}

function Popup(){
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handlePopupToggle = () => {
    setPopupOpen(!isPopupOpen);
  };

  return(
    <div>
      <button class="popup-button" onClick = {handlePopupToggle}>Place Order</button>
      {isPopupOpen && (
        <div class="popup-container">
          <p>Order Placed</p>
          <button class="close" onClick={handlePopupToggle}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;

