import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Trans2Service } from './trans2.service';

@Component({
  selector: 'trans2',
  templateUrl: './trans.component.html',
  styleUrls: ['./film.component.css']
})
export class Trans2Component implements OnInit {
  posts: Post[];

  constructor(
    private trans2Service: Trans2Service,
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.trans2Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
