import React, { useContext, useState } from "react";
import { CountContext } from "./context";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </div>
  );
};

function Count() {
  return (
    <>
      <CountRenderer />
      <CountButton />
    </>
  );
}
function CountRenderer() {
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
}
function CountButton() {
  const { setCount } = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
    </div>
  );
}
export default App;
