import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from './post';

@Injectable()
export class Cine1Service {
  private cine1Url = 'http://localhost:3000/cine1';

  constructor(private http: Http) {}

  getPosts(): Observable<Post[]> {
    return this.http.get(this.cine1Url)
      .map((response: Response) => <Post[]>response.json())
  }

  getPost(id: number) {
     return this.http.get(this.cine1Url + "/" + id + '.json');
  }
}
