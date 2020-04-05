import React, { useContext } from "react";
import productsg from "../../data/products";
import { CartContext } from "../cart/context";
import "./store.css";
import carIcon from "./shopping-cart.svg";
export default function Store() {
  const cartCtx = useContext(CartContext);
  var products = productsg.filter((item) => item.categoria === cartCtx.filter);
  return (
    <div>
      {products.map((product) => (
        <div key={product.sku}>
          <div style={{ marginTop: "1%" }}>
            <img
              src={`/images/${product.sku}.webp`}
              alt={product.name}
              width={200}
            />
          </div>
          <div style={{ marginTop: "1%" }} className="name">
            {product.name}
          </div>
          <div style={{ marginTop: "1%" }}>
            <button className="add" onClick={() => cartCtx.addToCart(product)}>
              <img className="carIcon" src={carIcon} alt="shopping cart icon" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
