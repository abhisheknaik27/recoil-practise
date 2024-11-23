import React from "react";
import { RecoilRoot, useRecoilStateLoadable, useRecoilValue } from "recoil";
import { atomTodoFamily } from "./atom";

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <Todo id={1} />
        <Todo id={2} />
      </RecoilRoot>
    </div>
  );
};

function Todo({ id }) {
  const [todo, setTodo] = useRecoilStateLoadable(atomTodoFamily(id));
  console.log(todo);
  if (todo.state == "loading") {
    return <div>loading...</div>;
  } else if (todo.state == "hasValue") {
    return (
      <>
        <div>{todo.contents.title}</div>
        <div>{todo.contents.desc}</div>
      </>
    );
  }
  //const todo = useRecoilValue(atomTodoFamily(id));

  //   return (
  //     <>
  //       <div>{todo.title}</div>
  //       <div>{todo.desc}</div>
  //     </>
  //   );
}
export default App;
