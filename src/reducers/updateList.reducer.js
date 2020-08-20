import * as types from '../constants/ActionTypes.constant';

let initialState = {
  data: []
}

let myReducer = (state = initialState, action) => {
  switch (action.type) {
    // Edit Todo
    case types.EDIT_LIST:
      let data = action.payload;
      return {
        ...state,
        data: data
      }
    // Reset State when New Todo
    case types.NEW_TODO:
      return {
        ...state,
        data: []
      }
    default:
      return {
        ...state,
        data: []
      };
  }
};

export default myReducer;