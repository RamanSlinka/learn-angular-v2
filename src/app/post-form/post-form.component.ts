import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {
  @Output() sendPost = new EventEmitter<Post>()

  @ViewChild('focusInput') focusRef: ElementRef

  title = ''
  text = ''


  createPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      }

      this.sendPost.emit(post)
      this.text = this.title = ''
    }
  }

  onFocus() {
    this.focusRef.nativeElement.focus()
    console.log(this.focusRef)
  }
}
