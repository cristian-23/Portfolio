import React from "react";
import image from "../assets/dev.gif";
import "../styles/Home.css";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="home-conteiner-image-text">
      <div className="conteiner-image">
        <img
          className="home-image"
          src={image}
          alt="image-portfolio"
          height="500"
          width="500"
        />
      </div>
      <div className="conteiner-text">
        <div className="home-text-h1">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Hi,",
              1000,
              "I'm Cristian Blanco",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "1.5em" }}
            repeat={1}
          />
        </div>
        <p className="home-text-p">
          I am a Full Stack developer with a focus on continuous learning and
          professional growth. I have worked on projects that span the entire
          aspect of web development, from building the frontend to implementing
          the backend. I strive to keep up with the latest market trends and
          technologies, and I am committed to continuing to learn and improve my
          skills.
        </p>
      </div>
    </div>
  );
}
