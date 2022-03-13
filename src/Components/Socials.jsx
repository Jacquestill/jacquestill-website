import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

function Socials() {
  return (
    <div className="row socials">
      <div className="col">
        <a className="social" href="https://www.github.com/Jacquestill">
          <BsGithub />
        </a>
      </div>
      <div className="col">
        <a
          className="social"
          href="https://www.linkedin.com/in/jacques-till-44713013b"
        >
          <BsLinkedin />
        </a>
      </div>
      <div className="col">
        <a className="social" href="https://twitter.com/JacquesTill9">
          <BsTwitter />
        </a>
      </div>
    </div>
  );
}

export default Socials;
