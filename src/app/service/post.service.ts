import { Post } from '../post-list-item/Post';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';

@Injectable()
export class PostService {

    postsSubject = new Subject<Post[]>();

    posts = [];

      constructor(private httpClient: HttpClient) {

       }

     emitPosts() {
        this.postsSubject.next(this.posts);
      }

      savePosts() {
        firebase.database().ref('/posts').set(this.posts);
      }

    getPosts() {
      firebase.database().ref('/posts')
        .on('value', (data: any) => {
            this.posts = data.val() ? data.val() : [];
            this.emitPosts();
          }
        );
    }

    createNewPost(newPost: Post) {
      this.posts.push(newPost);
      this.savePosts();
      this.emitPosts();
    }

    removePost(post: Post) {
      const postIndexToRemove = this.posts.findIndex(
        (postEl) => {
          if (postEl === post) {
            return true;
          }
        }
      );
      this.posts.splice(postIndexToRemove, 1);
      this.savePosts();
      this.emitPosts();
    }
    onIncremente(post: Post) {
        post.loveIts++;
      }
      onDecrimente(post: Post) {
      post.loveIts--;
      }
}
