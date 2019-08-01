import React, { Component } from 'react';
import { Counter } from './Counter';
import Button from './Button';

class App extends Component {
    //  constructor() {
    //     super();
    // }

    // increase() {
    //     this.setState({
    //         value: this.state.value + 1
    //     });
    // }

    // decrease() {
    //     this.setState({
    //         value: this.state.value - 1
    //     });
    // }

    state = {
        value: 0
    }

    increase = () => {
        this.setState({
            value: this.state.value + 1
        });
    }

    decrease = () => {
        this.setState({
            value: this.state.value - 1
        });
    }

    render() {
        return (
        <>
            <Counter number={this.state.value} />
            {/* <Button sign="+" onOperation={ this.increase.bind(this) } />
            <Button sign="-" onOperation={ this.decrease.bind(this) } /> */}
            {/* <Button sign="+" onOperation={ () => this.increase() } />
            <Button sign="-" onOperation={ () => this.decrease() } /> */}
            <Button sign="+" onOperation={ this.increase } />
            <Button sign="-" onOperation={ this.decrease } />
        </>
        )
    }
}

export default App;