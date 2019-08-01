import React from 'react';
import { Component } from 'react';

class Question extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const questionProps = this.props.questionProps;
        return (


            <div>
                <h4>Question {this.props.questionNumber}.</h4>
                <h4> {questionProps.question} </h4>
                <select defaultValue={questionProps.option3} ref={this.props.questionNumber} onChange={this.onAnswerChanged}>
                    <option value={questionProps.option1}>{questionProps.option1}</option>
                    <option value={questionProps.option2}>{questionProps.option2}</option>
                    <option value={questionProps.option3}>{questionProps.option3}</option>
                    <option value={questionProps.option4}>{questionProps.option4}</option>
                </select>
            </div>

        );
    }
    onAnswerChanged = ()=>{
        if (this.refs[this.props.questionNumber] ) {
            const elementRef = this.refs[this.props.questionNumber];
            this.props.questionProps.selectedAnswer = elementRef.value;
            // console.log(elementRef.value);
          }
    }

}

export default Question;