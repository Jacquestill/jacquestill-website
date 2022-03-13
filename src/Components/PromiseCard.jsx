import React from "react";
import PromiseImg from "./PromiseImg";

function PromiseCard(props) {
  return (
    <div className="col-lg-6">
      <PromiseImg srcImg={props.srcImg} name={props.title} />
      <p className="promises-content">{props.content}</p>
    </div>
  );
}

export default PromiseCard;
