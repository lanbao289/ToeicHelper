import { TestRoom } from './../model/test-room';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '../../../node_modules/@angular/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class TestroomService {

  private Url = 'http://localhost:8080/api/';

  options: RequestOptions;

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService
  ) {
    const headers = new Headers;
    headers.append('Authorization', this.authenticationService.token);
    headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({ headers });
  }

  addTestRoom(testRoom: TestRoom): Observable<TestRoom> {
    return this.http.post(this.Url + 'testroom', testRoom, this.options)
      .map((reponse: Response) => reponse.json());
  }

  editTestRoom(testRoom: TestRoom): Observable<TestRoom> {
    return this.http.put(this.Url + 'testroom', testRoom, this.options)
      .map((reponse: Response) => reponse.json());
  }

  getTestRooms(): Observable<TestRoom[]> {
    return this.http.get(this.Url + 'testrooms', this.options)
      .map((reponse: Response) => reponse.json());
  }

  getTestRoomByRoomID(roomID): Observable<TestRoom> {
    return this.http.get(this.Url + 'testroom/' + roomID, this.options)
      .map((reponse: Response) => reponse.json());
  }

  updateTestRoom(testRoom: TestRoom): Observable<TestRoom> {
    return this.http.put(this.Url + 'testroom', testRoom, this.options)
      .map((reponse: Response) => reponse.json());
  }

  deleteTestRoom(roomID): Observable<boolean> {
    return this.http.delete(this.Url + 'testroom/' + roomID, this.options)
      .map((response: Response) => response.json());
  }

  getCurrentTime(): Observable<string> {
    return this.http.get(this.Url + 'currenttime', this.options)
      .map((response: Response) => response.text());
  }

  getTestRoomByexamID(examID): Observable<TestRoom> {
    return this.http.get(this.Url + 'gettestroombyexamid/' + examID, this.options)
      .map((reponse: Response) => reponse.json());
  }

  checkUserOnline(username: string, roomID: string): Observable<boolean> {
    const body = new FormData();
    body.append('username', username);
    body.append('roomID', roomID);
    return this.http.post(this.Url + 'checkuseronline', body)
      .map((response: Response) => {
        if (response.text() === 'true') {
          return true;
        } else {
          return false;
        }
      });
  }

  checkoutUser(username: string, roomID: string): Observable<boolean> {
    const body = new FormData();
    body.append('username', username);
    body.append('roomID', roomID);
    return this.http.post(this.Url + 'checkoutuser', body)
      .map((response: Response) => {
        if (response.text() === 'true') {
          return true;
        } else {
          return false;
        }
      });
  }
}
