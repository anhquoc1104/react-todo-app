import React, { Component } from 'react';

class Update extends Component {
  constructor(props) {
    super(props);

  };

  render() {
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
              <form>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">Content:</label>
                  <input type="text" className="form-control" id="recipient-name" />
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">Status:</label>
                  <select className="mdb-select md-form ml-2">
                    <option value={1}>Pending</option>
                    <option value={2}>Done</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Update</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Update;