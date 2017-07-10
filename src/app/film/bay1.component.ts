import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Bay1Service } from './bay1.service';

@Component({
  selector: 'bay1',
  templateUrl: './bay.component.html',
  styleUrls: ['./film.component.css']
})
export class Bay1Component implements OnInit {
  posts: Post[];

  constructor(
    private bay1Service: Bay1Service,
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.bay1Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
