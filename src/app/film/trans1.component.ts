import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Trans1Service } from './trans1.service';

@Component({
  selector: 'trans1',
  templateUrl: './trans.component.html',
  styleUrls: ['./film.component.css']
})
export class Trans1Component implements OnInit {
  posts: Post[];

  constructor(
    private trans1Service: Trans1Service,
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.trans1Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
