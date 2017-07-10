import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from '../cinema/post';

@Injectable()
export class Salle2BService {
  private salle2BUrl = 'http://localhost:3000/salle5';

  constructor(private http: Http) {}

  getPosts(): Observable<Post[]> {
    return this.http.get(this.salle2BUrl)
      .map((response: Response) => <Post[]>response.json())
  }

  getPost(id: number) {
     return this.http.get(this.salle2BUrl + "/" + id + '.json');
  }
}
