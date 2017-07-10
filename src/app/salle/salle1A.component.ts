import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Salle1AService } from './salle1A.service';

@Component({
  selector: 'salle1A',
  templateUrl: './salle1A.component.html',
  styleUrls: ['./salle.component.css']
})
export class Salle1AComponent implements OnInit {
  posts: Post[];

  constructor(
    private salle1AService: Salle1AService,
    private router: Router
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.salle1AService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

  goToShow(post : Post): void {
   let postLink = ['home/1/1', post.id];
   this.router.navigate(postLink);
  }

}
