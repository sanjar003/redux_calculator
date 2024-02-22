import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  add,
  divide,
  multiply,
  reset,
  subtract,
} from "../CalculatorSlices/CalculatorSlice";
import styled from "styled-components";

const Container = styled.div`
  width: 230px;
  height: 200px;
  box-shadow: 2.3px 4.5px 3.6px rgba(0, 0, 0, 0.084),
    6.4px 12.5px 10px rgba(0, 0, 0, 0.12),
    15.4px 30.1px 24.1px rgba(0, 0, 0, 0.156),
    51px 100px 80px rgba(0, 0, 0, 0.24);
`;

const CalculatorComponents = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.calculator.value);
  const [inputValue, setInputValue] = useState();

  const handleInputChange = (e) => {
    setInputValue(parseFloat(e.target.value));
  };
  return (
    <Container>
      <h2>Calculator</h2>
      <input type="number" value={inputValue} onChange={handleInputChange} />
      <br />
      <button onClick={() => dispatch(add(inputValue))}>+</button>
      <button onClick={() => dispatch(subtract(inputValue))}>-</button>
      <button onClick={() => dispatch(multiply(inputValue))}>*</button>
      <button onClick={() => dispatch(divide(inputValue))}>/</button>
      <button onClick={() => dispatch(reset(inputValue))}>AC</button>
      <br />
      <div>
        <strong>Result:</strong>
        {result}
      </div>
    </Container>
  );
};

export default CalculatorComponents;
