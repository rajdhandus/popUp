import React, { Component } from "react";
import AddItem from "../AddItem"

class AddModal extends Component {

  render() {
    return (
      <div className="modal fade" id="addModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Item To Store Inventory</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <AddItem refreshInventoryList={this.refreshInventoryList}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddModal;
