import {Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post
  @ContentChild('info', {static: true}) infoRef: ElementRef
  @Output() onRemove = new EventEmitter<number>()

  removePost() {
    this.onRemove.emit(this.post.id)
  }

  constructor() {
  }

  ngOnInit() {
    console.log(this.infoRef.nativeElement)
  }


}
