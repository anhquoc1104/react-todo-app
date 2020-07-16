import React, { Component } from 'react';

class Delete extends Component {

  deleteTask = () => {
    this.props.deleteTask(this.props.index);
  };

  render() {
    return (
      <button 
        className="btn btn-danger"
        onClick={this.deleteTask}
      >
      delete
      </button>
    );
  };
};

export default Delete;