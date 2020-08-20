import React, { Component } from 'react';
import './App.css';
import TaskUpdate from './components/TaskUpdate';
import TaskSearch from './components/TaskSearch';
import TaskNew from './components/TaskNew';
import TaskList from './components/TaskList';
// import VN from './change_alias';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: {
        name: '',
        sortBy: true
      }
    };
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row mt-3">
            <div className="col col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <TaskSearch />
            </div>
            <div className="col col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">
              <TaskNew />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              <TaskList />
            </div>
          </div>
          {/* modal todo add/edit */}
          <TaskUpdate />
        </div>
      </div>
    );
  };
};

export default App;
