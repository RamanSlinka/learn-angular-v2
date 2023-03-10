import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}
@Component({
  selector: 'app-post-main',
  templateUrl: './post-main.component.html',
  styleUrls: ['./post-main.component.scss']
})
export class PostMainComponent {


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

  constructor() {
  }


  updatePosts(post: Post) {
    this.posts.unshift(post)
  }

  deletePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id )
  }
}
