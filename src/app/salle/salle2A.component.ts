import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Salle2AService } from './salle2A.service';

@Component({
  selector: 'salle2A',
  templateUrl: './salle2A.component.html',
  styleUrls: ['./salle.component.css']
})
export class Salle2AComponent implements OnInit {
  posts: Post[];

  constructor(
    private salle2AService: Salle2AService,
    private router: Router
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.salle2AService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

  goToShow(post : Post): void {
   let postLink = ['home/2/1', post.id];
   this.router.navigate(postLink);
  }

}
