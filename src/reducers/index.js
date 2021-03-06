import { combineReducers } from "redux-starter-kit";
import todosReducer from "../components/todos/todosSlice";
import visibilityFilterReducer from "../components/filter/filterSlice";

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilters: visibilityFilterReducer
});

export default rootReducer;