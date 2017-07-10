import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Pirate2Service } from './pirate2.service';

@Component({
  selector: 'pirate2',
  templateUrl: './pirate.component.html',
  styleUrls: ['./film.component.css']
})
export class Pirate2Component implements OnInit {
  posts: Post[];

  constructor(
    private pirate2Service: Pirate2Service,
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.pirate2Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
