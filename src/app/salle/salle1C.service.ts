import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from '../cinema/post';

@Injectable()
export class Salle1CService {
  private salle1CUrl = 'http://localhost:3000/salle3';

  constructor(private http: Http) {}

  getPosts(): Observable<Post[]> {
    return this.http.get(this.salle1CUrl)
      .map((response: Response) => <Post[]>response.json())
  }

  getPost(id: number) {
     return this.http.get(this.salle1CUrl + "/" + id + '.json');
  }
}
