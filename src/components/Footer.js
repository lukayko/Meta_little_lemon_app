import React from "react";
import { Link } from "react-router-dom";
import FooterCSS from "./Footer.module.css";
import logo from "../assets/small_logo.png";

function Footer() {
  return (
    <div className={FooterCSS.wrapper}>
      <div className={FooterCSS.flexParent}>
        <div className={FooterCSS.flexChild}>
          <a href="#">
            <img src={logo} alt="The Little Lemon" />
          </a>
        </div>
        <div className={FooterCSS.flexChild}>
          <nav className={FooterCSS.bottomNav}>
            <div>
              <Link to="/menu">Menu</Link>
            </div>
            <div>
              <Link to="/online-order">Online order</Link>
            </div>
            <div>
              <Link to="/table-reservation">Table reservation</Link>
            </div>
            <div>
              <Link to="/about-us">About us</Link>
            </div>
            <div>
              <Link to="/our-future">Plans for the future</Link>
            </div>
            <div>
              <Link to="/franchise-offer">Want to open a Franchise?</Link>
            </div>
          </nav>
        </div>
        <div className={FooterCSS.flexChild}>
          <p className={FooterCSS.copyText}>Copyright Little Lemon 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
