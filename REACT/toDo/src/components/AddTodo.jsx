import { useRef } from "react";

export const AddTodo = ({ todos, setTodos }) => {
  const input = useRef(null);

  const addTodos = () => {
    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: input.current.value, isCompleted: false }),
    })
      .then((res) => {
        return res.json();
      })
      .then((todo) => {
        console.log("todo", todo);
        setTodos([...todos, todo]);
        input.current.value = "";
      });
  };

  return (
    <div className="addTodo">
      <input type="text" name="" id="" ref={input} className="addInput" />
      <button onClick={addTodos} className="addButton">
        Dodaj todo
      </button>
    </div>
  );
};
