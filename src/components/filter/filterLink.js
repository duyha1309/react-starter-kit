import React from "react";
import { setVisibilityFilter } from "./filterSlice";
import { connect } from "react-redux";
import Link from "./link";

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