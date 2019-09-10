import { createSlice } from "redux-starter-kit";
import { VisibilityFilters } from "../../constants";

const filterSlice = createSlice({
  slice: 'visibilityFilters',
  initialState: VisibilityFilters.SHOW_ALL,
  reducers: {
    setVisibilityFilter(state, action) {
      return action.payload
    }
  }
});

export const { setVisibilityFilter } = filterSlice.actions;

export  default filterSlice.reducer;