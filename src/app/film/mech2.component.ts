import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Mech2Service } from './mech2.service';

@Component({
  selector: 'mech2',
  templateUrl: './mech.component.html',
  styleUrls: ['./film.component.css']
})
export class Mech2Component implements OnInit {
  posts: Post[];

  constructor(
    private mech2Service: Mech2Service,
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.mech2Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
