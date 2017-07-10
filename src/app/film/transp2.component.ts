import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Transp2Service } from './transp2.service';

@Component({
  selector: 'transp2',
  templateUrl: './transp.component.html',
  styleUrls: ['./film.component.css']
})
export class Transp2Component implements OnInit {
  posts: Post[];

  constructor(
    private transp2Service: Transp2Service,
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.transp2Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
