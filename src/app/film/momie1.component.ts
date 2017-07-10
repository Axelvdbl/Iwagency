import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Momie1Service } from './momie1.service';

@Component({
  selector: 'momie1',
  templateUrl: './momie.component.html',
  styleUrls: ['./film.component.css']
})
export class Momie1Component implements OnInit {
  posts: Post[];

  constructor(
    private momie1Service: Momie1Service,
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.momie1Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
