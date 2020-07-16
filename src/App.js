import React, { Component } from 'react';
import './App.css';
import Update from './components/Update';
import Search from './components/Search';
import New from './components/New';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskEdit: null
    };
  };

  componentDidMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      });
    };
  };

  hexa4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  };

  generateId() {
    return this.hexa4() + '-' + this.hexa4() + this.hexa4() + '-' + this.hexa4() + this.hexa4() + '-' + this.hexa4();
  };

  changeStatus = (isStatus) => {
    this.setState({
      tasks: isStatus
    });
  };

  updateState = (data) => {
    // console.log(data);
    data.id = this.generateId();
    let tasks = this.state.tasks;
    tasks.push(data);
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  };

  deleteTask = (index) => {
    // console.log(index);
    let tasks = this.state.tasks;
    tasks = tasks.slice(0, index).concat(tasks.slice(index + 1));
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  generateTasks = () => {
    let tasks = [
      {
        id: this.generateId(),
        name: 'Do it 1',
        status: true
      },
      {
        id: this.generateId(),
        name: 'Do it 2',
        status: false
      }
    ];
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // console.log('A');
  };

  editTodo =(id) =>{
    // console.log(id);
    let tasks = this.state.tasks;
    for (let elm of tasks){
      if(elm.id === id){
        // console.log(elm);
        this.setState({
          taskEdit: elm
        })
      }
    }
  };

  render() {
    let {tasks, taskEdit} = this.state;
    // console.log(taskEdit);
    return (
      <div className="App">
        <div className="container">
          <div className="row mt-3">
            <div className="col col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <Search />
              <button onClick={this.generateTasks} type="button" className="btn btn-primary">Generate</button>
            </div>
            <div className="col col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <New />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              <TaskList
                tasks={tasks}
                updateStatus={this.changeStatus}
                deleteTask={this.deleteTask} 
                editTodo={this.editTodo}
                />
            </div>
          </div>
          {/* modal todo add/edit */}
          <Update updateState={this.updateState} editTask={taskEdit} />
        </div>
      </div>
    );
  };
};

export default App;
