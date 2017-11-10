import { Injectable } from '@angular/core';
import {User} from './post/user';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  get(id: number): Observable<User> {
    return this.httpClient.get(`api/users/${id}`);
  }

}
