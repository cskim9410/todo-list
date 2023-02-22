import styled from "styled-components";
import { CiBoxList } from "react-icons/ci";
import { useState } from "react";
import FinishToggle from "./FinishToggle";

interface HeaderProps {
  changeDate: (date: string) => void;
}

const Header = ({ changeDate }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(false);

  const clickHandler = () => {
    setOpen(!open);
  };
  return (
    <HeaderContainer>
      <h1>투두리스트</h1>
      <Button onClick={clickHandler}>
        <CiBoxList size="40" />
        {showBadge && <Badge />}
      </Button>
      <FinishToggle
        open={open}
        clickHandler={clickHandler}
        changeDate={changeDate}
        setShowBadge={setShowBadge}
      />
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
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: lightgrey;
  &:hover {
    color: black;
  }
`;
const Badge = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  position: relative;
  top: -84%;
  left: 70%;
  border: 1px black solid;
`;
