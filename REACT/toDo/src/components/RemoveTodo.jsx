export const RemoveTodo = (e) => {
  const id = e.target.getAttribute("data-key");

  fetch("http://localhost:3000/todos/" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());

  return (
    <button onClick={RemoveTodo} data-key={todo.id} className="delTodo">
      X
    </button>
  );
};
