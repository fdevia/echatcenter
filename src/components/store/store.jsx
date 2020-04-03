import React, { useContext } from "react";
import productsg from "../../data/products";
//import Cart from "../cart/cart";
import { CartContext } from "../cart/context";
import "./store.css";
export default function Store() {
  //const devReact = productsg.filter(item => item.categoria.includes("Linea Pactica"))
  /*
  const products = productsg.filter(
    item => item.categoria === "Linea Practica"
  );
  */
  const cartCtx = useContext(CartContext);
  var products; // = productsg;
  //cartCtx.changeFilter("Linea Práctica");
  //cartCtx.filter("Linea Práctica");
  if (cartCtx.filter !== "All") {
    products = productsg.filter(item => item.categoria === cartCtx.filter);
  } else {
    products = productsg;
    //cartCtx.changeFilter("Linea Practica");
  }
  return (
    <div>
      {products.map(product => (
        <div key={product.sku}>
          <div>
            <img
              src={`/images/${product.sku}.webp`}
              alt={product.name}
              width={200}
            />
          </div>
          <div className="name">{product.name}</div>
          <div>
            <button className="add" onClick={() => cartCtx.addToCart(product)}>
              Adicionar al carro
            </button>
          </div>
        </div>
      ))}
      {/*
      <div>
        <button onClick={() => cartCtx.changeFilter("Linea Practica")}>
          Activate Filter
        </button>
      </div>
      <div>
        <button onClick={() => cartCtx.changeFilter("All")}>
          Desactivate Filter
        </button>
      </div>*/}
    </div>
  );
}
