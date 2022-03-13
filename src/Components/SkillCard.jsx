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
      className="skill-card col-lg-2 col-md-4 shadow p-3 mb-5 rounded"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{
        backgroundColor: isMouseOver ? "#36353773" : "#e4e2e073",
      }}
    >
      <div className="skill-icon">{props.icon}</div>
      <h3 className="skill-title sub-header">{props.title}</h3>
    </div>
  );
}

export default SkillCard;
