import React, { useContext } from "react";
import TopBar from "../topbar/topbar";
import { CartContext } from "../cart/context";

import "./layout.css";

export default function Layout({ children, title }) {
  document.getElementsByTagName("title")[0].innerHTML = title;
  const cartCtx = useContext(CartContext);
  //console.log(cartCtx.filter);
  return (
    <>
      <TopBar />
      <div style={{ marginLeft: "2%" }} className="wrapper">
        <h1 className="titulo">
          {title} {" / "}
          {cartCtx.filter}
        </h1>
        {children}
      </div>
    </>
  );
}
