import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gallery';
  data: string[];
  currentIndex: number;
  stopTheLeftSlide:boolean;
  stopTheRightSlide:boolean;

  constructor() {
    this.data = [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTVf63Vm3XgOncMVSOy0-jSxdMT8KVJIc8WiWaevuWiPGe0Pm',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqfYOpIsjIBpkAAR1HHsOx7gXn4tTNHca_c3N-qE-iePxJ-5pE',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZtjprGwxPE5FVcY72h1MWxvVVSiW7RFHmJ6DZ9G1lf0YOr-vV',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4d6DZJXuNq3L1UCbtay8IhciDTkHFk1szRFi9x4plRQ1JxZm',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCnujqDQMhwt0r1vpbGvRfKN2Ne13OK7eu1oIE31BIUR7k_peT',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6o9gQUhGxxKKuQBleye_ibGBuV-mo1duupUN8Zn3XC34h0Ugd7A',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MSNr9P29sqLb80wUNPW6PoDiSqp0Dwth9e-JX3lgmeqbTLI9SQ',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLb5mOUtzV0ObqBVuAURSvPAsC27148aFdKGc6e6Z_Z78vmMWf',
      'http://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg',
      'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    ];


    this.currentIndex = 0;
    this.stopTheLeftSlide = false;
    this.stopTheRightSlide = false;
  }


  leftArrowClicked() {

    if (this.currentIndex > 0)
      this.currentIndex--;

  }

  rightArrowClicked() {

    if (this.currentIndex < this.data.length - 1)
      this.currentIndex++;
  }

  smallImgClicked(index) {
    this.currentIndex = index;
  }

  slideLeft(imagesDiv) {
    this.stopTheLeftSlide = false;
    let pos = Number(imagesDiv.style.marginLeft.split("px")[0]) ;
    const runLeft = () => {
      if (pos < -1000 || this.stopTheLeftSlide) {
        clearInterval(imagesDiv);
        return;
      }
      else {
        pos = Number(imagesDiv.style.marginLeft.split("px")[0]) - 100;
        imagesDiv.style.marginLeft = pos + 'px';
      }
    }
    setInterval(runLeft, 1000);

  }

  slideRight(imagesDiv) {
    this.stopTheRightSlide = false;
    let pos = Number(imagesDiv.style.marginLeft.split("px")[0]) ;
    const runRight = () =>{
      if (pos > 0 || this.stopTheRightSlide) {
        clearInterval(imagesDiv);
        return;
      }
      else{
        pos = Number(imagesDiv.style.marginLeft.split("px")[0]) + 100;
        imagesDiv.style.marginLeft = pos + 'px';
      }
    }
    setInterval(runRight, 1000);
  }

  stopLeftSlide(){
    this.stopTheLeftSlide = true;
  }

  stopRightSlide(){
    this.stopTheRightSlide = true;
  }


}
