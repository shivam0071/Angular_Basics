import {Component} from '@angular/core'

@Component({
    selector:"app-memes",
    templateUrl: "./memes.component.html",

})
export class MemesComponent{
    imagePath1 = "../../../assets/img1.jpg";
    numb = 0;
    getRandomInt() {
        this.numb = Math.floor(Math.random() * Math.floor(3));
        this.imagePath1 = "../../../assets/img".concat(this.numb.toString()).concat(".jpg");
      }
}