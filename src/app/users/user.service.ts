import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';

const geturl = 'http://localhost:8080/Controller?action=UsersGet';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    console.log('test');
    return this.http.get<User[]>(geturl); }
}
