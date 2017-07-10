import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Tuches1Service } from './tuches1.service';

@Component({
  selector: 'tuches1',
  templateUrl: './tuches.component.html',
  styleUrls: ['./film.component.css']
})
export class Tuches1Component implements OnInit {
  posts: Post[];

  constructor(
    private tuches1Service: Tuches1Service,
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.tuches1Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
