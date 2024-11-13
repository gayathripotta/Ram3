import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <h2>Services</h2>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Link Up</h3>
          <p>Connect with people everywhere</p>
        </div>

        <div className="footer-section">
          <h4>Our Products</h4>
          <ul>
            {['Chat for Web', 'Chat for Mobile', 'Desktop App'].map(product => (
              <li key={product}><a href="#">{product}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4>Top Features</h4>
          <ul>
            {['Messaging', 'Voice & Video', 'Screen Sharing', 'Emojis', 'Group Chat'].map(feature => (
              <li key={feature}><a href="#">{feature}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            {['Help Center', 'Community', 'FAQs', 'Tutorials'].map(resource => (
              <li key={resource}><a href="#">{resource}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            {['About Us', 'Careers', 'Press', 'Contact Us'].map(info => (
              <li key={info}><a href="#">{info}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4>Favourite Things</h4>
          <ul>
            {['Dark Mode', 'Custom Themes', 'Quick Reactions', 'Stickers'].map(fav => (
              <li key={fav}><a href="#">{fav}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">©️ 2024 Link Up. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
