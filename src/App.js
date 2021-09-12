import React, {Component} from 'react';
import Contador from './components/contador.js';
import './App.css';
const url = "http://localhost:5000/"

class App extends Component {
  state = {
    value: 0,
    division: 0,
    module: 0
  }
  senData = (refreshValue) => {
    fetch(`${url}refresh`,{
      method: 'POST',
      body: JSON.stringify(refreshValue),
      headers:{
        'Content-Type': 'application/json' 
      },            
    }).then( response => {
      return response.json();
    }).then (data => {
      console.log(data)
    }).catch( err => {
      console.log(err);
    })
  }
  componentDidMount(){
    console.log("Realizando el fetch")
    fetch(url).then(response =>{
      return response.json();
    }).then( data => {
      const { value } = data
      this.setState({
        value: value
      })
      console.log(data);
    })
    .catch( err => {      
      console.log (err);

    })
  }
  add = () => {
    this.setState({
      value: this.state.value + 1,
      division: 0
    })
    let datos = {
      value: this.state.value + 1
    }
    this.senData(datos)    
  }
  substract = () => {
    this.setState({
      value: this.state.value - 2,
      division: 0
    })
    let datos = {
      value: this.state.value - 2
    }
    this.senData(datos) 
    
  }
  divide = () => {
    console.log("modulo",this.state.value%3)
    this.setState({
      value: parseFloat(this.state.value) / 3,
      module: this.state.value % 3,
      division: 1
    })
    let datos = {
      value: parseFloat(this.state.value) / 3,
    }
    this.senData(datos) 
  }
  reset = () => {
    this.setState({
      value: 0,
      division: 0   
    })
    let datos = {
      value: 0
    }
    this.senData(datos)
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
