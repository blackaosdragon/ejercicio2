import React, {Component} from 'react';

import './App.css';

class App extends Component {
  state = {
    value: 0
  }
  add = () => {
    this.setState({
      value: this.state.value + 1
    })
  }
  substract = () => {
    this.setState({
      value: this.state.value - 2
    })
  }
  divide = () => {
    this.setState({
      value: this.state.value / 3
    })
  }
  reset = () => {
    this.setState({
      value: 0
    })
  }
  render(){
    return (
      <div className="App">
        <h1>Ejercicio 2</h1>
        <button onClick={this.add} >Add</button>
        <button onClick={this.substract} >Substract</button>
        <button onClick={this.divide} >Divide</button>
        <button onClick={this.reset} >Reset</button>
        <h1>{this.state.value}</h1>

      </div>
    );

  }
  
}

export default App;
