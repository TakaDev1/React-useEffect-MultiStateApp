import { useEffect, useState } from "react";
import "./App.css";
import DisplayState from "./components/DisplayState";
import HandleCounter from "./components/HandleCounter";
import HandleName from "./components/HandleName";

function App() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    console.log(`状態が変更されました: ${count}, ${name}`);
  }, [count, name]);
  return (
    <>
      <div>
        <DisplayState count={count} name={name} />
        <HandleCounter setCount={setCount} />
        <HandleName name={name} setName={setName} />
      </div>
    </>
  );
}

export default App;
