import { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([{ id: 1, text: "대충끄적이기" }]);

  return (
    <div>
      <input type="text" />
      <button>+</button>
      <ul>
        {todos.map(({ id, text }) => {
          return (
            <li key={id}>
              <input type="checkbox" />
              {text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
