import React from "react";
import PropTypes from "prop-types";

import { setVisibilityFilter } from "./filterSlice";
import { connect } from "react-redux";

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

const mapStateToProps = (state, owProps) => {
  return {
    active: owProps.filter === state.visibilityFilter
  }
}

const mapDispatchToprops = dispatch => {
  return {
    setVisibilityFilter: filter => {
      dispatch(setVisibilityFilter(filter));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToprops)(Link);