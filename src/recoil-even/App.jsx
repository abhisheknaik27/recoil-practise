import React from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./atom";

const App = () => {
  return (
    <RecoilRoot>
      <Count></Count>
    </RecoilRoot>
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
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}
function CountButton() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
      <EvenCountRenderer />
    </>
  );
}
function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);
  return <p>{isEven ? "Even Number" : null}</p>;
}

export default App;
