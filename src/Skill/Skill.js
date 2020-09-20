import React from "react";
import "./Skill.css";

function Skill({ img, points }) {
  return (
    <div className="skill">
      <div className="skill__icon">
        <img src={img} alt="" />
      </div>
      <div className="skill__points">
        <div className="skill__pointsContainer">
          <div style={{ width: points + "%" }}></div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
