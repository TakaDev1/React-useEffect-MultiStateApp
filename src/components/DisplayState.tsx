import React from "react";

interface DisplayInfoInterface {
  count: number;
  name: string;
}

const DisplayState = ({ count, name }: DisplayInfoInterface) => {
  return (
    <div>
      <p className="border w-full rounded bg-black px-30 py-5 text-white">Count: {count}</p>
      <p className="border w-full rounded bg-black px-30 py-5 text-white">Name: {name}</p>
    </div>
  );
};

export default DisplayState;
