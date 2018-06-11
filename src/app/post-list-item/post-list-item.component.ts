import { Component, Input, OnInit } from '@angular/core';
import { Post } from './Post';
import { PostService } from '../service/post.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
   @Input() post: Post;
   @Input() index: number;
  // postSubscription: Subscription;
   constructor(private postsService: PostService, private router: Router) {}
  ngOnInit() {

  }
    onDeletePost(post: Post) {
      this.postsService.removePost(post);
    }
    onIncerementeLoveIt() {
      this.postsService.onIncremente(this.post);
    }
    OnDecrimenteLoveIt() {
      this.postsService.onDecrimente(this.post);
    }
    onViewPost(id: number) {
      this.router.navigate(['/posts', 'view', id]);
    }

}
