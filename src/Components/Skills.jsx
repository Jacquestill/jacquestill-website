import React from "react";
import SkillCard from "./SkillCard";
import frontendSkills from "../frontendSkills";
import backendSkills from "../backendSkills";
import generalSkills from "../generalSkills";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Skills() {
  function createSkillCard(skillItem, index) {
    return (
      <SkillCard key={index} icon={skillItem.icon} title={skillItem.title} />
    );
  }

  return (
    <div id="skills" className="container-fluid">
      <AnimationOnScroll animateIn="animate__fadeIn">
        <h2 className="skill-header">My Skills & Toolset</h2>

        <h3 className="skill-subhead sub-header">
          Front-End Languages & Frameworks
        </h3>
        <div className="skill-container">
          {frontendSkills.map(createSkillCard)}
        </div>

        <h3 className="skill-subhead sub-header">
          Back-End Languages & Frameworks
        </h3>
        <div className="skill-container">
          {backendSkills.map(createSkillCard)}
        </div>

        <h3 className="skill-subhead sub-header">General Toolset</h3>
        <div className="skill-container">
          {generalSkills.map(createSkillCard)}
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default Skills;
