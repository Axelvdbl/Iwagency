import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from './post';
import { Cine1Service } from './cine1.service';

@Component({
  selector: 'cinema1',
  templateUrl: './cinema1.component.html',
  styleUrls: ['./cinema.component.css']
})
export class Cinema1Component implements OnInit {
  posts: Post[];

  constructor(
    private cine1Service: Cine1Service,
    private router: Router
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.cine1Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

  goToShow(post : Post): void {
   let postLink = ['/home/1', post.id];
   this.router.navigate(postLink);
  }

}
