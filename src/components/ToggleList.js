import styled from "styled-components";
import { VscChromeClose, VscClose } from "react-icons/vsc";
import { useContext } from "react";
import { todoCtx } from "./../store/ContextProvider";

const ToggleList = ({ open, clickHandler, changeDate }) => {
  const { todos } = useContext(todoCtx);
  const lists = todos
    .reduce((acc, todo) => {
      const duplIndex = acc.findIndex((accTodo) => accTodo.date === todo.date);
      if (duplIndex >= 0) {
        acc[duplIndex].count += 1;
        return acc;
      }
      acc.push({
        date: todo.date,
        count: 1,
      });
      console.log(acc);
      return acc;
    }, [])
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  return (
    <Container open={open}>
      <Div>
        <Bar>
          <span>ㅇㅇㅇㅇ</span>
          <Button onClick={clickHandler}>
            <VscClose size={24} />
          </Button>
        </Bar>
      </Div>
      <Div>
        <Ul>
          {lists.map((list) => (
            <Li onClick={() => changeDate(list.date)}>
              <p>{list.date}</p>
              <p>{list.count}개</p>
            </Li>
          ))}
        </Ul>
      </Div>
    </Container>
  );
};

export default ToggleList;

const Container = styled.div`
  color: black;
  font-size: 14px;
  width: 20%;
  max-width: 300px;
  background-color: white;
  position: absolute;
  top: 10%;
  right: 20%;
  border-radius: 10px;
  z-index: 999;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  max-height: ${({ open }) => (open ? "500px" : 0)};
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: all 0.3s ease-in-out;
  overflow: hidden;
`;

const Div = styled.div`
  padding: 5px 0 5px 0;
  width: 100%;
  border-bottom: 1px solid lightgray;
`;

const Flex = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 5px 10px 5px 10px;
  align-items: center;
`;

const Bar = styled(Flex)`
  justify-content: space-between;
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: lightgray;
  &:hover {
    color: black;
  }
`;

const Ul = styled.ul`
  max-height: 250px;
  overflow-y: auto;
`;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
  &:active {
    transform: scale(0.95);
  }
`;
