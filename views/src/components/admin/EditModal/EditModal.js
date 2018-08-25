import React, { Component } from "react";
import EditItem from "../EditItem"

class EditModal extends Component {

  render() {
    return (
      <div className="modal fade" id="editModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Item in Inventory</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <EditItem refreshInventoryList={this.refreshInventoryList}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditModal;
