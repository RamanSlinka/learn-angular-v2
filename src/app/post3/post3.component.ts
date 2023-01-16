import {Component} from '@angular/core';

@Component({
  selector: 'app-post3',
  templateUrl: 'post3.component.html'
})
export class Post3Component {

  arr = [1, 1, 2, 3, 5, 8, 13]
  posts = [
    {
      title: 'POST 1', author: 'Greg', comments: [
        {name: 'Max', text: 'lorem1'},
        {name: 'Bax', text: 'lorem2'},
        {name: 'Ka-Ka', text: 'lorem3'},
      ]
    },
    {
      title: 'POST 2', author: 'Piter', comments: [
        {name: 'Jax', text: 'lorem1'},
        {name: 'Ja-Ja', text: 'lorem2'},
        {name: 'Ra-Jax', text: 'lorem3'},
      ]
    },
  ]
}
