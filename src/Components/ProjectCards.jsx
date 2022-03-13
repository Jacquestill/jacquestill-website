import React from "react";
import ProjectImg from "./ProjectImg";
import { BsGithub } from "react-icons/bs";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <figure className="card-thumb">
        <ProjectImg imgUrl={props.imgUrl} name={props.name} />
        <figcaption className="card-caption">
          <h2 className="card-title">{props.name}</h2>
          <p className="card-content">{props.content}</p>
          <a href={props.link} className="link-button">
            Visit Website
          </a>
          <a href={props.code} className="code-button">
            <BsGithub />
          </a>
        </figcaption>
      </figure>
    </div>
  );
}

export default ProjectCard;
