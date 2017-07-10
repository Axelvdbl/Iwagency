import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from '../cinema/post';

@Injectable()
export class Salle2AService {
  private salle2AUrl = 'http://localhost:3000/salle4';

  constructor(private http: Http) {}

  getPosts(): Observable<Post[]> {
    return this.http.get(this.salle2AUrl)
      .map((response: Response) => <Post[]>response.json())
  }

  getPost(id: number) {
     return this.http.get(this.salle2AUrl + "/" + id + '.json');
  }
}
