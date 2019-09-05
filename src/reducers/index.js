import { combineReducers } from "redux-starter-kit";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  counterState: counterReducer
});

export default rootReducer;