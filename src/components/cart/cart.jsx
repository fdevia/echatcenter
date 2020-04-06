import React, { useContext } from "react";
import { CartContext } from "./context";

function formatPrice(price) {
  return `$${"  " + (price * 0.01).toFixed(2)}`;
}

function totalPrice(items) {
  return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0);
}

export default function Cart() {
  const ctx = useContext(CartContext);
  /*
  useEffect(() => {
    if (window.Stripe) setStripe(window.Stripe(stripeToken))
  }, [stripeToken])
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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Quanity</th>
            <th>Uds/Kilos</th>
            <th>Price</th>
            <th>Unidad</th>
            <th>Eliminar</th>
            <th>Mas</th>
            <th>Menos</th>
          </tr>
        </thead>

        <tbody>
          {ctx.items.map((item) => (
            <tr key={item.sku}>
              <td>{item.name}</td>
              <td>
                <img
                  src={`/images/${item.sku}.webp`}
                  alt={item.name}
                  width={200}
                />
              </td>
              <td align="center">
                <input
                  type="number"
                  step="1"
                  min="0"
                  max="100"
                  style={{ width: "50px" }}
                  pattern="[0-9]*"
                  value={item.quantity}
                  //value={item.quantity}
                  onChange={(e) => {
                    item.quantity = Number(e.target.value);
                  }}
                  //setState(Number(e.target.value));
                  //}}
                ></input>
              </td>
              <td align="center">
                <input type="checkbox"></input>
              </td>
              <td align="center">{formatPrice(item.price)}</td>
              <td align="center">
                <label>Unidad</label>
              </td>
              <td align="center">
                <button onClick={() => ctx.delItemFromCart(item.sku)}>
                  Eliminar Item
                </button>
              </td>
              <td align="center">
                <button onClick={() => ctx.addToCart(item)}>+</button>
              </td>
              <td align="center">
                <button onClick={() => ctx.subFromItemQty(item)}>-</button>
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
              <button onClick={ctx.vaciarCart}>Vaciar Carro</button>
            </td>
          </tr>

          <tr>
            <td style={{ textAlign: "right" }} colSpan={4}>
              <label>Seleccione Sucursal para su descuento si aplica: </label>
              <select id="select-input" name="categorias">
                <option value="1">Unicentro</option>
                <option value="2">Chico</option>
                <option value="3">Chapinero</option>
                <option value="4">cedritos</option>
                <option value="5">Chia</option>
                <option value="6">Centro</option>
              </select>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }} colSpan={4}>
              <label style={{ textAlign: "left" }}>Nombre</label>
              <button onClick={ctx.vaciarCart}>Nombre</button>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }} colSpan={4}>
              <button onClick={ctx.vaciarCart}>Direccion</button>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }} colSpan={4}>
              <button onClick={ctx.vaciarCart}>Telefono</button>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }} colSpan={4}>
              <button onClick={ctx.vaciarCart}>Observacion</button>
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
