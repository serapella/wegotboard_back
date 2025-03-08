import { useDispatch, useSelector } from "react-redux";
import { getCount } from "../store/counterSlice";
import { increment, decrement } from "../store/counterSlice";

const Counter = () => {
  const val = useSelector(getCount);
  const dispatch = useDispatch();
  return (
    <div>
      {val} <button onClick={() => dispatch(increment())}>+</button>{" "}
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};
export default Counter;
