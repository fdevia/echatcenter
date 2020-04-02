import React, { useContext } from "react";
import "./topbar.css";

import { Link } from "react-router-dom";

import { CartContext } from "../cart/context";

export default function TopBar() {
  const cartCtx = useContext(CartContext);

  const numItems = cartCtx.itemsCount;
  return (
    <div className="layout top-bar">
      <div className="wrapper">
        <div className="section">Pollo Andino S.A. Domicilios</div>
        <div className="section">Filtro</div>
        <div className="section">
          <input type="text" id="lname" name="lname"></input>
        </div>
        <div className="section">
          <Link to="/">Productos</Link> |{" "}
          <Link to="/viewcart">Ver Carro ({numItems})</Link>
        </div>
      </div>
    </div>
  );
}
