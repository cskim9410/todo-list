import styled from "styled-components";

const ToggleList = ({ open }) => {
  return (
    <Container open={open}>
      <Div>asdfasdf</Div>
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
