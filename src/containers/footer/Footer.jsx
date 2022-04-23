import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others?</h1>
      </div>
      
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>React Skill Showcase by Isaak Mkrtitchian</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p><a href="https://www.mkrwebconsulting.de/">Homepage</a></p>
          <p><a href="https://www.mkrwebconsulting.de/projekte">Work</a></p>
          <p><a href="https://www.linkedin.com/in/isaak-mkrtitchian/">LinkedIn</a></p>
          <p><a href="https://github.com/mkrwebconsulting">GitHub</a></p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Contact Me</h4>
          <p><a href="mailto:isaak@mkrwebconsulting.de">isaak@mkrwebconsulting.de</a></p>
          <p><a href="tel:+491725731482">Call me!</a></p>
          
        </div>

      </div>

      <div className="gpt3__footer-copyright">
        <p>© 2022 Isaak Mkrtitchian / <a href="https://www.mkrwebconsulting.de">MKR Webconsulting</a></p>
      </div>
    </div>
  )
}

export default Footer;