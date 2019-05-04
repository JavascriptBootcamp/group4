import { Injectable } from '@angular/core';
import { Answer } from './answer.model';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  answers:Answer[];
  constructor() {
    this.fillanswers();
   }

  fillanswers()
  {
    this.answers=[
     { 
      option1: "Elizebeth the 1st",

      option2:"  Elizebeth the 2nd",

      option3:" Elizebeth the 3rd",
      option4:"  Elizebeth the 4th"

    },
      {
        option1:"Trump",option2:"trump",option3:"Trevor",option4:"Obama"
      },
      {
        option1: "1971",option2:"1951",option3:"1963",option4:"1990"

      },
      {
        option1: "Dallas",option2:"Houston",option3:"New York",option4:"Boston"

      },
      {option1:"Ariel",option2:"Jake",option3:"Ringo",option4:"Pete" },
      { 
        option1: "Elizebeth the 1st",
  
        option2:"  Elizebeth the 2nd",
  
        option3:" Elizebeth the 3rd",
        option4:"  Elizebeth the 4th"
  
      },
        {
          option1:"Trump",option2:"trump",option3:"Trevor",option4:"Obama"
        },
        {
          option1: "1971",option2:"1951",option3:"1963",option4:"1990"
  
        },
        {
          option1: "Dallas",option2:"Houston",option3:"New York",option4:"Boston"
  
        },
        {option1:"Ariel",option2:"Jake",option3:"Ringo",option4:"Pete" }
    ];
  }
  getAnswers():Answer[]
  {
    return this.answers;
  }
}
