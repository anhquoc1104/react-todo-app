import React, { Component } from 'react';

class New extends Component {
  constructor(props) {
    super(props);

  };

  render() {
    return (
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#todoModal">New Item</button>
    );
  };
};

export default New;