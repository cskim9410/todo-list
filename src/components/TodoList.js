import { useRef, useEffect, useContext } from "react";
import TodoForm from "./TodoForm";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { todoCtx } from "../store/ContextProvider";

const TodoList = ({ selectedDate, changeDate }) => {
  const isMounted = useRef(false);
  const { todos, initTodo } = useContext(todoCtx);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (!savedTodos) return;
    initTodo(savedTodos);
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      isMounted.current = true;
    }
  }, [todos]);

  return (
    <div>
      <Input
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
            return <TodoItem key={id} id={id} text={text} isDone={isDone} />;
          })}
        {todos.length === 0 && <li>추가해주세요</li>}
      </Ul>
      <TodoForm selectedDate={selectedDate} />
    </div>
  );
};

export default TodoList;

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

const Input = styled.input`
  margin-top: 10px;
  font-weight: bold;
  height: 15px;
  padding: 10px;
  border-radius: 20px;
`;
