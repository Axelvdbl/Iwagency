import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Mech1Service } from './mech1.service';

@Component({
  selector: 'mech1',
  templateUrl: './mech.component.html',
  styleUrls: ['./film.component.css']
})
export class Mech1Component implements OnInit {
  posts: Post[];

  constructor(
    private mech1Service: Mech1Service,
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.mech1Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
