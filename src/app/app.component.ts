import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  word = 'hello'
  num = 10
  arr = [1,2,3]
  obj = {a:1, b:{c:2}}


     constructor() {}

}
