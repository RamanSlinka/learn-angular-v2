import {Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Post} from "../app.component";


@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html',
})

export class PostComponent implements OnInit {

  @Input() post: Post
  @Output() removePost = new EventEmitter<number>()
  @ContentChild('info', {static: true}) nameMethod: ElementRef

  ngOnInit() {
    console.log(this.nameMethod.nativeElement)

  }

  sendId() {
    const id = this.post.id
    this.removePost.emit(id)
  }
}
