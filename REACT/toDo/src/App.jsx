import { useEffect, useState } from "react";
import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { Todolist } from "./components/Todolist";



function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(res => {
        return res.json();
      })
      .then(todos => {
        setTodos(todos);
      })
      .catch(e => console.log(e));
  }, []);



  return (
    <div className="App">
      <AddTodo todos={todos} setTodos={setTodos} />
      <Todolist todos={todos} />
      
    </div>
  );
}

export default App;
