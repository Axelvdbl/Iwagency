import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from '../cinema/post';

@Injectable()
export class Momie2Service {
  private momie2Url = 'http://localhost:3000/momie2';

  constructor(private http: Http) {}

  getPosts(): Observable<Post[]> {
    return this.http.get(this.momie2Url)
      .map((response: Response) => <Post[]>response.json())
  }

  getPost(id: number) {
     return this.http.get(this.momie2Url + "/" + id + '.json');
  }
}
