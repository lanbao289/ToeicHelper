import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { User } from '../model/user';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class UserService {
  private Url = 'http://localhost:8080/api/';

  httpOptions = {
    headers: new Headers({ 'Content-Type': 'application/json' })
  };

  options: RequestOptions;

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) {
  }

  // add user for user role
  addUser(user: User): Observable<User> {
    return this.http.post(this.Url + 'userrole', user, this.httpOptions)
      .map((reponse: Response) => reponse.json());
  }

  // add user for admin role
  addUserForAdmin(user: User): Observable<User> {
    this.options = new RequestOptions({ headers: new Headers({ 'Authorization': this.authenticationService.token }) });
    return this.http.post(this.Url + 'user', user, this.options)
      .map((reponse: Response) => reponse.json());
  }

  getUsers(): Observable<User[]> {
    this.options = new RequestOptions({ headers: new Headers({ 'Authorization': this.authenticationService.token }) });
    return this.http.get(`${this.Url}users`, this.options)
      .map((response: Response) => response.json());
  }

  getUser(username): Observable<User> {
    this.options = new RequestOptions({ headers: new Headers({ 'Authorization': this.authenticationService.token }) });
    return this.http.get(this.Url + 'user/' + username, this.options)
      .map((response: Response) => response.json());
  }

  checkUser(username): Observable<boolean> {
    const body = new FormData();
    body.append('username', username);
    return this.http.post(this.Url + 'checkuser', body)
      .map((response: Response) => {
        if (response.text() === 'true') {
          return true;
        } else {
          return false;
        }
      });
  }

  checkEmail(email): Observable<boolean> {
    const body = new FormData();
    body.append('email', email);
    return this.http.post(this.Url + 'checkemail', body)
      .map((response: Response) => {
        if (response.text() === 'true') {
          return true;
        } else {
          return false;
        }
      });
  }

  checkOldPassword(username: string, password: string): Observable<boolean> {
    this.options = new RequestOptions({ headers: new Headers({ 'Authorization': this.authenticationService.token }) });
    const body = new FormData();
    body.append('username', username);
    body.append('password', password);
    return this.http.post(this.Url + 'checkoldpassword', body, this.options)
      .map((response: Response) => {
        if (response.text() === 'true') {
          return true;
        } else {
          return false;
        }
      });
  }

  updateUser(user: User): Observable<User> {
    this.options = new RequestOptions({ headers: new Headers({ 'Authorization': this.authenticationService.token }) });
    return this.http.put(this.Url + 'user', user, this.options)
      .map((response: Response) => response.json());
  }


  // delete user by username
  deleteUser(username): Observable<boolean> {
    return this.http.delete(this.Url + 'user/' + username, this.options)
      .map((response: Response) => response.json());
  }
}
