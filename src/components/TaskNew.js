import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index.action';

class TaskNew extends Component {

  render() {
    return (
      <button 
        type="button" 
        className="btn btn-primary" 
        data-toggle="modal" 
        data-target="#todoModal"
        onClick={this.props.resetState}
      >
        New Item
      </button>
    );
  };
};

let mapStateToProps = (state) => {
  return {

  }
};

let mapDispatchToProps = (dispatch, props) => {
  return {
    resetState: () => {
      dispatch(actions.newTodo());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskNew);