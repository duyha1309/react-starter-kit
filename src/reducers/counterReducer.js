import { increment, decrement } from "../actions";
import { createReducer } from "redux-starter-kit";

const counterReducer = createReducer(0, {
  [increment.type]: state => state + 1,
  [decrement.type]: state => state - 1
})

export default counterReducer;