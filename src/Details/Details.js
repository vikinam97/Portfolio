import React from "react";
import "./Details.css";
import Skill from "../Skill/Skill";
import Work from "../Work/Work.js";

import angularImg from "../icons/angular.png";
import nodeImg from "../icons/node.png";
import reactImg from "../icons/reactjs.jpg";
import htmlImg from "../icons/html.png";
import cssImg from "../icons/css.png";
import jsImg from "../icons/js.png";
import dockerImg from "../icons/docker.png";
import cppImg from "../icons/cpp.png";
import gitImg from "../icons/git_github.jpeg";
import flutterImg from "../icons/flutter.png";
import amazonImg from "../icons/amazon.png";

function Details() {
  return (
    <div className="details">
      <div className="details__header">My Skills</div>
      <div className="details__skillSet">
        <Skill img={angularImg} points={80}></Skill>
        <Skill img={nodeImg} points={100}></Skill>
        <Skill img={reactImg} points={60}></Skill>
        <Skill img={htmlImg} points={100}></Skill>
        <Skill img={cssImg} points={100}></Skill>
        <Skill img={jsImg} points={100}></Skill>
        <Skill img={dockerImg} points={60}></Skill>
        <Skill img={cppImg} points={60}></Skill>

        <Skill img={flutterImg} points={60}></Skill>
        <Skill img={gitImg} points={100}></Skill>
      </div>

      <div className="details__header">My Work</div>
      <div className="details__skillSet">
        <Work img={'http://pngimg.com/uploads/amazon/amazon_PNG21.png'}></Work>
      </div>
    </div>
  );
}

export default Details;
