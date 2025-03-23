import style from "../css_modules/shoppingcart.module.css";
import { clearCart, getCartItems } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartItem from "./ShoppingCartItem";
const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);

  return (
    <div>
      <section className={style.headerNav}>
        <nav>
          <a href="#" id="shopLeft">
            Cart
          </a>
          <div>
            <a href="#" id="homeRight">
              Home
            </a>
            /
            <a href="#" id="shopRight">
              Shop
            </a>
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
              <a href="#">Continue Shopping</a>
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
