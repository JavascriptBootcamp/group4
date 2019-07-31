import React from 'react';
import { Component } from 'react';
import Question from './question';

class Questions extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        let i = 0;
        return (
            <div>
                <Question questionProps={this.props.questions[i++]} questionNumber={i}/>
                <Question questionProps={this.props.questions[i++]} questionNumber={i}/>
                <Question questionProps={this.props.questions[i++]} questionNumber={i}/>
                <Question questionProps={this.props.questions[i++]} questionNumber={i}/>
                <Question questionProps={this.props.questions[i++]} questionNumber={i}/>
                <Question questionProps={this.props.questions[i++]} questionNumber={i}/>
                <Question questionProps={this.props.questions[i++]} questionNumber={i}/>
                <Question questionProps={this.props.questions[i++]} questionNumber={i}/>
                <Question questionProps={this.props.questions[i++]} questionNumber={i}/>
                <Question questionProps={this.props.questions[i++]} questionNumber={i}/>
            </div>

        );
        return null;
    }

}

export default Questions;