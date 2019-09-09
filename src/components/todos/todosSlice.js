import { createSlice } from "redux-starter-kit";
let nextIdTodoId = 0;
const todoSlice = createSlice({
  slice: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        const { id, text } = action.payload;
        state.push({id, text, completed: false});
      },
      prepare(text) {
        return { payload: {text, id: nextIdTodoId++ }}
      }
    },
    toggleTodo(state, action) {
      const todo = state.find(todo === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});

export const { addTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;