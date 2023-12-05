import React from 'react';
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
    );
};

export default ContactUs;
