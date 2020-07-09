import React, { Component } from 'react';
import Delete from './Delete';
import Edit from './Edit';

class TaskList extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#
              <div>
                <i className="fas fa-search text-white" />
                <span><i className="fas fa-caret-up" /></span>
                <span><i className="fas fa-caret-down" /></span>
              </div>
            </th>
            <th scope="col">Do it</th>
            <th scope="col">Status</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <Edit />
              <Delete />
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
};

export default TaskList;