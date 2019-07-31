import React from 'react';

class Button extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <button onClick={this.onClicked}>{this.props.operation}</button>;
    }

    onClicked = ()=>{

        this.props.onSubmit();
    }
}

export default Button;