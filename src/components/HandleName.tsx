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
      <input type="text" value={name} onChange={handleName} />
    </div>
  );
};

export default HandleName;
