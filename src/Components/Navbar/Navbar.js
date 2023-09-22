import React, { useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar=()=>{
  const handleHome=()=>{
    const element=document.getElementById("home");
    if(element){
      element.scrollIntoView({behavior:"smooth"})
    }
  }
  const handleAbout=()=>{
    const element=document.getElementById("about");
    if(element){
      element.scrollIntoView({behavior:"smooth"})
    }
  }
  const handleRecipe=()=>{
    const element=document.getElementById("recipe");
    if(element){
      element.scrollIntoView({behavior:"smooth"})
    }
  }
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <nav className="navbar">
      <div className="logo"><a href="/" style={{textDecoration:'none' , color:'white'}}>Foodies</a></div>
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="/" onClick={handleHome}>Home</a></li>
        <li><a onClick={handleRecipe}>Recipe</a></li>
        <li><a onClick={handleAbout}>About</a></li>
       <button href="/login" className="login">Login</button>
      </ul>
    </nav>
    )
}

export default Navbar;