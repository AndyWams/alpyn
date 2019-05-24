import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { Http, Headers, Response } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get(`${environment.userUrl}/users`);
  }

  getUser(id) {
    return this._http.get(`${environment.userUrl}/user/${id}`);
  }

  createAccount(username: string, email: string, password: string) {
    const user = {
      username: username,
      email: email,
      password: password,
    };
    return this._http.post(`${environment.userUrl}/users/add`, user);
  }


  updateUser(id: string, username: string, email: string, password: string) {
    const user = {
      username: username,
      email: email,
      password: password,
    };
    return this._http.post(`${environment.userUrl}/users/update/${id}`, user);
  }

  deleteUser(id) {
    return this._http.get(`${environment.userUrl}/users/delete/${id}`);
  }
}
