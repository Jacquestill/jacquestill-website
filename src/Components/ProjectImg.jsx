import React from "react";

function ProjectImg(props) {
  return (
    <img className="project-img" src={props.imgUrl} alt={props.name}></img>
  );
}

export default ProjectImg;
