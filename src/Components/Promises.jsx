import React from "react";
import PromiseCard from "./PromiseCard";
import promise from "../promise";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Promises() {
  function createPromiseCard(promiseItem, index) {
    return (
      <PromiseCard
        key={index}
        srcImg={promiseItem.img}
        title={promiseItem.title}
        content={promiseItem.content}
      />
    );
  }

  return (
    <div id="promises" className="container-fluid promises-container">
      <AnimationOnScroll animateIn="animate__fadeIn">
        <h2 className="promises-title">My Promises</h2>
        <div className="row">{promise.map(createPromiseCard)}</div>
      </AnimationOnScroll>
    </div>
  );
}

export default Promises;
