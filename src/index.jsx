import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CartProvider from "./components/cart/context";
import ProductsPage from "./pages/products/products";
import ViewCartPage from "./pages/viewcart/viewcart";

import "./styles.css";

ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
      <Switch>
        <Route exact path="/" component={ProductsPage} />
        <Route exact path="/viewcart" component={ViewCartPage} />
      </Switch>
    </CartProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
