import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  getCount,
  setValue,
} from "../store/counterSlice";
import styles from "../css_modules/purchaseOptions.module.css";

const Counter = () => {
  const val = useSelector(getCount);
  const dispatch = useDispatch();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === "" || !isNaN(Number(value))) {
      dispatch(setValue(Number(value) || 0));
    }
  };
  return (
    <div className={styles.quantity}>
      <input
        className={styles.qtyInput}
        type="number"
        value={val}
        min={1}
        onChange={handleInputChange}
      />
      <div className={styles.qtyBtnContainer}>
        <button className={styles.qtyBtn} onClick={() => dispatch(increment())}>
          +
        </button>
        <button className={styles.qtyBtn} onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </div>
  );
};
export default Counter;
