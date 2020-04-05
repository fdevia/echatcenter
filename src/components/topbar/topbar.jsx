import React, { useContext } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { CartContext } from "../cart/context";
import { useRef } from "react";

export default function TopBar() {
  const cartCtx = useContext(CartContext);
  const comboRef = useRef();
  var selectedValue;
  const Catalogo = [
    "Linea Práctica",
    "Linea Express",
    "Cortes Especiales",
    "Cortes Tradicionales",
    "Recortes y Visceras",
    "Todos",
  ];
  //const Add = catalogo.map((Add) => Add);

  let handleCatalogoChange = () => {
    cartCtx.changeFilter(comboRef.current.value);
  };

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
            value={cartCtx.filter}
            ref={comboRef}
            onChange={handleCatalogoChange}
            className="catalogofiltro"
          >
            {Catalogo.map((filtro, key) => (
              <option key={key} value={filtro}>
                {filtro}
              </option>
            ))}
          </select>
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
