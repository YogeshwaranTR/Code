import React, { Component } from 'react';
import Child from './Child';


class Parent extends Component 
{
    constructor()
    {
        super();
        this.state={count:0}
    }
    increment=()=>
    {
        this.setState({count:this.state.count+1})
    }
    decrement=()=>
    {
        this.setState({count:this.state.count-1})
    }
    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <br></br><hr></hr><br></br>
                <button onClick={this.increment} >Increment </button><br></br>
                <button onClick={this.decrement} > Decrement </button>
                <h2>count={this.state.count}</h2>
                <br/>
                <br/>
                <br/>
                <Child counting={this.state.count}></Child>

            </div>
        );
    }
}

export default Parent;