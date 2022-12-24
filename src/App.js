import { Fragment, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Todos from "./components/Todos";
import ContextProvider from "./store/ContextProvider";

function App() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const [selectedDate, setSelectedDate] = useState(`${year}-${month}-${day}`);

  const changeDate = (date) => {
    setSelectedDate(date);
  };
  return (
    <ContextProvider>
      <Container>
        <Header selectedDate={selectedDate} changeDate={changeDate} />
        <Todos selectedDate={selectedDate} changeDate={changeDate} />
      </Container>
    </ContextProvider>
  );
}

export default App;

const Container = styled.div`
  margin: 0 auto;
  width: 60vw;
  text-align: center;
`;
