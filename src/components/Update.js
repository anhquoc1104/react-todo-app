import React, { Component } from 'react';

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: '',
      status: true,
      editFlag: true
    };
  };

  // componentDidMount() {
  //   // console.log(this.props.editTask);
  //   if (this.props.editTask) {
  //     let { id, name, status } = this.props.editTask;
  //     this.setState({
  //       id: id,
  //       name: name,
  //       status: status
  //     });
  //   }
  // };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.trim() !== '')
      this.props.updateState(this.state);
    this.setState({
      id: null,
      name: '',
      status: true,
      editFlag: true
    });
  };

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      id: this.props.editTask ? this.props.editTask.id : null,
      name: value,
      status: this.props.editTask && this.state.editFlag ? this.props.editTask.status : this.state.status
    });
  };

  onChangeStatus = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if (name === 'status') {
      value = target.value === 'true' ? true : false;
    }
    this.setState({
      id: this.props.editTask ? this.props.editTask.id : null,
      name: this.props.editTask && this.state.name === '' ? this.props.editTask.name : this.state.name,
      status: value,
      editFlag: false
    });
  };

  onReset = () => {
    this.setState({
      id: null,
      name: '',
      status: true,
      editFlag: true
    });
  };

  render() {
    let name = this.props.editTask && this.state.name === '' ? this.props.editTask.name : this.state.name;
    let status = this.props.editTask && this.state.editFlag ? this.props.editTask.status : this.state.status;
    return (
      <div
        className="modal fade"
        id="todoModal"
        tabIndex={-1} role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      // onReset={this.onReset}
      >
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
                    value={name}
                    onChange={this.onChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">Status:</label>
                  <select
                    className="form-control mdb-select md-form"
                    name="status"
                    value={status}
                    onChange={this.onChangeStatus}
                  >
                    <option value={true}>Pending</option>
                    <option value={false}>Done</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={this.onReset}
              >
                Close</button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.onSubmit}
                data-dismiss="modal" >
                Update</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Update;