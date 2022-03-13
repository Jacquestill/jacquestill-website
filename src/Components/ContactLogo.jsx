import React from "react";
import logo from "../img/Sitting.png";
import Socials from "./Socials";

function ContactLogo() {
  return (
    <div className="col-lg-6 logo-container">
      <img className="contact-img" src={logo} alt="logo-img"></img>
      <Socials />
    </div>
  );
}

export default ContactLogo;
