import React from 'react';
import { connect } from "react-redux";
import { toggleTodo } from "./todosSlice";
import selectVisibleTodos from "../../selectors/selectVisibleTodos";
import TodoList from "./todoList";

const mapStateToProps = state => {
  return {
    todos: selectVisibleTodos(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodoRequest: id => {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);