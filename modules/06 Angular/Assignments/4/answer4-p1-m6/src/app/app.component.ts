import { Component, OnInit} from '@angular/core';


/* function evenWords(st) {

  var splintWords = st.split(" ");


  for (var i = 1; i < splintWords.length; i++) {

      if (i % 2 != 0)
          console.log(splintWords[i]);

  }

} */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  title = 'answer4-p1-m6';
  evenWord:string;


  evenWords(st:string):string {

    let evenWordArr:string[];
    let splintWords = st.split(" ");
    

    for (let i = 0; i < splintWords.length; i++) {

      if ( i % 2 != 0 )
        evenWordArr.push(splintWords[i]);

    }
   
    return evenWordArr.join(" ");

  }

  ngOnInit(){
    //this.evenWord  = this.evenWords("avi dhjjh lkkd djjd");
  }
}
