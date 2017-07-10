import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Fast2Service } from './fast2.service';

@Component({
  selector: 'fast2',
  templateUrl: './fast.component.html',
  styleUrls: ['./film.component.css']
})
export class Fast2Component implements OnInit {
  posts: Post[];

  constructor(
    private fast2Service: Fast2Service,
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.fast2Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
