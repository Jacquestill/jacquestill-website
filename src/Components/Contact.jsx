import React from "react";
import ContactCard from "./ContactCard";

function Contact() {
  return (
    <div id="contact" className="container-fluid">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-sub">Let's get in touch.</p>
      <ContactCard />
    </div>
  );
}

export default Contact;
