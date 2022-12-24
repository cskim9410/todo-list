import styled from "styled-components";
import { CiBoxList } from "react-icons/ci";
import { useState } from "react";
import ToggleList from "./ToggleList";

const Header = ({ selectedDate, changeDate }) => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(!open);
  };
  return (
    <HeaderContainer>
      <h1>투두리스트</h1>
      <Button onClick={clickHandler}>
        <CiBoxList size="40" />
      </Button>
      <ToggleList open={open} clickHandler={clickHandler} />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: lightgrey;
  &:hover {
    color: black;
  }
`;
