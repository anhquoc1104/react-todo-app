import React, { Component } from 'react';

class Edit extends Component {
  constructor(props) {
    super(props);

  };

  render() {
    return (
      <button type="button" className="btn btn-warning mr-2" data-toggle="modal" data-target="#todoModal">edit</button>
    );
  };
};

export default Edit;