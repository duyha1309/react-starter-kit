import React from 'react';
import PropTypes from 'prop-types';

import Todo from './todo';

const TodoList = ({ todos, toggleTodo}) => {

  return (

  )
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({

    })
  ),
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList;