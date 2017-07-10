import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Seign1Service } from './seign1.service';

@Component({
  selector: 'seign1',
  templateUrl: './seign.component.html',
  styleUrls: ['./film.component.css']
})
export class Seign1Component implements OnInit {
  posts: Post[];

  constructor(
    private seign1Service: Seign1Service,
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.seign1Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
