import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from './post';
import { Cine2Service } from './cine2.service';

@Component({
  selector: 'cinema2',
  templateUrl: './cinema2.component.html',
  styleUrls: ['./cinema.component.css']
})
export class Cinema2Component implements OnInit {
  posts: Post[];

  constructor(
    private cine2Service: Cine2Service,
    private router: Router
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.cine2Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

  goToShow(post : Post): void {
   let postLink = ['/home/2', post.id];
   this.router.navigate(postLink);
  }

}
