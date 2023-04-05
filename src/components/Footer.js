import React from "react";
import FooterCSS from "./Footer.module.css";

function Footer() {
  return (
    <div className={FooterCSS.wrapper}>
      <div className={FooterCSS.flexParent}>
        <div className={FooterCSS.flexChild}>
          <img />
        </div>
        <div className={FooterCSS.flexChild}>
          <div className={FooterCSS.bottomNav}>
            <div>
              <p>
                <a>Menu</a>
              </p>
            </div>
            <div>
              <p>
                <a>Order online</a>
              </p>
            </div>
            <div>
              <p>
                <a>Table reservation</a>
              </p>
            </div>
            <div>
              <p>
                <a>About us</a>
              </p>
            </div>
            <div>
              <p>
                <a>Plans for the future</a>
              </p>
            </div>
            <div>
              <p>
                <a>Want to open a Franchise?</a>
              </p>
            </div>
          </div>
        </div>
        <div className={FooterCSS.flexChild}>
          <p>Copyright Little Lemon 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
