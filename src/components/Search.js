import React, {Component} from 'react';

class Search extends Component{
  constructor(props){
    super(props);

  };

  render(){
    return(
      <input className="form-control rounded-pill" type="text" placeholder="search in here..." />
    )

  };
};

export default Search;