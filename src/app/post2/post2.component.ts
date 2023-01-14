import {Component} from '@angular/core';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.scss']
})
export class Post2Component {
  title = 'Displaying values with interpolation'
  number = 45
  array = [1, 2 , 3]
  object = {a:1, b: {c:2}}
}
