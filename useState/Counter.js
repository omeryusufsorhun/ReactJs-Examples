import React, { Component } from 'react'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'





export default class Counter extends Component {

    state = {
        count: 0,
    }
    increase() {
        this.setState({
            count: this.state.count + 1,
        })


    }
    decrease(){
        this.setState({
            count:this.state.count-1,
        })
    }
    render() {
        return (
            <>
                <p>Sayi :  {this.state.count}</p>
                <button onClick={() => this.increase()}>Arttir</button>
                <button onClick={() => this.decrease()}>Azalt</button>


            </>
        )
    }
}
