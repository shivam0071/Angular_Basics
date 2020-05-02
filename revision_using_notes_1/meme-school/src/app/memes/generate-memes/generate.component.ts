import {Component} from '@angular/core'

@Component({
    selector:"app-generate",
    templateUrl: "./generate.component.html",

})
export class GenerateComponent{
imagePath = "../../../assets/img1.jpg";
numb = 0;
getRandomInt() {
    this.numb = Math.floor(Math.random() * Math.floor(6));
    this.imagePath = "../../../assets/img".concat(this.numb.toString()).concat(".jpg");
  }
}