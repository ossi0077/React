import React, { Component } from 'react';

class Box1 extends Component {
    render() {
        return (
            <div className='box'>
                Box 1
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default Box1;