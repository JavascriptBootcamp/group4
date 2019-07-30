import React from 'react';

class Button extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <button onClick={this.props.setTs}>{this.props.operation}</button>;
    }
}

export default Button;