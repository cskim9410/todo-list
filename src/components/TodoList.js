import styled from "styled-components";
import { BsTrashFill } from "react-icons/bs";

const TodoList = ({ id, text, isDone, finishTodo, deleteTodo }) => {
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

export default TodoList;

const Li = styled.li`
  border-bottom: 1px solid lightgray;
  width: 100%;
  margin: 0 auto;
  display: flex;
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

const Span = styled.span`
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
`;
