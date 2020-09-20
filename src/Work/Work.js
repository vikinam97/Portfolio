import React from "react";
import "./Work.css";

function Work({ img }) {
  return (
    <div className="work">
      <img src={img} alt="" />
      <div className="work__footer">
        Amazon Clone {"("}React + Redux{")"}
      </div>
    </div>
  );
}

export default Work;
