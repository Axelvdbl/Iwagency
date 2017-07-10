import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Wonder1Service } from './wonder1.service';

@Component({
  selector: 'wonder1',
  templateUrl: './wonder.component.html',
  styleUrls: ['./film.component.css']
})
export class Wonder1Component implements OnInit {
  posts: Post[];

  constructor(
    private wonder1Service: Wonder1Service,
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.wonder1Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
