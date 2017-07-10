import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Pirate1Service } from './pirate1.service';

@Component({
  selector: 'pirate1',
  templateUrl: './pirate.component.html',
  styleUrls: ['./film.component.css']
})
export class Pirate1Component implements OnInit {
  posts: Post[];

  constructor(
    private pirate1Service: Pirate1Service,
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.pirate1Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
