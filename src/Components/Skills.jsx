import React from "react";
import SkillCard from "./SkillCard";
import skill from "../skill";
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
          Coding Languages & Frameworks
        </h3>
        <div className="skill-container row">{skill.map(createSkillCard)}</div>
      </AnimationOnScroll>
    </div>
  );
}

export default Skills;
