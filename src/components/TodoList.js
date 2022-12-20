import styled from "styled-components";

const TodoList = ({ id, text, isDone, finishTodo, deleteTodo }) => {
  return (
    <Li key={id}>
      <CheckBox
        type="checkbox"
        onChange={() => finishTodo(id, isDone)}
        checked={isDone}
      />
      <Span isDone={isDone}>{text}</Span>
      <button onClick={() => deleteTodo(id)}>X</button>
    </Li>
  );
};

export default TodoList;

const Li = styled.li`
  border-bottom: 1px solid lightgray;
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  + li {
    margin-top: 10px;
  }
`;

const Span = styled.span`
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
  color: ${({ isDone }) => (isDone ? "lightgrey" : "black")};
`;

const CheckBox = styled.input`
  transform: scale(1.5);
`;
