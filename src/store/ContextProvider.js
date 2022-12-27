import { createContext, useState } from "react";

export const todoCtx = createContext({
  todos: [],
  addTodo: (text) => {},
  deleteTodo: (id) => {},
  finishTodo: (id, isDone) => {},
  initTodo: (todos) => {},
});

const ContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const initTodo = (todos) => {
    setTodos(todos);
  };

  const addTodo = (text, date) => {
    setTodos((state) => {
      return [
        ...state,
        {
          id: new Date().getTime(),
          date: `${date}`,
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
    <todoCtx.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        finishTodo,
        initTodo,
      }}
    >
      {children}
    </todoCtx.Provider>
  );
};

export default ContextProvider;
