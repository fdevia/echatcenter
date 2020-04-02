import React, { useState, createContext } from "react";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("All");
  //const [qty, setQty] = useState(1);
  //var add = true;
  //const [filter, setFilter] = useState("Linea Practica");

  function addToCart(item) {
    console.log(items);

    //setQty(1);
    setItems(prevState => [...prevState, item]);
    console.log(items);
  }

  /*
  function delFromCart(sku) {
    //console.log(" dddd " + item.quantity);
    const tmp = { ...items };
    //setItems(items.filter(item => item.sku !== sku));
    for (let i in tmp) {
      if (tmp[i].sku === sku) {
        tmp[i].quantity--;
      }
    }
    //setQty(-1);
    setItems(tmp);
    //setItems(items.filter(item => item.sku !== sku));
    //setItems(items.filter(item));
    //console.log(item);
    //setItems(prevState => [...prevState, item]);
    //add = false;
    //const tmp = item;
    //tmp.quantity--;
    //setItems(items);
    //setItems(prevState => [...prevState, item]);
  }
*/
  /*
  function addQtyToItem(sku) {
    const tmp = { ...items };
    //setItems(items.filter(item => item.sku !== sku));
    for (let i in tmp) {
      if (tmp[i].sku === sku) {
        tmp[i].quantity++;
      }
    }
    //const buscado = items.find(item => item.sku === sku);
    //let buscado = items.find(item => {
    //  console.log(item);
    //  return item.sku === sku;
    //});
    setItems(tmp);
  }
*/

  function delItemFromCart(sku) {
    //e.preventDefault();
    setItems(items.filter(item => item.sku !== sku));
    /*
    console.log(sku);
    console.log(items);
    let buscado = items.find(item => {
      console.log(item);
      return item.sku === sku;
    });
    console.log("BUSCADO", buscado);
    const index = items.indexOf(buscado);
    let newItems = [...items];
    delete newItems[index];
    //itemsWithQuantities(items);
    setItems(newItems);
    */
  }

  function vaciarCart() {
    setItems([]);
  }

  function changeFilter(filter) {
    setFilter(filter);
  }

  function itemsWithQuantities(items) {
    console.log(items);
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
      console.log(acc);

      return acc;
    }, []);
  }

  return (
    <CartContext.Provider
      value={{
        items: itemsWithQuantities(items),
        itemsCount: items.length,
        addToCart,
        filter,
        changeFilter,
        delItemFromCart,
        vaciarCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
