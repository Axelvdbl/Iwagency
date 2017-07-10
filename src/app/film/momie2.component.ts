import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Momie2Service } from './momie2.service';

@Component({
  selector: 'momie2',
  templateUrl: './momie.component.html',
  styleUrls: ['./film.component.css']
})
export class Momie2Component implements OnInit {
  posts: Post[];

  constructor(
    private momie2Service: Momie2Service,
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.momie2Service.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
