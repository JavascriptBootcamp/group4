import React from 'react';
import { Component } from 'react';

class Question extends Component {
    constructor(props) {

    }

    render() {
        const questionProps = this.props.questionProps;
        return (


            <div>
                <h4>Question {questionProps.questionNumber}</h4>
                <select>
                    <option value={questionProps.val1}>{questionProps.text1}</option>
                    <option value={questionProps.val2}>{questionProps.text2}</option>
                    <option selected value={questionProps.val3}>{questionProps.text3}</option>
                    <option value={questionProps.val4}>{questionProps.text4}</option>
                </select>
            </div>

        );
    }

}

export default Question;