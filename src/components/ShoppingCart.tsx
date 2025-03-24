import style from "../css_modules/shoppingcart.module.css";
import { clearCart, getCartItems } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartItem from "./ShoppingCartItem";
import { Link } from "react-router";
const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);

  return (
    <div>
      <section className={style.headerNav}>
        <nav>
          <Link to={"/cart"}>Cart</Link>
          <div>
            <Link to={"/"}>Home</Link>/<Link to={"/products"}>Shop</Link>
          </div>
        </nav>
      </section>
      <section className={style.shoppingCartCrud}>
        <div className={style.crud}>
          <table>
            <thead>
              <tr className={style.tableHead}>
                <td>Product</td>
                <td id="thProductName"></td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Total</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {cartItems &&
                cartItems.map((item) => (
                  <ShoppingCartItem item={item} key={item.product._id} />
                ))}
            </tbody>
          </table>
          <hr />
          <div className={style.productCartTotalPrice}>
            Total: €{" "}
            {cartItems &&
              cartItems
                .reduce(
                  (acc, item) => acc + item.product.price * item.quantity,
                  0
                )
                .toFixed(2)}
          </div>
          <div className={style.checkOut}>
            <div className={style.linksCheckOut}>
              <Link to={"/products"}>Continue Shopping</Link>

              <a href="" onClick={() => dispatch(clearCart())}>
                Empty Cart
              </a>
            </div>
            <button>Check Out</button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ShoppingCart;
