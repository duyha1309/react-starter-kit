import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "./todosSlice";

const AddTodo = ({addTodoRequest}) => {
  const [todoText, setTodoText] = useState('');

  const onChange = e => setTodoText(e.target.value);

  return (
    <form onSubmit={e => {
      e.preventDefault();
      if (!todoText.trim()) return;
      addTodoRequest(todoText);
      setTodoText('')
    }}>
      <input type="text" value={todoText} onChange={onChange} />
      <button type="submit">Add Todo</button>
    </form>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoRequest: text => {
      dispatch(addTodo(text))
    }
  }
};

export default connect(null, mapDispatchToProps)(AddTodo);