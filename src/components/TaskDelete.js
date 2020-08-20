import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index.action';

class Delete extends Component {

  // deleteTask = () => {
  //   this.props.deleteTask(this.props.index);
  // };

  render() {
    let { deleteTask, id } = this.props;
    return (
      <button
        className="btn btn-danger"
        onClick={() => { deleteTask(id) }}
      >
        delete
      </button>
    );
  };
};

let mapStateToProps = (state) => {
  return {}
};

let mapDispatchToProps = (dispatch, props) => {
  return {
    deleteTask: (payload) => {
      return dispatch(actions.deleteList(payload))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Delete);