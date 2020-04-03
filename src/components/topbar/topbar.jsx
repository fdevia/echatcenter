import React, { useContext } from "react";
import "./topbar.css";

import { Link } from "react-router-dom";

import { CartContext } from "../cart/context";

export default function TopBar() {
  const cartCtx = useContext(CartContext);
  var selectedValue;
  function filterChange(e) {
    console.log(e.target.value);
    selectedValue = e.target.value;
    switch (e.target.value) {
      case "1":
        console.log("first " + e.target.value);
        cartCtx.changeFilter("Linea Práctica");
        break;
      case "2":
        console.log("bbbb " + e.target.value);
        cartCtx.changeFilter("Linea Express");
        break;
      case "3":
        cartCtx.changeFilter("Linea Práctica");
        break;
      case "4":
        cartCtx.changeFilter("Cortes Tradicionales");
        break;
      case "5":
        cartCtx.changeFilter("Recortes y Visceras");
        break;
      case "6":
        cartCtx.changeFilter("Todos");
        break;
      default:
        cartCtx.changeFilter("Linea Práctica");
        break;
    }

    //cartCtx.changeFilter(e.target.label);
    //cartCtx.filter
    //console.log(optionSelected.value);
    //const name = this.name;
    //const value = optionSelected.value;
    //const label = optionSelected.label;
  }
  const numItems = cartCtx.itemsCount;
  return (
    <div className="layout top-bar">
      <div className="wrapper">
        <div>
          <img src={`/images/PolloAndinoLogo.webp`} alt={"name"} width={100} />
        </div>
        <div className="section">Pollo Andino S.A. Domicilios</div>
        <div className="section">
          <label>Seleccione Categoria: </label>
          <select
            id="select-input"
            onChange={e => filterChange(e)}
            //onChange={() =>
            // cartCtx.changeFilter({ selectValue: e.target.value })
            //}
            value={selectedValue}
          >
            <option value="1">Linea Práctica</option>
            <option value="2">Linea Express</option>
            <option value="3">Cortes Especiales</option>
            <option value="4">Cortes Tradicionales</option>
            <option value="5">Recortes y Visceras</option>
            <option value="6">Todos</option>
          </select>
          {/*<input type="text" id="lname" name="lname"></input>*/}
        </div>
        <div className="section">
          <Link to="/">Productos</Link> |{" "}
          <img src={`/images/PolloAndinoCart.png`} alt={"name"} width={40} />
          <Link to="/viewcart">Ver Carro ({numItems})</Link>
        </div>
      </div>
    </div>
  );
}
