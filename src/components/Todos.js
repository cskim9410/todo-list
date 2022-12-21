import { useState, useRef, useEffect } from "react";
import TodoForm from "./TodoForm";
import styled from "styled-components";
import TodoList from "./TodoList";

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
      <Ul>
        {todos.map(({ id, text, isDone }) => {
          return (
            <TodoList
              key={id}
              id={id}
              text={text}
              isDone={isDone}
              finishTodo={finishTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </Ul>
      {todos.length === 0 && <p>추가해주세요</p>}
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default Todos;

const Ul = styled.ul`
  margin-top: 30px;
  height: 70vh;
  overflow-y: auto;
`;
