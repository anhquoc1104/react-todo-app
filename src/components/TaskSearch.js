import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index.action';

class Search extends Component{

  onChange = (event)=>{
    let value = event.target.value;
    return this.props.changeToSearch(value.trim());
  };

  render(){
    return(
      <input 
        className="form-control rounded-pill" 
        type="text" 
        placeholder="Search in here..."
        autoFocus
        onChange={this.onChange}  
      />
    )
  };
};

let mapStateToProps = (state) => {
  return {

  }
};

let mapDispatchToProps = (dispatch, props) => {
  return {
    changeToSearch: (payload) => {
      dispatch(actions.searchList(payload));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);