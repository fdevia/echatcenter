import React, { useState, createContext } from "react";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("All");
  const [qtyItemsCart, setQtyItemsCart] = useState(0);

  function addToCart(item) {
    const tmp = [...items];
    const found = items.find(ctxitem => ctxitem.sku === item.sku);
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
    const found = items.find(ctxitem => ctxitem.sku === item.sku);
    if (found && found.quantity >= 1) {
      found.quantity = found.quantity - 1;
      setQtyItemsCart(qtyItemsCart - 1);
    }
    setItems(tmp);
  }

  function delItemFromCart(sku) {
    setItems(items.filter(item => item.sku !== sku));
  }

  function vaciarCart() {
    setItems([]);
  }

  function changeFilter(filter) {
    setFilter(filter);
  }

  /*
  function itemsWithQuantities(items) {
    for (let i in items) {
      console.log("ssss " + i + " " + items[i].name);
      console.log("ssss " + i + " " + items[i].quantity);
    }
    //console.log(items[0]);
    return items.reduce((acc, item) => {
      const found = acc.find(_item => _item.sku === item.sku);
      if (found) {
        found.quantity = found.quantity + 1; //found.quantity + 1;
      } else {
        acc.push({
          name: item.name,
          sku: item.sku,
          quantity: 1, //quantity: 1
          price: item.price
        });
      }
      //  console.log(acc);

      return acc;
    }, []);
  }
*/
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
        subFromItemQty
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
