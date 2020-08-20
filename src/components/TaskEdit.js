import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index.action';

class Edit extends Component {

  render() {
    let {sendId, elm} = this.props;
    // console.log(elm);
    return (
      <button
        type="button"
        className="btn btn-warning mr-2"
        data-toggle="modal"
        data-target="#todoModal"
        onClick={() => {sendId(elm)}}
      >
        edit
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
    sendId: payload => {
      dispatch(actions.editList(payload));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);