import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Star1Service } from './star1.service';

@Component({
  selector: 'star1',
  templateUrl: './star.component.html',
  styleUrls: ['./film.component.css']
})
export class Star1Component implements OnInit {
  posts: Post[];

  constructor(
    private star1Service: Star1Service,
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.star1Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
