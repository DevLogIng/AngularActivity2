import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../service/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post-list-item/Post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postsService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
   randomIntFromInterval(min, max: number) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const loveIts = this.randomIntFromInterval(-10 , 10);
    const newPost = new Post(title, content, loveIts , String(new Date()));
    console.log(newPost.created_at);
    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
