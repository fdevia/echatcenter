import React, { useContext } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { CartContext } from "../cart/context";
import { useRef } from "react";
import carIcon from "./shopping-cart.svg";

export default function TopBar() {
  const cartCtx = useContext(CartContext);
  const comboRef = useRef();
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
        <div className="section">
          <Link to="/">
            <img
              className="logo"
              src={`/images/PolloAndinoLogo.webp`}
              alt={"name"}
              width={100}
            />
          </Link>
        </div>
        <div className="section centro">
          <h4 className="seleccioneCategoria">Categoria: </h4>
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
          <div className="rigthSection">
            <Link className="myLink" to="/viewcart">
              <div className="carContainer">
                <img
                  className="carButton"
                  src={carIcon}
                  alt={"name"}
                  width={30}
                />
                <div className="carNumberContainer">
                  <p className="carNumber">{numItems}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
