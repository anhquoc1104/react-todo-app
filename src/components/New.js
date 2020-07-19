import React, { Component } from 'react';

class New extends Component {

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

export default New;