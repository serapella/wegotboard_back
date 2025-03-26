import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  getCount,
  setValue,
} from "../store/counterSlice";
import styles from "../css_modules/purchaseOptions.module.css";
import { Product } from "../types";
import { addToCart } from "../store/cartSlice";
const Counter = ({ product }: { product: Product }) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addToCart({ product, quantity: val }));

    dispatch(setValue(1));
  };
  const val = useSelector(getCount);
  const dispatch = useDispatch();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numValue = Number(value);
    if (value !== "" && !isNaN(numValue)) {
      dispatch(setValue(Math.max(numValue, 1)));
    }
  };
  return (
    <>
      <form className={styles.quantity} onSubmit={onSubmit}>
        <input
          className={styles.qtyInput}
          type="number"
          value={val}
          onChange={handleInputChange}
        />
        <div className={styles.qtyBtnContainer}>
          <button
            className={styles.qtyBtn}
            onClick={() => dispatch(increment())}
            type="button"
          >
            +
          </button>
          <button
            className={styles.qtyBtn}
            onClick={() => {
              if (val > 1) {
                dispatch(decrement());
              }
            }}
            type="button"
          >
            -
          </button>
        </div>
        <button className={styles.addToCart} type="submit">
          Add To Cart
        </button>
      </form>
    </>
  );
};
export default Counter;
