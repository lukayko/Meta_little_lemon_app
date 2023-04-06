import React from "react";
import MenuCSS from "./Menu.module.css";
import fish from "../assets/fish_food.jpg";
import salad from "../assets/greek_salad.jpg";
import smallFood from "../assets/restauranfood.jpg";
import dessert from "../assets/lemon_dessert.jpg";

function Menu() {
  return (
    <div className={MenuCSS.wrapper}>
      <div>
        <h1 className={MenuCSS.header}>Explore our menu</h1>
      </div>
      <div className={MenuCSS.flexParent}>
        <div className={MenuCSS.flexChild}>
          <img src={fish} className={MenuCSS.imgSelector} alt="fish food" />
          <h4>Fish</h4>
        </div>
        <div className={MenuCSS.flexChild}>
          <img src={salad} className={MenuCSS.imgSelector} alt="salad" />
          <h4>Salads</h4>
        </div>
        <div className={MenuCSS.flexChild}>
          <img
            src={smallFood}
            className={MenuCSS.imgSelector}
            alt="spécialités of Little Lemon"
          />
          <h4>Spécialités</h4>
        </div>
        <div className={MenuCSS.flexChild}>
          <img src={dessert} className={MenuCSS.imgSelector} alt="desserts" />
          <h4>Desserts</h4>
        </div>
      </div>
    </div>
  );
}

export default Menu;
