import React from 'react';
import "./styles.css";
import { Link } from "react-router-dom"
// Import images if they are locally stored
// import instaIcon from './path-to-insta.png';
// import facebookIcon from './path-to-face.png';
// import whatsappIcon from './path-to-whatsapp.png';
// import leavesImage from './path-to-leaves.png';

const ContactUs = () => {
    const contactFormStyle = {
        backgroundColor: '#fbba72',
        padding: '20px',
        borderRadius: '8px',
        display: 'inline-block',
        marginTop: '50px',
    };

    const headingStyle = {
        fontFamily: "'Montserrat', sans-serif",
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        backgroundColor: '#ca5310',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontFamily: "'Open Sans', sans-serif",
    };

    const buttonStyle = {
        backgroundColor: '#ca5310',
        color: 'white',
        padding: '10px 20px',
        margin: '20px 0',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontFamily: "'Montserrat', sans-serif",
    };

    const socialMediaStyle = {
        marginTop: '20px',
    };

    // Add other styles as needed

    return (
        <div>
        <div>
            <div style = {{ 
                width: '100%', 
                height: '100%', 
                background: '#691E06', 
                boxShadow: '0px 1px 0px rgba(26, 26, 26, 0.07)', 
                justifyContent: 'flex-start', 
                alignItems: 'center', 
                gap: 20, display: 'inline-flex' }}>
                <div className="AssetsStoreSwitcher" style = {{ 
                    width: 240, 
                    height: 56, 
                    position: 'relative', 
                    background: '#691E06' }}>
                <div className="Inner" style = {{ 
                    height: 30, 
                    paddingLeft: 8, 
                    paddingRight: 8, 
                    paddingTop: 4, 
                    paddingBottom: 4, 
                    left: 0, top: 6, 
                    position: 'absolute', 
                    background: '#691E06', borderRadius: 3, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                    <div className="AutumnEats" style={{ width: 135, background: '#691E06', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '650', wordWrap: 'break-word' }}>Autumn Eats</div>
                    <div className="rightNav" style={{ background: '#691E06', display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                    <Link to="/Main" style={{ background: '#691E06', color: 'white', marginLeft: '10px', border: 'none', textDecoration: 'none' }}>Home</Link>
                    <Link to="/Directions" style={{ background: '#691E06', color: 'white', marginLeft: '10px', border: 'none', textDecoration: 'none' }}>Directions</Link>
                    <Link to="/Careers" style={{ background: '#691E06', color: 'white', marginLeft: '10px', border: 'none', textDecoration: 'none' }}>Careers</Link>
                    <Link to="/OnlineOrder" style={{ background: '#691E06', color: 'white', marginLeft: '10px', border: 'none', textDecoration: 'none' }}>Online Ordering</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div style={contactFormStyle}>
            <h2 style={headingStyle}>Contact Us!</h2>
            <p>Send us a message and we'll get back to you as soon as possible!</p>
            <form>
                <input style={inputStyle} type="text" name="name" placeholder="Name" />
                <input style={inputStyle} type="email" name="email" placeholder="Email" />
                <input style={inputStyle} type="text" name="location" placeholder="Location" />
                <input style={inputStyle} type="tel" name="phone" placeholder="Phone Number" />
                <input style={inputStyle} type="text" name="reason" placeholder="Reason for Contact" />
                <textarea style={inputStyle} name="message" rows="4" placeholder="Message"></textarea>
                <button style={buttonStyle} type="submit">send</button>
            </form>
            <div style={socialMediaStyle}>
                {/* Replace with imported images or adjust paths */}
                <img src="insta.png" alt="Instagram" width="50" height="50" />
                <img src="facebook.png" alt="Facebook" width="50" height="50" />
                <img src="whatsapp.png" alt="WhatsApp" width="50" height="50" />
            </div>
            {/* <img src={leavesImage} alt="Decorative leaves" /> */}
        </div>
        </div>
    );
};

export default ContactUs;