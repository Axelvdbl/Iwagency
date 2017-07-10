import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Mmm2Service } from './mmm2.service';

@Component({
  selector: 'mmm2',
  templateUrl: './mmm.component.html',
  styleUrls: ['./film.component.css']
})
export class Mmm2Component implements OnInit {
  posts: Post[];

  constructor(
    private mmm2Service: Mmm2Service,
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.mmm2Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
