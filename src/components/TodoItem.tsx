import styled from "styled-components";
import { BsTrashFill } from "react-icons/bs";
import { useContext } from "react";
import { TodoCtx } from "../store/ContextProvider";

interface TodoItemProps {
  id: number;
  text: string;
  isDone: boolean;
}

const TodoItem = ({ id, text, isDone }: TodoItemProps) => {
  const { finishTodo, deleteTodo } = useContext(TodoCtx);
  return (
    <Li>
      <div>
        <CheckBox
          type="checkbox"
          onChange={() => finishTodo(id, isDone)}
          checked={isDone}
        />
        <Span isDone={isDone}>{text}</Span>
      </div>
      <Button onClick={() => deleteTodo(id)}>
        <BsTrashFill size={24} />
      </Button>
    </Li>
  );
};

export default TodoItem;

const Li = styled.li`
  border-bottom: 1px solid lightgray;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  + li {
    margin-top: 20px;
  }
  &:hover {
    button {
      display: block;
    }
  }
`;

const Span = styled.span<{ isDone: boolean }>`
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
  color: ${({ isDone }) => (isDone ? "lightgrey" : "black")};
`;

const CheckBox = styled.input`
  cursor: pointer;
  transform: scale(1.5);
  + span {
    margin-left: 30px;
  }
`;

const Button = styled.button`
  display: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: lightgrey;
  &:hover {
    color: red;
  }
  @media (max-width: 780px) {
    display: block;
    color: red;
  }
`;
