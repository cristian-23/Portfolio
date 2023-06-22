import React from "react";
import { Icon } from '@iconify/react';
import "../styles/About.css"


export default function About() {
  return (
   <> 
   <div style={{ display: "flex", marginTop: "7%", justifyContent:"center"}}>
      <div
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "center",
          alignItems:"center",
        }}
      >
        <img
        style={{borderRadius:"200px", padding:"10px 0px 10px 0px"}}
          src="https://conceptodefinicion.de/wp-content/uploads/2016/10/Programaci%C3%B3n-Inform%C3%A1tica2.jpg"
          alt=""
          width="250"
          height="250"
        />
      </div>
      <div style={{ width: "40%", display:"flex", alignItems:"center", color:"white", fontSize: "15px",
    letterSpacing: "2px",}}>
        <p>
          Having graduated from a bootcamp of +800 hours, I feel that I have the
          basic knowledge to work on a real project. I plan to continue learning
          more about programming, since it is something that I am very
          passionate about, I would like to work for a company, learn with them
          and boost my career as a programmer.Currently, I like the Frontend
          better.
        </p>
      </div>
    </div>
    <div style={{color:"white", textAlign:"center", marginTop:"3%"}}>
    <h1>TECHNOLOGIES</h1>
    <div >
    <Icon icon="vscode-icons:file-type-html" className="icon-about" />
    <Icon icon="vscode-icons:file-type-css" className="icon-about"/>
    <Icon icon="logos:javascript" className="icon-about" />
    <Icon icon="logos:react" className="icon-about" />
    <Icon icon="logos:redux" className="icon-about"/>
    </div>
    <div>
    <Icon icon="logos:postgresql" className="icon-about"/>
    <Icon icon="logos:git" className="icon-about"/>
    <Icon icon="logos:sequelize" className="icon-about"/>
    <Icon icon="logos:vitejs" className="icon-about"/>
    <Icon icon="logos:nodejs" className="icon-about"/>
    </div>
  </div>
  </>
  );
}
