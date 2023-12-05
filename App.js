import React from 'react';
import './App.css';
import leaf from "./assets/leaf.png";



function Directions() {
  return (
    
<div>
  <div style={{ width: '100%', height: '100%', background: '#691E06', boxShadow: '0px 1px 0px rgba(26, 26, 26, 0.07)', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex' }}>
    <div className="AssetsStoreSwitcher" style={{ width: 240, height: 56, position: 'relative', background: '#691E06' }}>
      <div className="Inner" style={{ height: 30, paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 0, top: 6, position: 'absolute', background: '#691E06', borderRadius: 3, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
        <div className="AutumnEats" style={{ width: 135, color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '650', lineHeight: 20, wordWrap: 'break-word' }}>Autumn Eats</div>
        <div className="rightNav" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          <a href="https://www.google.com" className="pickup" style={{ background: '#691E06', color: 'white', marginLeft: '10px', border: 'none', textDecoration: 'none' }}>HOME</a>
          <a href="https://www.google.com" className="delivery" style={{ background: '#691E06', color: 'white', marginLeft: '10px', border: 'none', textDecoration: 'none' }}>MENU</a>
          <a href="https://www.google.com" className="delivery" style={{ background: '#691E06', color: 'white', marginLeft: '10px', border: 'none', textDecoration: 'none' }}>CAREERS</a>
          <a href="https://www.google.com" className="delivery" style={{ background: '#691E06', color: 'white', marginLeft: '10px', border: 'none', textDecoration: 'none' }}>ORDERING</a>
        </div>
        <div className="PrimaryLogoMonochromaticInverted" style={{ width: 70, height: 24, position: 'relative' }} />
      </div>
    </div>
  </div>


      <div style={{width: '100%', height: '100%', background: '#691E06', boxShadow: '0px 1px 0px rgba(26, 26, 26, 0.07)', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
      </div>

      <img className="Image4" style={{width: '100%', height: '40%', transform: 'rotate(-0.50deg)', transformOrigin: '0 0'}} src={leaf} />
      
      <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
        <div style={{width: '48%'}}>
          <div style={{width: '100%', height: '100%', padding: 16, background: '#BB4D00', boxShadow: '0px 1px 0px rgba(26, 26, 26, 0.07)', borderRadius: 12, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'flex'}}>
            <div style={{color: 'white', fontSize: 25, fontFamily: 'Inter', fontWeight: '800', textAlign: 'left'}}>Location</div>

            <div style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', textAlign: 'center'}}>
              120 Delafield <br/>St, Poughkeepsie, NY 12601
            </div>
            <div style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '300', textAlign: 'left'}}>800-273-8255</div>
          </div>
        </div>

        <div style={{width: '48%'}}>
          <div style={{width: '100%', height: '100%', padding: 16, background: '#BB4D00', boxShadow: '0px 1px 0px rgba(26, 26, 26, 0.07)', borderRadius: 12, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'flex'}}>
            <div style={{color: 'white', fontSize: 25, fontFamily: 'Inter', fontWeight: '800', textAlign: 'center'}}>Hours Of Operation</div>
            <div style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', textAlign: 'center'}}>
              Monday-Sunday <br/>6am-12am
            </div>
          </div>
        </div>
      </div>

<div style={{width: '100%', height: '100%', margin: '100px 0', padding: 30, background: '#BB4D00', boxShadow: '0px 1px 0px rgba(26, 26, 26, 0.07)', borderRadius: 12, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'flex'}}>
  <div style={{color: 'white', fontSize: 25, fontFamily: 'Inter', fontWeight: '800', textAlign: 'left', marginBottom: 16}}>Directions</div>
  <div className="map" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.4344773067082!2d37.61500057665997!3d55.75095437308352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a56d3c9e8ed%3A0x1dbf75dc9e417a9b!2sPatriarch&#39;s%20Palace%20and%20the%20Church%20of%20the%20Twelve%20Apostles!5e0!3m2!1sen!2sus!4v1701668072257!5m2!1sen!2sus" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
</div>

      </div>
    
  );
}

export default Directions;
