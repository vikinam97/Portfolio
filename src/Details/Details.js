import React from "react";
import "./Details.css";
import angularImg from "../icons/angular.png";
import nodeImg from "../icons/node.png";
import reactImg from "../icons/reactjs.jpg";
import htmlImg from "../icons/html.png";
import cssImg from "../icons/css.png";
import jsImg from "../icons/js.png";
import dockerImg from "../icons/docker.png";
import cppImg from "../icons/cpp.png";

function Details() {
  return (
    <div className="details">
      <div className="details__header">My Skills</div>
      <div className="details__skillSet">
        <div className="details__skill">
          <div className="details__skillIcon">
            <img src={angularImg} alt="" />
          </div>
          <div className="details__skillPoints">
            <div className="progressContainer">
              <div className="progress80"></div>
            </div>
          </div>
        </div>
        <div className="details__skill">
          <div className="details__skillIcon">
            <img src={nodeImg} alt="" />
          </div>
          <div className="details__skillPoints">
            <div className="progressContainer">
              <div className="progress100"></div>
            </div>
          </div>
        </div>
        <div className="details__skill">
          <div className="details__skillIcon">
            <img src={reactImg} alt="" />
          </div>
          <div className="details__skillPoints">
            <div className="progressContainer">
              <div className="progress60"></div>
            </div>
          </div>
        </div>
        <div className="details__skill">
          <div className="details__skillIcon">
            <img src={htmlImg} alt="" />
          </div>
          <div className="details__skillPoints">
            <div className="progressContainer">
              <div className="progress100"></div>
            </div>
          </div>
        </div>
        <div className="details__skill">
          <div className="details__skillIcon">
            <img src={cssImg} alt="" />
          </div>
          <div className="details__skillPoints">
            <div className="progressContainer">
              <div className="progress100"></div>
            </div>
          </div>
        </div>
        <div className="details__skill">
          <div className="details__skillIcon">
            <img src={jsImg} alt="" />
          </div>
          <div className="details__skillPoints">
            <div className="progressContainer">
              <div className="progress80"></div>
            </div>
          </div>
        </div>
        <div className="details__skill">
          <div className="details__skillIcon">
            <img src={dockerImg} alt="" />
          </div>
          <div className="details__skillPoints">
            <div className="progressContainer">
              <div className="progress60"></div>
            </div>
          </div>
        </div>
        <div className="details__skill">
          <div className="details__skillIcon">
            <img src={cppImg} alt="" />
          </div>
          <div className="details__skillPoints">
            <div className="progressContainer">
              <div className="progress80"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
