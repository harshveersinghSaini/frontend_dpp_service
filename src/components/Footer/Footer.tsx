import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">© 2025 DTDCtaxgateway. All rights reserved.
        
      </div>
      <div className="footer__right">
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
        <a href="/security">Security</a>
      </div>
    </footer>
  );
};

export default Footer;
