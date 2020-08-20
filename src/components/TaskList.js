import React, { Component } from 'react';
import TaskDelete from './TaskDelete';
import TaskEdit from './TaskEdit';
import TaskStatus from './TaskStatus';
import ButtonUp from './ButtonUp';
import ButtonDown from './ButtonDown';
import VN from '../change_alias'
import './TaskList.css';
import noItemImg from '../img/background-noItem.png';
import { connect } from 'react-redux';
// import * as actions from '../actions/index.action';

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

  styleDone = () => {
    return {
      textDecoration: 'line-through',
      opacity: '60%'
    };
  };
  
  sort = (nameClick) => {
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
            return (VN.change_alias(a.name) > VN.change_alias(b.name) ? 1 :
              VN.change_alias(a.name) < VN.change_alias(b.name) ? -1 : 0);
          })
        } else {
          tasksSort.sort((a, b) => {
            return VN.change_alias(b.name) > VN.change_alias(a.name) ? 1 :
              VN.change_alias(b.name) < VN.change_alias(a.name) ? -1 : 0;
          })
        }
        break;
      case 'status':
        if (sortBy) {
          tasksSort.sort((a, b) => {
            return VN.change_alias(a.status.toString()) > VN.change_alias(b.status.toString()) ? 1 :
              VN.change_alias(a.status.toString()) < VN.change_alias(b.status.toString()) ? -1 : 0;
          })
        } else {
          tasksSort.sort((a, b) => {
            return VN.change_alias(b.status.toString()) > VN.change_alias(a.status.toString()) ? 1 :
              VN.change_alias(b.status.toString()) < VN.change_alias(a.status.toString()) ? -1 : 0;
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

  renderItem(tasksSort) {
    return tasksSort.map((elm, index) => {
      return (<tr key={elm.id}>
        <td scope="row" style={elm.status === true ? {} : this.styleDone()}>{index + 1}</td>
        <td style={elm.status === true ? {} : this.styleDone()}>{elm.name}</td>
        <td>
          <TaskStatus
            elm={elm}
            elmStatus={elm.status} />
        </td>
        <td>
          <TaskEdit
            elm={elm}
          />
          <TaskDelete
            id={elm.id}
          />
        </td>
      </tr>)
    });
  }

  render() {
    let { tasks} = this.props;
    let { name, sortBy } = this.state.sort;
    let tasksSort = tasks.slice(0);

    this.onSort(tasksSort, name, sortBy);
    let item = this.renderItem(tasksSort);

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
                  {((name === '') || ((name === 'n0') && (sortBy === true))) ? <ButtonUp /> :
                    ((name === 'n0') && (sortBy === false)) ? <ButtonDown /> : ''}
                </div>
              </th>
              <th onClick={() => { this.sort('do') }} scope="col">
                <span>Do it</span>
                <div className="ml-2 d-inline">
                  {(name === 'do' && sortBy === true) ? <ButtonUp /> :
                    (name === 'do' && sortBy === false) ? <ButtonDown /> : ''}
                </div>
              </th>
              <th onClick={() => { this.sort('status') }} scope="col">
                <span>Status</span>
                <div className="ml-2 d-inline">
                  {((name === 'status') && (sortBy === true)) ? <ButtonUp /> :
                    ((name === 'status') && (sortBy === false)) ? <ButtonDown /> : ''}
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

let mapStateToProps = (state) => {
  return {
    tasks: state.taskList
  }
};

let mapDispatchToProps = (dispatch, props) => {
  return {
    // editTodo: (value) => {
    //   dispatch(actions.editList(value));
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);