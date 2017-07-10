import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Transp1Service } from './transp1.service';

@Component({
  selector: 'transp1',
  templateUrl: './transp.component.html',
  styleUrls: ['./film.component.css']
})
export class Transp1Component implements OnInit {
  posts: Post[];

  constructor(
    private transp1Service: Transp1Service,
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.transp1Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
