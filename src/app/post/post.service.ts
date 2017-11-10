import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Post} from './post/post';

@Injectable()
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getall(): Observable<Post[]> {
    return this.httpClient.get('api/posts');
  }

  get(id: number): Observable<Post> {
    return this.httpClient.get(`api/posts/${id}`);
  }
}
