import React, { Component } from 'react'

export default class Contador extends Component {
    state = {
        numero:this.props.numeroInicial
    }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1})
        // this.state.numero = this.state.numero + 1

    }
    menosUm = () => {
        this.setState({ numero: this.state.numero - 1})
        // this.state.numero = this.state.numero + 1

    }
    
    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm} >Inc</button>
                <button onClick={this.menosUm} >Dec</button>                
            </div>
        )
    }

}

// 01 solução - Bind
    // constructor(props){
    //     super(props)
    //     this.maisUm = this.maisUm.bind(this)
    // }

// 02 solução função arrow no onClick

//<button onClick={() =>this.maisUm()} >Inc</button>


  // 03 solução arrow funcion
//   maisUm = ()=>{
//     //this.props.numero++
//     console.log(this)
// }