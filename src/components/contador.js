import React, {Component} from 'react';

class Contador extends Component{
    render(){
        if(this.props.division === 1){
            console.log("Valor",this.props.value)
            console.log("Modulo",this.props.value % 3)
            console.log("Division",this.props.value / 3)
            switch(this.props.module){
                case 0:
                return(
                    <h1 style={{backgroundColor: "red"}}> {this.props.value}</h1>
                )
                case 1:
                    return(
                        <h1 style={{backgroundColor: "green"}} > {this.props.value} </h1>
                    )
                case 2:
                    return(
                        <h1 style={{backgroundColor: "blue"}}> {this.props.value}</h1>
                    )
                default:
                    return(
                        <div>Unexpected error</div>
                    )
            }            
        } else {
            return(
                <div>
                    <h1>{this.props.value}</h1>
                </div>
            )
        }
        
    }
}
export default Contador;