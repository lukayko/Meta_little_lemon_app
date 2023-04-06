import React from "react";
import { Link } from "react-router-dom";
import HeaderCSS from "./Header.module.css";
import logo from "../assets/Logo.svg";

function Header() {
  return (
    <div className={HeaderCSS.navbar_wrapper}>
      <div className={HeaderCSS.logo}>
        <Link to="/">
          <img src={logo} alt="Logo of the Little Lemon Restaurant" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/online-order">Order online</Link>
          </li>
          <li>
            <Link to="/table-reservation">Table reservation</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
