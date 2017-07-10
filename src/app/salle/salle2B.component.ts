import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Salle2BService } from './salle2B.service';

@Component({
  selector: 'salle2B',
  templateUrl: './salle2B.component.html',
  styleUrls: ['./salle.component.css']
})
export class Salle2BComponent implements OnInit {
  posts: Post[];

  constructor(
    private salle2BService: Salle2BService,
    private router: Router
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.salle2BService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

  goToShow(post : Post): void {
   let postLink = ['home/2/2', post.id];
   this.router.navigate(postLink);
  }

}
