import style from "../css_modules/shoppingcart.module.css";
import { selectCart, increment, decrement, deleteProductFromCart, emptyCart, geTotalCartPrice } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import cartData from "../cartTestData.json";
const ShoppingCart = () => {
  const dispatch = useDispatch();

  //   const cart = useSelector(selectCart);
  const cart = cartData;
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
        <form className={style.crud} action="#" method="POST">
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
              {cart &&
                cart.map((product) => (
                  <tr className={style.tableData}>
                    <td className={style.productCartImage}>
                      <div>
                        <img src={`../${product.image}`} alt={product.name} />
                      </div>
                    </td>
                    <td className={style.productCartName}>
                      <p>{product.name}</p>
                    </td>
                    <td className={style.productCartPrice}>
                      <p>€ {product.price}</p>
                    </td>
                    <td className={style.productCartQty}>
                      <button onClick={() => dispatch(increment())}>+</button>
                      <input type="number" className="product-qty" min="1" max="10" value={product.quantity} />
                      <button onClick={() => dispatch(decrement())}>-</button>
                    </td>
                    <td className={style.productCartTotalQtyPrice}>€ {product.price * product.quantity}</td>
                    <td className={style.productCartDelete}>
                      <a href="#" onClick={() => dispatch(deleteProductFromCart(product._id))}>
                        🗑️
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <hr />
          <td className={style.productCartTotalPrice}>Total: € {cart.reduce((acc, product) => acc + product.price * product.quantity, 0)}</td>
          <div className={style.checkOut}>
            <div className={style.linksCheckOut}>
              <a href="#">Continue Shopping</a>
              <a href="" onClick={() => dispatch(emptyCart())}>
                Empty Cart
              </a>
            </div>
            <button>Check Out</button>
          </div>
        </form>
      </section>
    </div>
  );
};
export default ShoppingCart;
