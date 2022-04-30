import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import logo from "../img/JT-logo.png";
import { BsFillPersonLinesFill, BsShieldFillCheck } from "react-icons/bs";
import { AiFillFund, AiFillProject, AiFillPhone } from "react-icons/ai";
import { HiDocumentAdd } from "react-icons/hi";
import resume from "../img/JT - resume.pdf";

function Navigation() {
  return (
    <div id="navbar">
      <Navbar expand="lg" collapseOnSelect="true" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center"
          >
            <Nav>
              <Nav.Link className="nav-item" href="#about">
                <BsFillPersonLinesFill /> About
              </Nav.Link>
              <Nav.Link className="nav-item" href="#skills">
                <AiFillFund /> Skills
              </Nav.Link>
              <Nav.Link className="nav-item" href="#promises">
                <BsShieldFillCheck /> Promises
              </Nav.Link>
              <Nav.Link className="nav-item" href="#projects">
                <AiFillProject /> Projects
              </Nav.Link>
              <Nav.Link className="nav-item" href="#contact">
                <AiFillPhone /> Contact
              </Nav.Link>
              <Nav.Link className="nav-item" href={resume} download>
                <HiDocumentAdd /> Download CV
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
