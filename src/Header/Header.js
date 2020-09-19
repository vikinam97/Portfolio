import React, { useEffect } from "react";
import "./Header.css";
import Particle from "../particle";

function Header() {
  let particleList = [];
  let ctx;
  let c;
  let mouse = {};
  function resetCanvas() {
    ctx.clearRect(0, 0, c.width, c.height);
  }
  function animate() {
    requestAnimationFrame(animate);
    resetCanvas();
    particleList.forEach((particle) => {
      particle.update(particleList, mouse);
    });
  }

  useEffect(() => {
    // To intialize the canvas for full width
    c = document.getElementById("header__canvas");
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    ctx = c.getContext("2d");
    let i = 60,
      j = 60;

    window.addEventListener("mousemove", function (event) {
      // console.log("mouse mouse mouse", event);
      mouse = {
        x: event.clientX,
        y: event.clientY,
      };
    });

    // to create the gid of particles
    while (j < window.innerHeight - 60) {
      i = 60;
      while (i < window.innerWidth - 60) {
        particleList.push(
          new Particle({
            x: i + 15,
            y: j + 15,
            tag: c,
          })
        );
        i += 40;
      }
      j += 40;
    }

    console.log(particleList);

    return animate();
  });
  return (
    <div className="header">
      <canvas id="header__canvas"></canvas>
      <div class="header__content">
        <div className="header__text">
          I am <span>Vignesh Raj</span>,
        </div>
        <div className="header__text">
          I Provide quality.
          <br />
          That's the best and my kind of advertising..
        </div>
      </div>
    </div>
  );
}

export default Header;
