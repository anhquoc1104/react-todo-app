import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.action';

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: '',
      status: true
    };
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.trim() !== '')
      this.props.updateState(this.state);
    //reset state
    this.onReset();
  };

  onChange = (event) => {
    let { taskEdit } = this.props;
    let { id, status } = this.state;
    let target = event.target;
    let value = target.value;
    this.setState({
      id: (taskEdit.length !== 0) ? taskEdit.id : null,
      name: value,
      status: (taskEdit.length !== 0) ? (taskEdit.id === id ? status : taskEdit.status) : true
    });
  };

  onChangeStatus = (event) => {
    let { taskEdit } = this.props;
    let nameState = this.state.name;
    let idState = this.state.id;
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if (name === 'status') {
      value = target.value === 'true' ? true : false;
    }
    this.setState({
      id: (taskEdit.length !== 0) ? taskEdit.id : null,
      name: (taskEdit.length !== 0) ? (taskEdit.id === idState ? nameState : taskEdit.name) : '',
      status: value
    });
  };

  onReset = () => {
    this.setState({
      id: null,
      name: '',
      status: true
    });
  };

  render() {
    let { taskEdit } = this.props;
    let { id, name, status } = this.state;
    let nameTask = (taskEdit.length !== 0) ? (taskEdit.id === id ? name : taskEdit.name) : name;
    let statusTask = (taskEdit.length !== 0) ? (taskEdit.id === id ? status : taskEdit.status) : status;
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
                    autoFocus
                    value={nameTask || ''}
                    onChange={this.onChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">Status:</label>
                  <select
                    className="form-control mdb-select md-form"
                    name="status"
                    value={statusTask}
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

let mapStateToProps = (state) => {
  return {
    taskEdit: state.updateList.data
  }
};

let mapDispatchToProps = (dispatch, props) => {
  return {
    updateState: payload => {
      dispatch(actions.addList(payload));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Update);
