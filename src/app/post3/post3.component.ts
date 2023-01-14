import { Component } from '@angular/core';

@Component({
  selector: 'app-post3',
  template: `
  <div class="post3">
    <h2>Post title(test)</h2>
    <p>This post is created with inline template and inline stiles </p>
  </div>
  `,
  styles: [`
  .post3{
    border: 1px gray dashed;
    margin: 5px;
    padding: 5px;
  }`]
})
export class Post3Component {

}
