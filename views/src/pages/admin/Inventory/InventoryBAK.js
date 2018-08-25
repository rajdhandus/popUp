import React, { Component } from "react";
import "./Inventory.css";
import AddItem from "../../../components/admin/AddItem"
import axios from "axios";

class Inventory extends Component {
  constructor(props) {
    super(props)
    this.getItems = this.getItems.bind(this);
  }
  state = {
    items: []
  }

  getItems() {
    axios.get('/api/items')
    .then(res => {
      const items = res.data;
      this.setState({ items })
    })
    .catch(function (err) {
      console.log(err);
    });
  }

  componentDidMount() {
    this.getItems();
  }

  buttonEdit(e, upc) {
    e.preventDefault();
    console.log(`Editing item with UPC #${upc} ...`)
    alert("This will edit the item with UPC " + upc);
  }


  // Matches with "/api/items/:upc"
  buttonRemove(e, upc) {
    e.preventDefault();
    var userConfirmation = window.confirm(`Are you sure you want to delete this item?`);
    if (!userConfirmation) {
      alert(`This item will not be deleted!`);
    } else {
      console.log(`Deleting item with UPC #${upc} ...`)
      // alert("This will remove item with UPC " + upc);
      axios.delete('/api/items/' + upc)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.getItems()
        //this.forceUpdate();
      }).catch(error => {
        console.log("There was an error deleting this item: ", error);
      })
    }
  }

  // componentRefresh(e) {
  //   e.preventDefault();
  //   axios.get('/api/items')
  //     .then(res => {
  //       const items = res.data;
  //       this.setState({ items })
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //     });
  // }
  

  render() {
    return (
      <div id="inventory" className="container">
        <div className="row">
          <div className="col-sm">
            <h1 className="text-center">
              Inventory
            </h1>
            <p>
              These are the items populating the inventory for Popup Theory. Revise or delete the items using the controls below, or <a id="add-item" href="">add a new item</a> to the inventory.
            </p>
            {this.state.items.map((item, i) => 
              <table className="table" key={i}>
                <tbody>
                  <tr>
                    <td colSpan="2">
                      <h2>{item.name}</h2>
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <span>ID:</span>
                            </td>
                            <td>
                              <span>{item._id}</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span>UPC:</span>
                            </td>
                            <td>
                              <span>{item.upc}</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span>PRICE:</span>
                            </td>
                            <td>
                              <span>${item.price}</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span>STOCK:</span>
                            </td>
                            <td>
                              <span>{item.stock}</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td align="center">
                      <img src={item.photoURL} alt={item.name} />
                    </td>
                    <td>
                      <div className="float-right">
                        <button
                          id="btnEdit"
                          className="btn btn-light"
                          type="button"
                          onClick={(e) => this.buttonEdit(e, item.upc)}>
                          Edit
                        </button>
                        <button 
                          id="btnRemove"
                          className="btn btn-light"
                          type="button"
                          onClick={(e) => {this.buttonRemove(e, item.upc);}}>
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
            <AddItem getItems={this.getItems}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Inventory;