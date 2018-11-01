import React, { Component } from 'react';

export default class SimpleComponent extends Component {

    state = {
        mood: 'happy'
    }

    handleClick = (event) => {
        const moody = this.state.mood === 'happy' ? this.state.mood = 'sad' : this.state.mood = 'happy'
        this.setState({ moody })
    }

    render() {
        return (
            <div onClick={this.handleClick}>{ this.state.mood }</div>
        )
    }
}
