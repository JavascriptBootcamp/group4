import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  url: string;
  port: number;
  constructor() {
    this.port = 5000;
    this.url = `http://localhost:${this.port}`;
  }

  getData(input) {
    const action = input.action;
    const searchBy = input.searchBy;
    let query;
    if(action === 'addCar'){
      query = `${this.url}/car`;
      const header = {method:"POST",body:JSON.stringify(input.body)};
      console.log(query,header);
      return fetch(query,header);
    }
    console.log("searchBy:",searchBy);

    if(searchBy === 'all'){
      query = `${this.url}/cars`;
      return fetch(query);
    }
    let car = input.isQueryForOneCar ? 'car' : 'cars';
    const input1 = input.input1;
    const input2 = input.input2 ? input.input2 : '';
    const newInput = this.getKeysInputs(input);
    const keyInput1 = newInput.keyInput1;
    const keyInput2 = newInput.keyInput2 ? newInput.keyInput2 : '';
    const p1 = `${keyInput1}=${input1}`;
    const p2 = keyInput2 ? `&${keyInput2}=${input2}` : '';
    query = `${this.url}/${car}?${p1}${p2}`;
    console.log("query:",query);

    return fetch(query);
  }

  getKeysInputs(input) {
    console.log("input:",input);
    let searchBy;
    if (input.action !== "addCar") {
      let keyInput1 = "";
      let keyInput2 = "";
      searchBy = input.searchBy;
      switch (searchBy) {
        case "license":
          keyInput1 = "ln";
          break;
        case "two licenses":
          keyInput1 = "ln1";
          keyInput2 = "ln2";
          break;
        case "model":
          keyInput1 = "model";
          break;
        case "company":
          keyInput1 = "manufacturer";
          break;
        case "year range":
          keyInput1 = "from";
          keyInput2 = "to";
          break;
      }
      input = { keyInput1, keyInput2 };
      console.log("newInput:",input);
    }
    else {
      // input1 = input.postInputs;
      // input = { action: input.action, input1 };
    }
    return input;
  }

}




