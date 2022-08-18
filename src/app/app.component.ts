import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  colorArray:Array<string> = new Array<string>();

  
  ngOnInit(): void {
    this.setArrayColors();
  }
  
   
  setArrayColors() {
     let length = 6;
     let hex;
    while(length--) {
      hex = this.getRandomColor();
      this.colorArray.push(hex);
    }
  }


  getRandomColor() {
    const color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
}


