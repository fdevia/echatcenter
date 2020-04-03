import React from "react";
import TopBar from "../topbar/topbar";
import { CartContext } from "../cart/context";

import "./layout.css";

export default function Layout({ children, title }) {
  document.getElementsByTagName("title")[0].innerHTML = title;

  return (
    <>
      <TopBar />
      <div className="wrapper">
        <h1 className="titulo">{title}</h1>
        <h1 className="titulo">{"sssssss " + CartContext.filter}</h1>
        {children}
      </div>
    </>
  );
}
