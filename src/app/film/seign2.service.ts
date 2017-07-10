import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from '../cinema/post';

@Injectable()
export class Seign2Service {
  private seign2Url = 'http://localhost:3000/seign2';

  constructor(private http: Http) {}

  getPosts(): Observable<Post[]> {
    return this.http.get(this.seign2Url)
      .map((response: Response) => <Post[]>response.json())
  }

  getPost(id: number) {
     return this.http.get(this.seign2Url + "/" + id + '.json');
  }
}
