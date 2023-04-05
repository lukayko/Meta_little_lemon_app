import React from "react";
import ChefSectionCSS from "./ChefSection.module.css";
import adrianIMG from "../assets/adrianphoto.jpg";
import signature from "../assets/signature.png";

function ChefSection() {
  return (
    <div className={ChefSectionCSS.wrapper}>
      <div className={ChefSectionCSS.leftContainer}>
        <img src={adrianIMG} className={ChefSectionCSS.chefPhoto} />
        <p>Adrian, Chef and Owner of the Little Lemon</p>
      </div>
      <div className={ChefSectionCSS.rightContainer}>
        <p>
          “You don't have to cook fancy or complicated masterpieces, just good
          food from fresh ingredients.”
        </p>
        <img src={signature} className={ChefSectionCSS.chefSignature} />
      </div>
    </div>
  );
}

export default ChefSection;
