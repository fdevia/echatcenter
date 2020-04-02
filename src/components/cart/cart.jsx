import React, { useContext } from "react";
import { CartContext } from "./context";

function formatPrice(price) {
  return `$${"  " + (price * 0.01).toFixed(2)}`;
}

function totalPrice(items) {
  return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0);
}

export default function Cart() {
  //const [stripe, setStripe] = useState(null)
  const ctx = useContext(CartContext);

  /*
  useEffect(() => {
    if (window.Stripe) setStripe(window.Stripe(stripeToken))
  }, [stripeToken])
 */
  /*
  function eliminarItem(e, sku) {
    e.preventDefault();
    console.log(sku + "  ");
    //console.log(ctx.items);
    let buscado = ctx.items.find(item => item.sku === sku);
    const index = ctx.items.indexOf(buscado);
    if (index > -1) {
      ctx.items.splice(index, 1);
    }
    console.log("Eliminando");
  }
*/
  function checkout() {
    /*
    stripe.redirectToCheckout({
      products: ctx.items.map(item => ({
        quantity: item.quantity,
        sku: item.sku
      })),
      successUrl: "https://your-website.com/success",
      cancelUrl: "https://your-website.com/canceled"
    });
    */
  }

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Quanity</th>
            <th>Price</th>
            <th>Eliminar</th>
            <th>Mas</th>
            <th>Menos</th>
          </tr>
        </thead>

        <tbody>
          {ctx.items.map(item => (
            <tr key={item.sku}>
              <td>{item.name}</td>
              <td>
                <img
                  src={`/images/${item.sku}.jpg`}
                  alt={item.name}
                  width={50}
                />
              </td>
              <td>{item.quantity}</td>
              <td>{formatPrice(item.price)}</td>
              <td align="center">
                <button onClick={() => ctx.delItemFromCart(item.sku)}>
                  Eliminar Item
                </button>
              </td>
              <td align="center">
                <button onClick={() => ctx.addToCart(item)}>+</button>
              </td>
              <td align="center">
                <button onClick={() => ctx.addToCart(item)}>-</button>
              </td>
            </tr>
          ))}
          <tr>
            <td style={{ textAlign: "right" }} colSpan={3}>
              Total:
            </td>
            <td>{formatPrice(totalPrice(ctx.items))}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td style={{ textAlign: "right" }} colSpan={4}>
              <label>Seleccione Sucursal: </label>
              <select id="select-input">
                <option value="1">Unicentro</option>
                <option value="2">Chico</option>
                <option value="3">Chapinero</option>
              </select>
              <button onClick={ctx.vaciarCart}>Vaciar Carro</button>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }} colSpan={4}>
              <button onClick={checkout}>Enviar Pedido</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
