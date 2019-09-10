import React from 'react';

import PropTypes from 'prop-types';

import Todo from './todo';


const TodoList = ({ todos, toggleTodoRequest}) => {

  return (
    <ul>
      {todos.map(({id, ...otherProps}) => (
        <Todo
          key={id}
          {...otherProps}
          onClick={() => toggleTodoRequest(id)}
        />
      ))}
    </ul>
  )
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodoRequest: PropTypes.func.isRequired
}

export default TodoList;