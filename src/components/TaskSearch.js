import React, {Component} from 'react';

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

export default Search;