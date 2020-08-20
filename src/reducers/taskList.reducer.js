import * as types from '../constants/ActionTypes.constant';
import randomID from "../randomID";
import VN from '../change_alias';

//set Todo init
let initTodo = [
  {
    id: randomID(),
    name: "Do it 1",
    status: true
  },
  {
    id: randomID(),
    name: "Do it 2",
    status: false
  },
  {
    id: randomID(),
    name: "Do it 3",
    status: false
  },
  {
    id: randomID(),
    name: "Do it 4",
    status: true
  },
  {
    id: randomID(),
    name: "Do it 5",
    status: true
  }
];
localStorage.setItem('tasks', JSON.stringify(initTodo));

//get Todo from localStorage
let data = JSON.parse(localStorage.getItem('tasks'));
let initialState = data ? data : [];

let myReducer = (state = initialState, action) => {
  state = initialState;
  switch (action.type) {
    //Get All List
    case types.LIST_ALL:
      return state;
    // Add New Todo
    case types.ADD_LIST:
      let payloadADD = action.payload;
      let dataUpdate = {};
      dataUpdate.name = payloadADD.name;
      dataUpdate.status = payloadADD.status;
      //edit todo
      if (payloadADD.id) {
        for (let elm of state) {
          if (elm.id === payloadADD.id) {
            dataUpdate.id = payloadADD.id;
            let index = state.indexOf(elm);
            state.splice(index, 1, dataUpdate)
            break;
          }
        }
      } else { // new todo
        dataUpdate.id = randomID();
        state.push(dataUpdate);
      }
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    // Delete Todo
    case types.DELETE_LIST:
      //find index
      let id = action.payload;
      let index = state.findIndex(elm => elm.id === id);
      //remove todo
      if (index || index === 0) {
        state.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(state));
      }
      return [...state];
    // Change Status Todo
    case types.CHANGE_STATUS:
      let payloadStatus = action.payload;
      for (let elm of state) {
        if (elm.id === payloadStatus.id) {
          payloadStatus.status = !payloadStatus.status;
          let index = state.indexOf(elm);
          state.splice(index, 1, payloadStatus);
          break;
        }
      }
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    // Search
    case types.SEARCH_LIST:
      let value = action.payload;
      let tasks = [...state]
      let tasksSearch = [];
      if (value === '') {
        tasksSearch = [...tasks];
      } else {
        for (let task of tasks) {
          if (VN.change_alias(task.name).indexOf(VN.change_alias(value)) !== -1) {
            tasksSearch.push(task);
          }
        }
      }
      return tasksSearch;
    default:
      return [...state];
  }
};

export default myReducer;