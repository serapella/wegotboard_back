import { useDispatch, useSelector } from "react-redux";
import { getCount } from "../store/counterSlice";
import { increment, decrement } from "../store/counterSlice";
import styles from "../css_modules/purchaseOptions.module.css";

const Counter = () => {
  const val = useSelector(getCount);
  const dispatch = useDispatch();
  return (
    <div className={styles.quantity}>
      <input className={styles.qtyInput} type="number" value={val} min="1" />
      <div className={styles.qtyBtn}>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
};
export default Counter;
