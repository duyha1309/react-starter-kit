import { createSelector } from "redux-starter-kit";
import { VisibilityFilters } from "../constants";

const selectTodos = state => state.todos;
const selectFilter = state => state.visibilityFilters;

const selectVisibleTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos;
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(todo => todo.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed);
      default:
        throw new Error('Unknow filter: ' + filter);
    }
  }
)

export default selectVisibleTodos;