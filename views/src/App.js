import React, { Component } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = { 
    users: [],
    flowers: []
  }

  componentDidMount() {

    axios.get('/admin')
      .then((response) => {
        this.setState({users: response.data})
      })

    axios.get('/store')
    .then((response) => {
      this.setState({flowers: response.data})
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Team Members</h1>
        <h2>(parsed response from /admin)</h2>
        {this.state.users.map(user => 
          <p key={user.id}>{user.name}</p>
        )}
        <br/>
        <h1>Sample Products</h1>
        <h2>(parsed response from /store)</h2>
        {this.state.flowers.map(flowers => 
          <p key={flowers.id}>{flowers.name}</p>
        )}
      </div>
    );
  }

}

export default App;