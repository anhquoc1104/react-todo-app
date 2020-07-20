import React, { Component } from 'react';
import Delete from './TaskDelete';
import Edit from './TaskEdit';
import ButtonUp from './ButtonUp';
import ButtonDown from './ButtonDown';
import VN from '../change_alias'
import './TaskList.css';
import noItemImg from '../img/background-noItem.png';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: {
        name: 'n0',
        sortBy: true
      }
    };
  };

  componentDidMount() {
    this.setState({
      sort: {
        name: 'n0',
        sortBy: true
      }
    });
  };

  styleDone = () => {
    return {
      textDecoration: 'line-through',
      opacity: '60%'
    };
  };

  changeStatus = (id, status) => {
    let { tasks, updateStatus } = this.props;
    let index = tasks.findIndex(elm => elm.id === id);
    if (status === true) {
      tasks[index].status = false;
    } else {
      tasks[index].status = true;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // console.log(tasks);

    updateStatus(tasks);
  };

  sort = (nameClick) => {
    // console.log(nameClick);
    let { name, sortBy } = this.state.sort;
    sortBy = sortBy === true ? false : true;
    if (name === nameClick) {
      this.setState({
        sort: {
          name: nameClick,
          sortBy: sortBy
        }
      });
    } else {
      this.setState({
        sort: {
          name: nameClick,
          sortBy: true
        }
      });
    }
  };

  onSort(tasksSort, name = "n0", sortBy) {
    switch (name) {
      case 'do':
        if (sortBy) {
          tasksSort.sort((a, b) => {
            return VN.change_alias(a.name) > VN.change_alias(b.name) ? 1 : VN.change_alias(a.name) < VN.change_alias(b.name) ? -1 : 0;
          })
        } else {
          tasksSort.sort((a, b) => {
            return VN.change_alias(b.name) > VN.change_alias(a.name) ? 1 : VN.change_alias(b.name) < VN.change_alias(a.name) ? -1 : 0;
          })
        }
        break;
      case 'status':
        if (sortBy) {
          tasksSort.sort((a, b) => {
            return VN.change_alias(a.status.toString()) > VN.change_alias(b.status.toString()) ? 1 : VN.change_alias(a.status.toString()) < VN.change_alias(b.status.toString()) ? -1 : 0;
          })
        } else {
          tasksSort.sort((a, b) => {
            return VN.change_alias(b.status.toString()) > VN.change_alias(a.status.toString()) ? 1 : VN.change_alias(b.status.toString()) < VN.change_alias(a.status.toString()) ? -1 : 0;
          })
        }
        break;
      case 'n0':
      default:
        if (sortBy) {
          tasksSort.sort((a, b) => {
            return a - b;
          });
        } else {
          tasksSort.reverse();
        }
        break;
    }
  };

  renderItem(tasksSort, editTodo, deleteTask) {
    return tasksSort.map((elm, index) => {
      return (<tr key={elm.id}>
        <td scope="row" style={elm.status === true ? {} : this.styleDone()}>{index + 1}</td>
        <td style={elm.status === true ? {} : this.styleDone()}>{elm.name}</td>
        <td>
          <button
            className={elm.status === true ? 'btn btn-success' : 'btn btn-danger'}
            onClick={() => { this.changeStatus(elm.id, elm.status) }}
          >
            {elm.status === true ? 'Do...' : 'Done'}
          </button>
        </td>
        <td>
          <Edit
            id={elm.id}
            editTodo={editTodo} />
          <Delete
            index={index}
            deleteTask={deleteTask} />
        </td>
      </tr>)
    });
  }

  render() {
    let { tasks, editTodo, deleteTask } = this.props;
    let { name, sortBy } = this.state.sort;
    let tasksSort = tasks.slice(0);

    this.onSort(tasksSort, name, sortBy);
    let item = this.renderItem(tasksSort, editTodo, deleteTask);

    //render background
    if (tasks.length === 0) {
      return (
        <img src={noItemImg} alt='Todo no Item' />
      )
    } else { //render tasks list
      return (
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => { this.sort('n0') }} scope="col">
                <span className="d-inline">#</span>
                <div className="ml-2 d-inline">
                  {(name === '' || name === 'n0' && sortBy === true) ? <ButtonUp /> : (name === 'n0' && sortBy === false) ? <ButtonDown /> : ''}
                </div>
              </th>
              <th onClick={() => { this.sort('do') }} scope="col">
                <span>Do it</span>
                <div className="ml-2 d-inline">
                  {(name === 'do' && sortBy === true) ? <ButtonUp /> : (name === 'do' && sortBy === false) ? <ButtonDown /> : ''}
                </div>
              </th>
              <th onClick={() => { this.sort('status') }} scope="col">
                <span>Status</span>
                <div className="ml-2 d-inline">
                  {(name === 'status' && sortBy === true) ? <ButtonUp /> : (name === 'status' && sortBy === false) ? <ButtonDown /> : ''}
                </div>
              </th>
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