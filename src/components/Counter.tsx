import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  getCount,
  setValue,
} from "../store/counterSlice";
import styles from "../css_modules/counter.module.css";
import { Product } from "../types";
import { addToCart } from "../store/cartSlice";

const Counter = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const val = useSelector(getCount);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addToCart({ product, quantity: val }));
    dispatch(setValue(1));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numValue = Number(value);
    if (value !== "" && !isNaN(numValue)) {
      dispatch(setValue(Math.max(numValue, 1)));
    }
  };

  return (
    <form className={styles.counterForm} onSubmit={onSubmit}>
      <div className={styles.inputGroup}>
        <input
          className={styles.qtyInput}
          type="number"
          value={val}
          onChange={handleInputChange}
        />
        <div className={styles.qtyBtnContainer}>
          <button
            className={styles.qtyBtn}
            type="button"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <button
            className={styles.qtyBtn}
            type="button"
            onClick={() => {
              if (val > 1) {
                dispatch(decrement());
              }
            }}
          >
            –
          </button>
        </div>
      </div>
      <button className={styles.addToCart} type="submit">
        Add To Cart
      </button>
    </form>
  );
};

export default Counter;
