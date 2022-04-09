
export const Todolist = ({ todos }) => {

  const handleOnChange = (e) => {

    const id = e.target.getAttribute('data-key');


    fetch("http://localhost:3000/todos/" + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({ isCompleted: e.target.checked }),
    })
      .then((res) => res.json())
      .then((data) => console.log("data", data));

  };
  return (
    <>
      {todos.map(function (todo) {
        return (

          <div key={todo.id} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p>{todo.name}</p>
            <input type="checkbox" data-key={todo.id} onChange={handleOnChange} />
          </div>
        );
      })}
    </>
  );
};
