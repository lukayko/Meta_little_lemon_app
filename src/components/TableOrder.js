import React from "react";
import { Link } from "react-router-dom";
import TableOrCSS from "./TableOrder.module.css";
import restaurant from "../assets/restaurant.jpg";

function TableOrder() {
  return (
    <div className={TableOrCSS.wrapper}>
      <div className={TableOrCSS.container}>
        <div className={TableOrCSS.child1}>
          <h1>
            Let’s experience the best restaurant atmosphere you’ve ever had!
          </h1>
          <div className={TableOrCSS.btn}>
            <button>
              <Link to="/table-reservation">Book a table</Link>
            </button>
          </div>
        </div>
        <div className={TableOrCSS.child}>
          <img src={restaurant} alt="Little Lemon Restaurant" />
        </div>
      </div>
    </div>
  );
}

export default TableOrder;
