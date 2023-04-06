import React from "react";
import { Link } from "react-router-dom";
import HeroSectionCSS from "./HeroSection.module.css";
import saladIMG from "../assets/greek_salad.jpg";

function HeroSection() {
  return (
    <div className={HeroSectionCSS.wrapper}>
      <div className={HeroSectionCSS.container}>
        <div className={HeroSectionCSS.child1}>
          <h1>Enjoy our bestsellers!</h1>
          <div className={HeroSectionCSS.btn}>
            <button>
              <Link to="/menu">Order now</Link>
            </button>
          </div>
        </div>
        <div className={HeroSectionCSS.child}>
          <img src={saladIMG} alt="salad" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
