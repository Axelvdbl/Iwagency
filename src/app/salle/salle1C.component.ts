import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Salle1CService } from './salle1C.service';

@Component({
  selector: 'salle1C',
  templateUrl: './salle1C.component.html',
  styleUrls: ['./salle.component.css']
})
export class Salle1CComponent implements OnInit {
  posts: Post[];

  constructor(
    private salle1CService: Salle1CService,
    private router: Router
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.salle1CService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

  goToShow(post : Post): void {
   let postLink = ['home/1/3', post.id];
   this.router.navigate(postLink);
  }

}
