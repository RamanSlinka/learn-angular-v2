import {Component, ContentChild, ElementRef, Input, OnInit} from "@angular/core";
import {Post} from "../app.component";


@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html',
})

export class PostComponent implements OnInit{

  @Input() post: Post
  @ContentChild('info', {static: true}) nameMethod: ElementRef

  ngOnInit(){
    console.log(this.nameMethod.nativeElement)

  }

}
