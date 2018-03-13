import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends Component {

  state = {
    manager = ''
  };

  async componentDidMount(){
    // note we don't have to specify who it is from because it's being pulled from MetaMask
    const manager = await lottery.methods.manager().call();
     this.setState( {manager});
  }

  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>This contract is managed by {this.state.manager}</p>
      </div>
    );
  }
}

export default App;
