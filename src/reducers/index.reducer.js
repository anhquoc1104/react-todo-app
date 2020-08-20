import {combineReducers} from 'redux';
import taskList from './taskList.reducer';
import updateList from './updateList.reducer';

const myReducer = combineReducers({
  taskList,
  updateList
});

export default myReducer;

