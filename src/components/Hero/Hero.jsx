import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-container" id="home">
      <div className="hero-content">
        <h2>
          Hello{" "}
          <img
            src="./assets/images/hand_icon.png"
            width={"80px"}
            height={"80px"}
            alt=""
          />
          , My name is{" "}
          <span style={{ color: "orangered" }}>Zekarias Kobota </span>
        </h2>
        <p>
          I am a Passionate Full Stack Developer | Transforming Ideas Into
          Seamless and visually Stunning Web Solutions.
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/node.png" alt="" />
          </div>
          <img src="./assets/images/me.png" alt="" />
        </div>
        <div>
          <div className="tech-icon">
            <img src="./assets/images/html.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/python.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/react.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/flutter.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/php.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
