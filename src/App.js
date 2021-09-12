import React, {Component} from 'react';
import Contador from './components/contador.js';
import './App.css';


class App extends Component {
  state = {
    value: 0,
    division: 0,
    module: 0
  }

  add = () => {
    this.setState({
      value: this.state.value + 1,
      division: 0
    })
        
  }
  substract = () => {
    this.setState({
      value: this.state.value - 2,
      division: 0
    })
    
    
  }
  divide = () => {
    console.log("modulo",this.state.value%3)
    this.setState({
      value: parseFloat(this.state.value) / 3,
      module: this.state.value % 3,
      division: 1
    })
    
  }
  reset = () => {
    this.setState({
      value: 0,
      division: 0   
    })
    
  }
  render(){
    return (
      <div className="App">
        <h1>Ejercicio 2</h1>
        <button className="a1" onClick={this.add} >Add</button>
        <button className="boton" onClick={this.substract} >Substract</button>
        <button className="boton" onClick={this.divide} >Divide</button>
        <button className="boton" onClick={this.reset} >Reset</button>
        <Contador value={this.state.value} division={this.state.division} module={this.state.module} />

      </div>
    );

  }
  
}

export default App;
