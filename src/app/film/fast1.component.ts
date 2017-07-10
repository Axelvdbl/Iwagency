import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Fast1Service } from './fast1.service';

@Component({
  selector: 'fast1',
  templateUrl: './fast.component.html',
  styleUrls: ['./film.component.css']
})
export class Fast1Component implements OnInit {
  posts: Post[];

  constructor(
    private fast1Service: Fast1Service,
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.fast1Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
