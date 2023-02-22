import { createContext, useState, ReactNode } from "react";
import { Todo } from "../types/Todo";

export const TodoCtx = createContext({
  todos: [] as Todo[],
  addTodo: (text: string, date: string) => {},
  deleteTodo: (id: number) => {},
  finishTodo: (id: number, isDone: boolean) => {},
  initTodo: (todos: Todo[]) => {},
});

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const initTodo = (todos: Todo[]) => {
    setTodos([...todos]);
  };

  const addTodo = (text: string, date: string) => {
    setTodos(() => {
      return [
        ...todos,
        {
          id: new Date().getTime(),
          date: `${date}`,
          text,
          isDone: false,
        },
      ];
    });
  };

  const deleteTodo = (id: number) => {
    setTodos((state) => {
      return state.filter((todo) => todo.id !== id);
    });
  };

  const finishTodo = (id: number, isDone: boolean) => {
    setTodos((state) => {
      const newTodos = [...state];
      const matchedTodo = newTodos.find((todo) => todo.id === id);
      if (matchedTodo) {
        matchedTodo.isDone = !isDone;
      }
      return newTodos;
    });
  };
  return (
    <TodoCtx.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        finishTodo,
        initTodo,
      }}
    >
      {children}
    </TodoCtx.Provider>
  );
};

export default ContextProvider;
