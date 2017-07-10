import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Seign2Service } from './seign2.service';

@Component({
  selector: 'seign2',
  templateUrl: './seign.component.html',
  styleUrls: ['./film.component.css']
})
export class Seign2Component implements OnInit {
  posts: Post[];

  constructor(
    private seign2Service: Seign2Service,
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.seign2Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
