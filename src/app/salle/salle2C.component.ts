import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../cinema/post';
import { Salle2CService } from './salle2C.service';

@Component({
  selector: 'salle2C',
  templateUrl: './salle2C.component.html',
  styleUrls: ['./salle.component.css']
})
export class Salle2CComponent implements OnInit {
  posts: Post[];

  constructor(
    private salle2CService: Salle2CService,
    private router: Router
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
  }

  getPosts() {
    this.salle2CService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

  goToShow(post : Post): void {
   let postLink = ['home/2/3', post.id];
   this.router.navigate(postLink);
  }

}
