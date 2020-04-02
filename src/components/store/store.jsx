import React, { useContext } from "react";
import productsg from "../../data/products";
//import Cart from "../cart/cart";
import { CartContext } from "../cart/context";

export default function Store() {
  //const devReact = productsg.filter(item => item.categoria.includes("Linea Pactica"))
  /*
  const products = productsg.filter(
    item => item.categoria === "Linea Practica"
  );
  */
  const cartCtx = useContext(CartContext);
  var products; // = productsg;
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
              src={`/images/${product.sku}.jpg`}
              alt={product.name}
              width={50}
            />
          </div>
          <div>{product.name}</div>
          <div>
            <button onClick={() => cartCtx.addToCart(product)}>
              Add to cart
            </button>
          </div>
        </div>
      ))}
      <div>
        <button onClick={() => cartCtx.changeFilter("Linea Practica")}>
          Activate Filter
        </button>
      </div>
      <div>
        <button onClick={() => cartCtx.changeFilter("All")}>
          Desactivate Filter
        </button>
      </div>
    </div>
  );
}
