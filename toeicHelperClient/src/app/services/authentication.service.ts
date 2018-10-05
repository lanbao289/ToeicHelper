import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { User } from '../model/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '../../../node_modules/@angular/router';

@Injectable()
export class AuthenticationService {

  private Url = 'http://localhost:8080/api/';
  public token: string;
  options: RequestOptions;

  constructor(
    private http: Http,
    private router: Router
  ) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    const body = new FormData();
    body.append('username', username);
    body.append('password', password);
    return this.http.post(this.Url + 'login', body)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const token = response.text();
        if (token !== 'false') {
          // set token property
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
          this.getUser(username).toPromise().then(user => {
            localStorage.setItem('user', JSON.stringify(user));
          });
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }

  isTokenExpired() {
    if (localStorage.getItem('currentUser') === null) {
      this.logout();
    } else {
      const helper = new JwtHelperService();
      const isExpired = helper.isTokenExpired(this.token);
      if (isExpired) {
        this.logout();
      }
    }
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  getUser(username): Observable<User> {
    this.options = new RequestOptions({ headers: new Headers({ 'Authorization': this.token }) });
    return this.http.get(this.Url + 'user/' + username, this.options)
      .map((response: Response) => response.json());
  }
}
