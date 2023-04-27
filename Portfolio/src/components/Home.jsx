import React from "react";
import image from "../assets/dev.gif";
import "../styles/Home.css";

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
          <h1 className="home-text-h1">Hi, I'm Cristian Blanco</h1>
          <p className="home-text-p">
            I am a Full Stack developer with a focus on continuous learning and
            professional growth. I have worked on projects that span the entire
            aspect of web development, from building the frontend to
            implementing the backend. I strive to keep up with the latest market
            trends and technologies, and I am committed to continuing to learn
            and improve my skills. I have worked with technologies like
            React.js, Node.js, Express and PosgreSQL.
          </p>
        </div>
      </div>
  );
}
