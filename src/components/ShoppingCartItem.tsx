import { useDispatch } from "react-redux";
import style from "../css_modules/shoppingcart.module.css";
import { CartItem } from "../types";
import { useGetProductByIdQuery } from "../store/productAPI";
import { addToCart, deleteFromCart, removeFromCart } from "../store/cartSlice";

const ShoppingCartItem = ({ item }: { item: CartItem }) => {
  const dispatch = useDispatch();

  const { data } = useGetProductByIdQuery(item.product._id);

  return (
    <>
      {data && (
        <tr className={style.tableData}>
          <td className={style.productCartImage}>
            <div>
              <img src={`${data.images[0]}`} alt={item.product.name} />
            </div>
          </td>
          <td className={style.productCartName}>
            <p>{item.product.name}</p>
          </td>
          <td className={style.productCartPrice}>
            <p>€ {item.product.price}</p>
          </td>
          <td className={style.productCartQty}>
            <button
              onClick={() => dispatch(addToCart({ product: item.product }))}
            >
              +
            </button>
            <input
              type="number"
              className="product-qty"
              min="1"
              max="10"
              value={item.quantity}
            />
            <button
              onClick={() =>
                dispatch(removeFromCart({ product: item.product }))
              }
            >
              -
            </button>
          </td>
          <td className={style.productCartTotalQtyPrice}>
            € {(item.product.price * item.quantity).toFixed(2)}
          </td>
          <td className={style.productCartDelete}>
            <a
              href="#"
              onClick={() =>
                dispatch(deleteFromCart({ product: item.product }))
              }
            >
              🗑️
            </a>
          </td>
        </tr>
      )}
    </>
  );
};
export default ShoppingCartItem;
