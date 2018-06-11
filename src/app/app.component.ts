import { Component, OnInit } from '@angular/core';
import { PostService } from './service/post.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private postservice: PostService) {
    const config = {
      apiKey: 'AIzaSyD6kFVOJ6dGMvFYN6ruewn8kdkbHsb3hyA',
      authDomain: 'postsop-6130b.firebaseapp.com',
      databaseURL: 'https://postsop-6130b.firebaseio.com',
      projectId: 'ostsop-6130b',
      storageBucket: 'postsop-6130b.appspot.com',
      messagingSenderId: '256412030680'
    };
    firebase.initializeApp(config);

  }
ngOnInit() {
  this.postservice.getPosts();
}
}
