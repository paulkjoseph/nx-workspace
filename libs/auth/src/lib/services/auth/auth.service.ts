import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Authenticate, User } from '@nx-workspace/data-models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(authenticate: Authenticate): Observable<any> {
    return this.httpClient.post<User>(
      'http://localhost:3000/login',
      authenticate
    );
  }
}
