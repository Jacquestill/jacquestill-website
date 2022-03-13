import React from "react";
import ProjectCard from "./ProjectCards";
import project from "../project";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Projects() {
  function createProjectCards(projectItem, index) {
    return (
      <ProjectCard
        key={index}
        name={projectItem.name}
        content={projectItem.content}
        imgUrl={projectItem.imgUrl}
        link={projectItem.link}
        code={projectItem.code}
      />
    );
  }

  return (
    <div id="projects" className="container-fluid">
      <AnimationOnScroll animateIn="animate__fadeIn">
        <h2 className="projects-title">My Projects</h2>
        <div className="project-container">
          {project.map(createProjectCards)}
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default Projects;
