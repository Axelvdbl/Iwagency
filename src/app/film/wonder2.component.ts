import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Wonder2Service } from './wonder2.service';

@Component({
  selector: 'wonder2',
  templateUrl: './wonder.component.html',
  styleUrls: ['./film.component.css']
})
export class Wonder2Component implements OnInit {
  posts: Post[];

  constructor(
    private wonder2Service: Wonder2Service,
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.wonder2Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
