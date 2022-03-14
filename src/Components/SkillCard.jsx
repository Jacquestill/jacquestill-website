import React, { useState } from "react";

function SkillCard(props) {
  const [isMouseOver, setMouseOut] = useState(false);

  function handleMouseOver() {
    setMouseOut(true);
  }
  function handleMouseOut() {
    setMouseOut(false);
  }

  return (
    <div
      className="skill-card col-lg-2 col-md-4 col-sm-6"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{
        backgroundColor: isMouseOver ? "#36353750" : "#e4e2e099",
      }}
    >
      <div className="skill-icon">{props.icon}</div>
      <h3 className="skill-title sub-header">{props.title}</h3>
    </div>
  );
}

export default SkillCard;
