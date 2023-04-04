import React from "react";
import HeroSectionCSS from "./HeroSection.module.css";
import saladIMG from "../assets/greek_salad.jpg";

function HeroSection() {
  return (
    <div className={HeroSectionCSS.wrapper}>
      <div>
        <h1>test</h1>
      </div>
      <div>
        <img src={saladIMG} />
      </div>
    </div>
  );
}

export default HeroSection;
