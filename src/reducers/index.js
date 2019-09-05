import { combineReducers } from "redux-starter-kit";
import counterSlice from "./counterReducer";

const rootReducer = combineReducers({
  counterState: counterSlice.reducer
});

export default rootReducer;