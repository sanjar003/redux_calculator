import { configureStore } from "@reduxjs/toolkit";
import CalculatorSlice from "../CalculatorSlices/CalculatorSlice";

const store = configureStore({
  reducer: {
    calculator: CalculatorSlice,
  },
});
export default store;
