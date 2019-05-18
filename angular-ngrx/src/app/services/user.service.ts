import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserHttp } from '../models/http-models/user-http.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl = `${environment.apiUrl}users.json`;

  constructor(private httpClient: HttpClient) { }


  getUsers(): Observable<IUserHttp>{
    return this.httpClient.get<IUserHttp>(this.usersUrl);
  }
}
