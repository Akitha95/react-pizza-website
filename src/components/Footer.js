import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="http://instagram.com">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="http://twitter.com.com">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="http://facebook.com">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="http://linkedin.com">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <p>&copy; 2023 vitopizza.com</p>
    </div>
  );
}

export default Footer;
