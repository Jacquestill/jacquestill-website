import React from "react";

function ContactInput(props) {
  return (
    <div className="contact-input">
      <input type={props.type} name={props.name} required />
      <span>{props.name}</span>
    </div>
  );
}

export default ContactInput;
