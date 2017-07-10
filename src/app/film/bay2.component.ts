import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Bay2Service } from './bay2.service';

@Component({
  selector: 'bay2',
  templateUrl: './bay.component.html',
  styleUrls: ['./film.component.css']
})
export class Bay2Component implements OnInit {
  posts: Post[];

  constructor(
    private bay2Service: Bay2Service,
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.bay2Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
