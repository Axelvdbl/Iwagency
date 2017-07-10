import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { PostService } from '../cinema/post.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  posts: Post[];

  constructor(
    private postService: PostService,
    private router: Router
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

  goToShow(post : Post): void {
   let postLink = ['/home', post.id];
   this.router.navigate(postLink);
  }

}
