import {Component} from '@angular/core';



export interface  Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  posts: Post [] = [
    {
      id: 1,
      title: 'Learn JS',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, reprehenderit.'
    },
    {
      id: 2,
      title: 'Learn Angular',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, reprehenderit.'
    },
  ]

  constructor() { }




}
