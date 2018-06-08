import { Component,Input, OnInit } from '@angular/core';
import { Post } from './Post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;

  constructor() {
   }
  ngOnInit() {
  }
  onIncremente(){
    this.post.loveIts++;
    }
  
    onDecrimente(){
    this.post.loveIts--;
    }

}
