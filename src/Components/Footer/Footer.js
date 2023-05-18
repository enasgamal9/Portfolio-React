import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Btn from '../../SharedUI/Btn/Btn'

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#15295F' }}>
      <div className="footer-column">
        <h3>GET IN TOUCH</h3>
        <p><FontAwesomeIcon icon={faEnvelope} /> enas@gmail.com</p>
        <p><FontAwesomeIcon icon={faPhone} /> +01255220</p>
      </div>
      <div className="footer-column">
      <Btn content="Contact Me"/>
      </div>
      <div className="footer-column">
        <div className="social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
        <p>&copy; 2023, Enas</p>
      </div>
    </footer>
  );
};

export default Footer;