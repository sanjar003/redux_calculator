import React from "react";
import CalculatorComponents from "./store/CalculatorComp/CalculatorComponents";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding-left: 300px;
`;

const App = () => {
  return (
    <Container>
      <CalculatorComponents />
    </Container>
  );
};

export default App;
