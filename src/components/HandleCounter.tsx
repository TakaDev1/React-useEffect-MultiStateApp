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
    <div className="flex w-30 justify-between my-5">
      <div>
        <button
          onClick={handleIncrement}
          className="bg-green-800 px-3 py-1 rounded-xl text-white hover:opacity-70 cursor-pointer transition mr-2"
        >
          +
        </button>
        <button
          onClick={handleDecrement}
          className="bg-green-800 px-3 py-1 rounded-xl text-white hover:opacity-70 cursor-pointer transition"
        >
          -
        </button>
      </div>
      <button onClick={handleReset} className="bg-gray-400 text-black px-3 py-1 rounded-xl">
        0
      </button>
    </div>
  );
};

export default HandleCounter;
