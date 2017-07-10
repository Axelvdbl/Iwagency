import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Tuches2Service } from './tuches2.service';

@Component({
  selector: 'tuches2',
  templateUrl: './tuches.component.html',
  styleUrls: ['./film.component.css']
})
export class Tuches2Component implements OnInit {
  posts: Post[];

  constructor(
    private tuches2Service: Tuches2Service,
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.tuches2Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
