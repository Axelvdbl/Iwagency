import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from '../cinema/post';

@Injectable()
export class Transp1Service {
  private trans1Url = 'http://localhost:3000/transp1';

  constructor(private http: Http) {}

  getPosts(): Observable<Post[]> {
    return this.http.get(this.trans1Url)
      .map((response: Response) => <Post[]>response.json())
  }

  getPost(id: number) {
     return this.http.get(this.trans1Url + "/" + id + '.json');
  }
}
