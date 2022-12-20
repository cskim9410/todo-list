import { useRef, useState } from "react";
import styled from "styled-components";

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
      <button onClick={clickAddButton}>+</button>
    </div>
  );
};

export default TodoForm;

const Input = styled.input`
  width: 100%;
  height: 30px;
  border-color: ${({ valid }) => (valid ? "black" : "red")};
`;
