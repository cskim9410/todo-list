import { Fragment } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Todos from "./components/Todos";

function App() {
  return (
    <Container>
      <Header />
      <Todos />
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 0 auto;
  width: 80vw;
  text-align: center;
`;
