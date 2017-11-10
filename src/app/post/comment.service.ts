import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getCommentsOfAPost(id: number): Observable<Comment[]> {
    return this.httpClient.get(`api/posts/${id}/comments`);
  }
}
