import React, { type Dispatch, type SetStateAction } from "react";
interface HandleCounterInterface {
  setCount: Dispatch<SetStateAction<number>>;
}

const HandleCounter = ({ setCount }: HandleCounterInterface) => {
  // インクリメント処理
  const handleIncrement = () => {
    setCount((prev) => (prev < 10 ? prev + 1 : prev));
  };

  // デクリメント処理
  const handleDecrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // リセット処理
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>0</button>
    </div>
  );
};

export default HandleCounter;
