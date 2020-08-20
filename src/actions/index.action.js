import * as types from '../constants/ActionTypes.constant';

// taskList.reducer
// get all list
export const listAll = () => {
  return {
    type: types.LIST_ALL
  }
};

// Add new Todo
export const addList = (payload) => {
  return {
    type: types.ADD_LIST,
    payload
  }
};

// Delete Todo
export const deleteList = (payload) => {
  return {
    type: types.DELETE_LIST,
    payload
  }
};

// Change Status Todo
export const changeStatus = (payload) => {
  return {
    type: types.CHANGE_STATUS,
    payload
  }
};

// Search Todo
export const searchList = (payload) => {
  return {
    type: types.SEARCH_LIST,
    payload
  }
};

//updateList.reducer
// Edit Todo
export const editList = (payload) => {
  return {
    type: types.EDIT_LIST,
    payload
  }
};

// Reset state when New Todo
export const newTodo = (payload) => {
  return {
    type: types.NEW_TODO,
    payload
  }
};