import React from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { todoAtomFamily } from "./atom";

const App = () => {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
};

function Todo({ id }) {
  const todo = useRecoilValue(todoAtomFamily(id));
  return (
    <>
      <div>{todo.name}</div>
      <div>{todo.desc}</div>
    </>
  );
}
export default App;
