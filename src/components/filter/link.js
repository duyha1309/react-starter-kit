import React from "react";
import PropTypes from "prop-types";


const Link = ({active = false, children, setVisibilityFilter, filter}) => {

  return (
    <button
      onClick={() => setVisibilityFilter(filter)}
      disabled={active}
      style={{marginLeft: '5px'}}
    >
      {children}
    </button>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
}

export default Link;