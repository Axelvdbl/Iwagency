import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Star2Service } from './star2.service';

@Component({
  selector: 'star2',
  templateUrl: './star.component.html',
  styleUrls: ['./film.component.css']
})
export class Star2Component implements OnInit {
  posts: Post[];

  constructor(
    private star2Service: Star2Service,
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.star2Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
