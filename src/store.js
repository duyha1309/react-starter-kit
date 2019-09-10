import { configureStore } from "redux-starter-kit";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;