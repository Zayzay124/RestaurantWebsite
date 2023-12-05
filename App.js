import React from 'react';
import menu from "./menu.jpg";
import Right from "./leavesR.png";
import Left from "./leavesL.png";

function PDFViewer() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {/* Left image */}
      <img
        className="ImageLeft"
        style={{ width: '30%', height: '100%', transform: 'rotate(-0.50deg)', transformOrigin: '0 0' }}
        src={Left}
        alt="Left Image"
      />

      {/* Center image */}
      <img
        className="ImageCenter"
        style={{ width: '30%', height: '100%', transform: 'rotate(-0.50deg)', transformOrigin: '0 0' }}
        src={menu}
        alt="Menu"
      />

      {/* Right image */}
      <img
        className="ImageRight"
        style={{ width: '30%', height: '100%', transform: 'rotate(-0.50deg)', transformOrigin: '0 0' }}
        src={Right}
        alt="Right Image"
      />
    </div>
  );
}

export default PDFViewer;
