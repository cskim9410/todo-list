import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { BsPlusCircle } from "react-icons/bs";
import { todoCtx } from "./../store/ContextProvider";

const TodoForm = ({ selectedDate }) => {
  const [valid, setValid] = useState(true);
  const { addTodo } = useContext(todoCtx);

  const checkValidation = (text) => {
    return text.length === 0 ? false : true;
  };

  const clickAddButton = (e) => {
    e.preventDefault();
    if (!checkValidation(inputRef.current.value)) {
      setValid(false);
      return;
    }
    addTodo(inputRef.current.value, selectedDate);
    inputRef.current.value = "";
    setValid(true);
  };
  const inputRef = useRef();
  return (
    <Form>
      <Input
        valid={valid}
        type="text"
        ref={inputRef}
        placeholder="Write your Todo!"
      />
      <Button onClick={clickAddButton}>
        <BsPlusCircle size="40" />
      </Button>
    </Form>
  );
};

export default TodoForm;

const Input = styled.input`
  width: 100%;
  height: 30px;
  border-color: ${({ valid }) => (valid ? "black" : "red")};
  padding: 10px;
  border-radius: 8px;
  font-size: 20px;
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

const Form = styled.form``;
