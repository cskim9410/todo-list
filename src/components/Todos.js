import { useState, useRef, useEffect } from "react";
import TodoForm from "./TodoForm";
import styled from "styled-components";
import TodoList from "./TodoList";

const Todos = ({ selectedDate, changeDate }) => {
  const [todos, setTodos] = useState([]);
  const isMounted = useRef(false);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (!savedTodos) return;
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      isMounted.current = true;
    }
  }, [todos]);

  const addTodo = (text) => {
    setTodos((state) => {
      return [
        ...state,
        {
          id: new Date().getTime(),
          date: `${selectedDate}`,
          text,
          isDone: false,
        },
      ];
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
        type="date"
        value={selectedDate}
        onChange={(e) => {
          changeDate(e.target.value);
        }}
      />
      <Ul>
        {todos
          .filter(({ date }) => date === selectedDate)
          .map(({ id, text, isDone }) => {
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
        {todos.length === 0 && <li>추가해주세요</li>}
      </Ul>
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default Todos;

const Ul = styled.ul`
  margin-top: 30px;
  height: 60vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;
