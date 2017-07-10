import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Salle1BService } from './salle1B.service';

@Component({
  selector: 'salle1B',
  templateUrl: './salle1B.component.html',
  styleUrls: ['./salle.component.css']
})
export class Salle1BComponent implements OnInit {
  posts: Post[];

  constructor(
    private salle1BService: Salle1BService,
    private router: Router
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.salle1BService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

  goToShow(post : Post): void {
   let postLink = ['home/1/2', post.id];
   this.router.navigate(postLink);
  }

}
