import { useRef, useState } from "react";
import styled from "styled-components";
import { BsPlusCircle } from "react-icons/bs";

const TodoForm = ({ addTodo }) => {
  const [valid, setValid] = useState(true);

  const checkValidation = (text) => {
    return text.length === 0 ? false : true;
  };

  const clickAddButton = () => {
    if (!checkValidation(inputRef.current.value)) {
      setValid(false);
      return;
    }
    addTodo(inputRef.current.value);
    inputRef.current.value = "";
    setValid(true);
  };
  const inputRef = useRef();
  return (
    <div>
      <Input
        valid={valid}
        type="text"
        ref={inputRef}
        placeholder="Write your Todo!"
      />
      <Button onClick={clickAddButton}>
        <BsPlusCircle size="40" />
      </Button>
    </div>
  );
};

export default TodoForm;

const Input = styled.input`
  width: 100%;
  height: 30px;
  border-color: ${({ valid }) => (valid ? "black" : "red")};
`;

const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: lightgrey;
  &:hover {
    color: #2d92eb;
  }
`;
