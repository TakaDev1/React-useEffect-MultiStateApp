import React from "react";

interface DisplayInfoInterface {
  count: number;
  name: string;
}

const DisplayState = ({ count, name }: DisplayInfoInterface) => {
  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
    </div>
  );
};

export default DisplayState;
