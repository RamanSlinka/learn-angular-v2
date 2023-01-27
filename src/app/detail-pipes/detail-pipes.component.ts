import {Component} from '@angular/core';
import {Observable} from "rxjs";


export interface PostOfPipe {
  title: string
  text: string
}

@Component({
  selector: 'app-detail-pipes',
  templateUrl: './detail-pipes.component.html',
  styleUrls: ['./detail-pipes.component.scss']
})

export class DetailPipesComponent {

  e: number = Math.E
  str = 'hello world'
  date: Date = new Date
  float: number = 0.45
  obj = {
    a: 1,
    b: 2,
    c: {
      d: 3,
      e: 'Hello World'
    }
  }

  search: string = ''
  searchBy: 'title' | 'text' = 'title'
  posts: PostOfPipe[] = [
    {title: 'JavaScript', text: 'My first programming language'},
    {title: 'React', text: 'I started  studying this in an IT-incubator'},
    {title: 'Angular', text: 'It`s my first framework '},
  ]

  dateOnline$: Observable<Date> = new Observable((obs) => {
    setInterval(() => {
      obs.next(new Date())
    }, 1000)
  })


  addPost() {
    this.posts.unshift({
      title: 'NewPost',
      text: 'Some new text...'
    })
  }
}
