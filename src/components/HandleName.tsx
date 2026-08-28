import React, { type Dispatch, type SetStateAction } from "react";

interface HandleNameInterface {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
}

const HandleName = ({ name, setName }: HandleNameInterface) => {
  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleName}
        className="border px-10 py-1 text-center bg-white text-black"
      />
    </div>
  );
};

export default HandleName;
