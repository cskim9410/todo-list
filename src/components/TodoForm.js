import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { BsPlusCircle } from "react-icons/bs";
import { todoCtx } from "./../store/ContextProvider";

const TodoForm = ({ selectedDate }) => {
  const [valid, setValid] = useState(true);
  const { addTodo } = useContext(todoCtx);
  const [active, setActive] = useState(false);
  const inputRef = useRef();

  const checkValidation = (text) => {
    return text.length === 0 ? false : true;
  };

  const clickAddButton = (e) => {
    setActive(!active);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!checkValidation(inputRef.current.value)) {
      setValid(false);
      return;
    }
    addTodo(inputRef.current.value, selectedDate);
    inputRef.current.value = "";
    setValid(true);
  };
  return (
    <div>
      <Form active={active} onSubmit={submitHandler}>
        <Input
          valid={valid}
          type="text"
          ref={inputRef}
          placeholder="입력 후 엔터"
        />
      </Form>
      <Button active={active} onClick={clickAddButton}>
        <BsPlusCircle size="40" />
      </Button>
    </div>
  );
};

export default TodoForm;

const Input = styled.input`
  width: 70%;
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
  color: ${({ active }) => (active ? "red" : "lightgrey")};
  transition: all 0.5s ease-in-out;
  transform: ${({ active }) => (active ? "rotate(45deg)" : "")};
  &:hover {
    color: ${({ active }) => (active ? "red" : "#2d92eb")};
  }
`;

const Form = styled.form`
  overflow: hidden;
  height: ${({ active }) => (active ? "80px" : 0)};
  transition: all 0.5s ease-in-out;
`;
