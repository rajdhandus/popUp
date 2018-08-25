import React, { Component } from "react";
import "./EditItem.css";
import axios from "axios";

class EditItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      upc: '',
      price: '',
      stock: '',
      photoURL: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
      upc: this.state.upc,
      price: this.state.price,
      stock: this.state.stock,
      photoURL: this.state.photoURL
    };
    // console.log('Adding the following item object: ', data)
    axios.post('/api/items', data)
    .then(res => {
      // console.log(res);
      // console.log(`Reponse data: `, res.data);
      this.props.refreshInventoryList();
      // console.log("Clearing the form.")
      this.setState ({
        name: '',
        upc: '',
        price: '',
        stock: '',
        photoURL: ''
      // }, 
      // function() {
      //   console.log("State should be cleared, yes?", this.state);
      })
      document.getElementById("form").reset();
      alert(`"${res.data.name}" (UPC #${res.data.upc}) was added to the inventory.`);
      document.getElementById("btnClear").click();
    }).catch(error => {
      console.log(error);
    })
  }

  handleClear(event) {
    event.preventDefault();
    // console.log("Clearing the form.");
    this.setState ({
      name: '',
      upc: '',
      price: '',
      stock: '',
      photoURL: ''
    // }, 
    // function() {
    //   console.log("State should be cleared, yes?", this.state);
    })
    document.getElementById("editForm").reset();
  }

  render() {
    return (
      <div>
        <form id="editForm">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="inputName"
              className="form-control"
              name="name"
              type="text"
              onChange={event => this.handleChange(event)} />
          </div>
          <div className="form-group">
            <label htmlFor="upc">UPC:</label>
            <input
              id="inputUPC"
              className="form-control"
              name="upc"
              type="text"
              onChange={event => this.handleChange(event)} />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              id="inputPrice"
              className="form-control"
              name="price"
              type="text"
              onChange={event => this.handleChange(event)} />
          </div>
          <div className="form-group">
            <label htmlFor="stock">Stock:</label>
            <input
              id="inputStock"
              className="form-control"
              name="stock"
              type="text"
              onChange={event => this.handleChange(event)} />
          </div>
          <div className="form-group">
            <label htmlFor="photoURL">Photo URL:</label>
            <input
              id="inputPhotoURL"
              className="form-control"
              name="photoURL"
              type="text"
              onChange={event => this.handleChange(event)} />
          </div>
          <button
            className="btn btn-light"
            type="submit" 
            onClick={this.handleSubmit}>
            Submit
          </button>
          <button
            id="btnClear"
            className="btn btn-light"
            type="button"
            data-dismiss="modal"
            onClick={this.handleClear} >
            Close
          </button>
        </form>
      </div>
    )
  }
}

export default EditItem;