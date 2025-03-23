import React from "react";
import styles from "./Counter.module.css";

interface CounterProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

const Counter: React.FC<CounterProps> = ({
  value,
  onChange,
  min = 1,
  max = 99,
}) => {
  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div className={styles.quantity}>
      <input
        type="number"
        className={styles.qtyInput}
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
      />
      <div className={styles.qtyBtnContainer}>
        <button
          type="button"
          className={styles.qtyBtn}
          onClick={handleIncrement}
          disabled={value >= max}
        >
          +
        </button>
        <button
          type="button"
          className={styles.qtyBtn}
          onClick={handleDecrement}
          disabled={value <= min}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
