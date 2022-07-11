import React, { Component } from 'react';

class Child extends Component {
    render() {
        return (
            <div>
                <h1>child Component</h1>  
                 <br></br><hr></hr><br></br>            
                <h1>count={this.props.counting}</h1>
            </div>
        );
    }
}

export default Child;