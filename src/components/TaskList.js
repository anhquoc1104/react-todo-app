import React, { Component } from 'react';
import Delete from './Delete';
import Edit from './Edit';
import noItemImg from '../img/background-noItem.png';
import './TaskList.css';

class TaskList extends Component {

  styleDone = () => {
    return {
      textDecoration: 'line-through',
      opacity: '60%'
    };
  };

  changeStatus = (index, status) => {
    let { tasks, updateStatus } = this.props;
    if(status === true){
      tasks[index].status = false;
    }else{
      tasks[index].status = true;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // console.log(tasks);

  updateStatus(tasks);
  };

  render() {
    let { tasks } = this.props;
    let item = tasks.map((elm, index) => {
      return (<tr key={elm.id}>
        <th scope="row" style={elm.status === true ? {} : this.styleDone()}>{index + 1}</th>
        <td style={elm.status === true ? {} : this.styleDone()}>{elm.name}</td>
        <td>
          <button 
            className={elm.status === true ? 'btn btn-success' : 'btn btn-danger'} 
            onClick={() => {this.changeStatus(index, elm.status)}} 
          >
            {elm.status === true ? 'Pending' : 'Done'}
          </button>
        </td>
        <td>
          <Edit 
            id={elm.id}
            editTodo={this.props.editTodo} />
          <Delete 
            index={index}
            deleteTask={this.props.deleteTask} />
        </td>
      </tr>)
    });

    //render background
    if (tasks.length === 0) {
      return (
        <img src={noItemImg} alt='Todo no Item'/>
      )
    } else { //render tasks list
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
            {item}
          </tbody>
        </table>
      )
    }
  };
};

export default TaskList;