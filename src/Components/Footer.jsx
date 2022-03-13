import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <p className="footer-text">Copyright Jacques Till ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
