import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-content">
      <div className="icon-content">
        <span>
          <FontAwesomeIcon icon={faFaceFrown}></FontAwesomeIcon>
        </span>
        <span>
          <FontAwesomeIcon icon={faFaceFrown}></FontAwesomeIcon>
        </span>
        <span>
          <FontAwesomeIcon icon={faFaceFrown}></FontAwesomeIcon>
        </span>
        <span>
          <FontAwesomeIcon icon={faFaceFrown}></FontAwesomeIcon>
        </span>
      </div>
      <div className="copyright">
        <small>All Rights Reserved By © Crypto Cafe | 2022-2026</small>
      </div>
    </div>
  );
};

export default Footer;
