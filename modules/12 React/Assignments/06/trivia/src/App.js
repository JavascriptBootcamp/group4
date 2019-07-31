import React from 'react';
import {Component} from 'react';
import './App.css';
import Button from './components/button';
import Questions from './components/questions';

const questions = [
  { question: "1 + 1 ?", option1: "02", option2: "03", option3: "04", option4: "05", answer: "02", selectedAnswer: "04" },
  { question: "2 + 2 ?", option1: "04", option2: "06", option3: "08", option4: "10", answer: "04", selectedAnswer: "08" },
  { question: "3 + 3 ?", option1: "06", option2: "09", option3: "12", option4: "15", answer: "06", selectedAnswer: "12" },
  { question: "4 + 4 ?", option1: "08", option2: "12", option3: "16", option4: "20", answer: "08", selectedAnswer: "16" },
  { question: "5 + 5 ?", option1: "10", option2: "15", option3: "20", option4: "25", answer: "10", selectedAnswer: "20" },
  { question: "6 + 6 ?", option1: "12", option2: "18", option3: "24", option4: "30", answer: "12", selectedAnswer: "24" },
  { question: "7 + 7 ?", option1: "14", option2: "21", option3: "28", option4: "35", answer: "14", selectedAnswer: "28" },
  { question: "8 + 8 ?", option1: "16", option2: "24", option3: "32", option4: "40", answer: "16", selectedAnswer: "32" },
  { question: "9 + 9 ?", option1: "18", option2: "27", option3: "36", option4: "45", answer: "18", selectedAnswer: "36" },
  { question: "10 + 10 ?", option1: "20", option2: "30", option3: "40", option4: "50", answer: "20", selectedAnswer: "40" }
];

class App extends Component {
  // constructor(){
  //   super();

  // }

  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <Questions questions={questions}/>
        <Button onSubmit={this.onSubmitClicked} operation="Submit" />
        <div>ts: 1547375825757</div>
      </form>
    );
  }

 onSubmit = event=>{
  event.preventDefault();
  };


  onSubmitClicked = async()=>{
    console.log("questions:",questions);
    const body = {
      questions,
      ts: "1547375825757"
    };
    const header = {
      method: "POST",
      header:{ "Content-Type":"json\application"},
      body: JSON.stringify(body)
    }
    const stream = await fetch('http://localhost:3000/quiz',header);
    const res = await stream.text();

    console.log(res);
  }


}

export default App;
