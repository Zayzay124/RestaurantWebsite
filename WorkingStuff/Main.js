import React from 'react';
import img1 from './autumn_cafe_entrance.jpg'
import img2 from "./leaves_piles.png"
import { Link } from "react-router-dom"

const Main = () => {
  return (
    <div style = {{
        fontFamily: "Inria Serif",
        margin: 0,
        padding: 0,
        background: '#ca5310',
        color: '#fbba72'
    }}>
      <header style = {{
        fontSize: '36px',
        background: '#8f250c'
      }}>
        <h1>Autumn Cafe</h1>
        <p>Fall in Love with Every Sip, Only at Autumn Cafe!</p>
      </header>
           
      <>
      <Navbar/>
      </>

      <img src={img1} alt="View of front entrance of Autumn Cafe" style = {{
        padding: '60px',
      }}/>
      <img src={img2} alt="View of front entrance of Autumn Cafe" style = {{
        width: '100%',
        height: '100%'
      }}/>

      <footer>
        <p>&copy; 2023 Autumn Cafe. All rights reserved.</p>
      </footer>
    </div>
  );
};

function Navbar() {
    return <nav class="main_nav" style = {{
        fontSize: '20px',
        paddingTop: '15px',
        paddingBottom: '15px',
        paddingRight: '32px',
        paddingLeft: '32px'
    }}>
        <Link to="https://www.google.com/" style = {{
            padding: '28px',
            margin: 1,
            borderRadius: '12px',
            color: '#fbba72',
            background: '#691e06',
            transitionDuration: '0.4s',
        }}>Menu</Link>
        <Link to="/OnlineOrder" style = {{
            padding: '28px',
            margin: 1,
            borderRadius: '12px',
            color: '#fbba72',
            background: '#691e06',
            transitionDuration: '0.4s',
        }}>Online Ordering</Link>
        <Link to="/Careers" style = {{
            padding: '28px',
            margin: 1,
            borderRadius: '12px',
            color: '#fbba72',
            background: '#691e06',
            transitionDuration: '0.4s',
        }}>Careers</Link>
        <Link to="/Locations" style = {{
            padding: '28px',
            margin: 1,
            borderRadius: '12px',
            color: '#fbba72',
            background: '#691e06',
            transitionDuration: '0.4s',
        }}>Locations</Link>
        <Link to="/ContactUs" style = {{
            padding: '28px',
            margin: 1,
            borderRadius: '12px',
            color: '#fbba72',
            background: '#691e06',
            transitionDuration: '0.4s',
        }}>Contact</Link>
    </nav>
}

export default Main;
  
