import dayjs from "dayjs";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Todos from "./components/Todos";
import ContextProvider from "./store/ContextProvider";

function App() {
  const [selectedDate, setSelectedDate] = useState(``);

  const changeDate = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    setSelectedDate(dayjs(new Date()).format("YYYY-MM-DD"));
  }, []);

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
  margin: 10px auto;
  border-radius: 12px;
  padding: 12px;
  width: 60vw;
  text-align: center;
  background-color: white;
  @media (max-width: 600px) {
    width: 80vw;
  }
`;
