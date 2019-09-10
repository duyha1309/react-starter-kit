import React from 'react';
import AddTodo from "../components/todos/addTodo";
import VisibleTodoList from "../components/todos/visibleTodoList";
import FilterList from "../components/filter/filterList";

const App = () => {
  return (
    <>
      <AddTodo />
      <VisibleTodoList />
      <FilterList />
    </>
  )
}

export default App;
