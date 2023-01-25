import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from "@angular/core";
import {Post} from "../post-main.component";


@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None
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
