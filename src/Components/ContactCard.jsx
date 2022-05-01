import React from "react";
import ContactLogo from "./ContactLogo";
import ContactInput from "./ContactInput";

function ContactCard() {
  return (
    <div className="contact-container row">
      <div className="contact-form col-lg-6">
        <form
          action="https://formsubmit.co/jacquestill9@icloud.com"
          method="post"
        >
          <ContactInput name="Name" type="text" />
          <ContactInput name="Email" type="email" />
          <div className="contact-input message-box">
            <input type="text" name="message" required />
            <span>Your Message</span>
          </div>
          <button className="contact-btn">Send</button>
        </form>
        <p className="email-text">or email me at jacquestill9@icloud.com</p>
      </div>
      <ContactLogo />
    </div>
  );
}

export default ContactCard;
