import React from "react";
import jtphoto from "../img/JT-photo.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

function AboutPage() {
  return (
    <div id="about" className="container-fluid about-container">
      <div className="row">
        <div className="col-lg-4">
          <AnimationOnScroll animateIn="animate__fadeIn">
            <img src={jtphoto} className="about-img" alt="JT"></img>
          </AnimationOnScroll>
        </div>
        <div className="col-lg-8">
          <AnimationOnScroll animateIn="animate__fadeIn">
            <h2 className="about-title">About Me</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn">
            <p className="about-content sub-header">
              Hi! I am Jacques, a front end developer passionate about combining
              creativity with my analytical and detailed oriented mindset to
              create an enjoyable and user friendly experience for web users. I
              am a determined and productive web developer dedicated to
              delivering superior websites for my clientele.
            </p>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
