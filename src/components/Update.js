import React, { Component } from 'react';

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: true
    };
  };
  
  componentDidMount(){
    // console.log('ABC');
    if(this.props.editTask){
      // let {name, status} = this.props.editTask;
      console.log(this.props.editTask);
      this.setState({
        name: this.props.editTask.name
      })
    }
  }''

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.trim() !== '')
      this.props.updateState(this.state);
    this.setState({
      name: '',
      status: true
    })
  };

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if(name === 'status'){
      value = target.value === 'true' ? true : false;
    }
    this.setState({
      [name]: value
    });

    // console.log(this.state);
  };

  onClose = () => {
    // this.setState({
    //   showModal: true
    // });
    return "modal";
  };

  render() {
    // console.log(this.props.editTask);
    return (
      <div className="modal fade" id="todoModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Content</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">Content:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">Status:</label>
                  <select className="form-control mdb-select md-form ml-2" name="status" onChange={this.onChange}>
                    <option value={true}>Pending</option>
                    <option value={false}>Done</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary" onClick={this.onSubmit} data-dismiss="modal" >Update</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Update;