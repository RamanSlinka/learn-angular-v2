import {Pipe, PipeTransform} from '@angular/core';
import {PostOfPipe} from "../detail-pipes/detail-pipes.component";

@Pipe({
  name: 'filter',
   pure: false
})
export class FilterPipe implements PipeTransform {

  transform(posts: PostOfPipe[], search: string = '', searchBy: 'title' | 'text' = 'title'): PostOfPipe[] {
    if (!search.trim()) {
      return posts;
    }
    return posts.filter((post: PostOfPipe) => {
      console.log('pipe')
      return post[searchBy].toLowerCase().includes(search.toLowerCase())

    })
  }

}
