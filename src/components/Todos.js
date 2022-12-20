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
      <TodoForm addTodo={addTodo} />
      <ul>
        {todos.map(({ id, text, isDone }) => {
          return (
            <TodoList
              id={id}
              text={text}
              isDone={isDone}
              finishTodo={finishTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
