import { Component } from '@angular/core';

@Component({
  selector: 'app-base-directive',
  templateUrl: './base-directive.component.html',
  styleUrls: ['./base-directive.component.scss']
})
export class BaseDirectiveComponent {


  backgroundToggle :boolean | number  = true

  arr = [1, 2, 3]
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
