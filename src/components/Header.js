import React from "react";
import HeaderCSS from "./Header.module.css";
import logo from "../assets/Logo.svg";

function Header() {
  return (
    <div className={HeaderCSS.navbar_wrapper}>
      <div className={HeaderCSS.logo}>
        <img src={logo} />
      </div>
      <nav>
        <ul>
          <li>
            <a>Menu</a>
          </li>
          <li>
            <a>Order online</a>
          </li>
          <li>
            <a>Table reservation</a>
          </li>
          <li>
            <a>About us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
