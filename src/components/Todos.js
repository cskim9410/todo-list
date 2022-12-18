import { useState, useRef, useEffect } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [todoInputValue, setTodoInputValue] = useState("");
  const isMounted = useRef(false);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (!savedTodos) return;
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      isMounted = true;
    }
  }, [todos]);

  const addTodo = (text) => {
    setTodoInputValue("");
    setTodos((state) => {
      return [...state, { id: new Date().getTime(), text, isDone: false }];
    });
  };

  const deleteTodo = (id) => {
    setTodos((state) => {
      return state.filter((todo) => todo.id !== id);
    });
  };

  const finishTodo = (id, isDone) => {
    setTodos((state) => {
      const newTodos = [...state];
      newTodos.find((todo) => todo.id === id).isDone = !isDone;
      return newTodos;
    });
  };

  return (
    <div>
      <input
        type="text"
        value={todoInputValue}
        onChange={(e) => setTodoInputValue(e.target.value)}
      />
      <button onClick={() => addTodo(todoInputValue)}>+</button>
      <ul>
        {todos.map(({ id, text, isDone }) => {
          return (
            <li key={id}>
              <input
                type="checkbox"
                onChange={() => finishTodo(id, isDone)}
                checked={isDone}
              />
              {text}
              <button onClick={() => deleteTodo(id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
