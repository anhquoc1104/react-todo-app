import React, { Component } from 'react';

class Edit extends Component {

  sendId = () => {
    let { editTodo, id } = this.props;
    return editTodo(id);
  };

  render() {
    return (
      <button
        type="button"
        className="btn btn-warning mr-2"
        data-toggle="modal"
        data-target="#todoModal"
        onClick={this.sendId}
      >
        edit
      </button>
    );
  };
};

export default Edit;