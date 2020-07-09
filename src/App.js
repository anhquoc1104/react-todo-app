import React, { Component } from 'react';
import './App.css';
import Update from './components/Update';
import Search from './components/Search';
import New from './components/New';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);

  };


  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row mt-3">
            <div className="col col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <Search />
            </div>
            <div className="col col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <New />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <TaskList />
            </div>
          </div>
        {/* modal todo add/edit */}
          <Update />
        </div>


        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  };
}

export default App;
