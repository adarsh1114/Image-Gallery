import React from "react";
import './Header.css'; 

export default function Header() {
  return (
    <header id="home" className="HeaderSection"> 
      <div className="HeaderContainer"> 
        <h1>Official Home for Painting</h1>
        <p>Browse the iconic collection</p>
        <button>LEARN MORE</button>
        <div className="ScrollIndicator">
          <span>SCROLL</span>
          <img src="scroll-icon.png" alt="Scroll Icon" />
        </div>
      </div>
    </header>
  );
}
