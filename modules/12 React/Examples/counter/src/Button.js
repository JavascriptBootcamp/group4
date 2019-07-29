import React from 'react';

// const Button = ({ sign, onOperation }) => (
//     <button onClick={ onOperation }>{ sign }</button>
// );

class Button extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     someText: "someValue"
        // }
        // console.log(this.state);
        console.log(props.sign);
    }

    render() {
        // return (
        //     <button onClick={ this.props.onOperation }>{ this.props.sign }</button>
        // )
        const increaseElement = <button onClick={ this.props.onOperation }>+</button>;
        const decreaseElement = <button onClick={ this.props.onOperation }>-</button>;

        if (this.props.sign === "+"){
            return increaseElement;
        }
        else {
            return decreaseElement;
        }
    }
}

export default Button;

// BEHIND THE SCENES
// let component = new Button(props);