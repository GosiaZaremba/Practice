import { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";

export const Todolist = ({ todos }) => {

  const changeTodo = (e) => {

    const id = e.target.getAttribute('data-key');


    fetch("http://localhost:3000/todos/" + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({ isCompleted: e.target.checked ? true : false }),
    })
      .then((res) => res.json())
      .then((data) => console.log("data", data));

  };

  const removeTodo = (e) => {

    const id = e.target.getAttribute('data-key');
    
    fetch("http://localhost:3000/todos/" + id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json", }
    })
    .then((res) => res.json())
  }


  return (
    <ul className="todoList">
      {todos.map(function (todo) {
        return (
              <li key={todo.id} className="listItem">
                <input type="checkbox" data-key={todo.id} onChange={changeTodo} className="check"/>
                <p className="todoName">{todo.name}</p>
                <button onClick={removeTodo} data-key={todo.id} className="delTodo">X</button></li>
        );
      })}
    </ul>
  );
};
