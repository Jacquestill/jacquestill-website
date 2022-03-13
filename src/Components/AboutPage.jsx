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
            <h2 className="about-title">Hello. My name is Jacques.</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn">
            <p className="about-content sub-header">
              I am a Front-End Developer, continuously studying to master my
              skills as a developer. I am based in South- Korea. I am passionate
              about combining creativity with my analytical and detailed
              oriented mindset to create an enjoyable and user friendly
              experience for web users. I am currently looking for opportunities
              to grow in this industry and becoming a Full-Stack Developer in
              the future.
            </p>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
