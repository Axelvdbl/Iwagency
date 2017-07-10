import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from '../cinema/post';

@Injectable()
export class Mech1Service {
  private mech1Url = 'http://localhost:3000/mech1';

  constructor(private http: Http) {}

  getPosts(): Observable<Post[]> {
    return this.http.get(this.mech1Url)
      .map((response: Response) => <Post[]>response.json())
  }

  getPost(id: number) {
     return this.http.get(this.mech1Url + "/" + id + '.json');
  }
}
