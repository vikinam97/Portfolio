import React from "react";
import "./Footer.css";
import firebaseImg from "../icons/firebase.png";
import reactImg from "../icons/react.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__title">Powered By</div>
      <div className="footer__icons">
        <img src={firebaseImg} alt="" />
        <img src={reactImg} alt="" />
      </div>
    </div>
  );
}

export default Footer;
