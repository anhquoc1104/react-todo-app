import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.action';

class TaskStatus extends Component {

  render() {
    let { changeStatus, elm } = this.props;
    // console.log(elm.status);
    return (
      <button
        className={elm.status === true ? 'btn btn-success' : 'btn btn-danger'}
        onClick={() => { changeStatus(elm) }}
      >
        {elm.status === true ? 'Do' : 'Done'}
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
    changeStatus: payload => {
      dispatch(actions.changeStatus(payload));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskStatus);