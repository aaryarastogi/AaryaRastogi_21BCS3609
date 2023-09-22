import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Foodies</h3> 
            <p>Thanks for visiting in our website 😊</p>
          </div>
          <div className="footer-column">
            <ul>
              <li>About US</li>
              <li>Recipe</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact US</h3>
            <ul>
              <li>Phone number: 8273537557 ,9389898837</li>
              <li>its.aarya.rastogi.0110@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <hr/>
      <h4>Copyright @{new Date().getFullYear()} Foodies</h4>
    </footer>
  );
}

export default Footer;
