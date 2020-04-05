import React, { useState, createContext } from "react";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Linea Práctica");
  const [qtyItemsCart, setQtyItemsCart] = useState(0);

  function addToCart(item) {
    const tmp = [...items];
    const found = items.find((ctxitem) => ctxitem.sku === item.sku);
    if (found) {
      found.quantity = found.quantity + 1;
    } else {
      item.quantity = 1;
      tmp.push(item);
    }
    setQtyItemsCart(qtyItemsCart + 1);
    setItems(tmp);
  }

  function subFromItemQty(item) {
    const tmp = [...items];
    const found = items.find((ctxitem) => ctxitem.sku === item.sku);
    if (found && found.quantity >= 1) {
      found.quantity = found.quantity - 1;
      setQtyItemsCart(qtyItemsCart - 1);
    }
    setItems(tmp);
  }

  function delItemFromCart(sku) {
    setItems(items.filter((item) => item.sku !== sku));
  }

  function vaciarCart() {
    setItems([]);
  }

  function changeFilter(filter) {
    setFilter(filter);
  }

  return (
    <CartContext.Provider
      value={{
        items: items,
        itemsCount: qtyItemsCart,
        addToCart,
        filter,
        changeFilter,
        delItemFromCart,
        vaciarCart,
        subFromItemQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
