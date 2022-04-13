import { useState } from "react";
import { AddTodo } from "./AddTodo";
import { Todolist } from "./Todolist";
import { useEffect } from "react";

export const RenderTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => {
        return res.json();
      })
      .then((todos) => {
        setTodos(todos);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className="App">
        <AddTodo todos={todos} setTodos={setTodos} />
        <Todolist todos={todos} />
      </div>
    </>
  );
};
