import React from "react";
import Socials from "./Socials";
import standing from "../img/Standing.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

function HomePage() {
  return (
    <div>
      <div id="home" className=" container-fluid row home">
        <div className="col-lg-9">
          <AnimationOnScroll animateIn="animate__fadeIn">
            <h1 className="home-title">Jacques Till</h1>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn">
            <h3 className="home-subtitle sub-header">Full-Stack Developer</h3>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn">
            <p className="home-content sub-header">
              Helping people realize their techno dreams by creating websites
              that are innovative and intuitive.
            </p>
          </AnimationOnScroll>
        </div>
        <div className="col-lg-2">
          <img className="home-img" src={standing} alt="standing-logo" />
        </div>
      </div>
      <Socials />
    </div>
  );
}

export default HomePage;
