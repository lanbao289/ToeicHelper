import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response, ResponseContentType } from '../../../node_modules/@angular/http';
import { AuthenticationService } from './authentication.service';
import { DiscussionRoom } from '../model/discussion-room';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DiscussionroomService {

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

  getRooms(): Observable<DiscussionRoom[]> {
    return this.http.get(this.Url + 'discussionrooms', this.options)
      .map((response: Response) => response.json());
  }

  addRoom(room: DiscussionRoom): Observable<DiscussionRoom> {
    return this.http.post(this.Url + 'discussionroom', room, this.options)
      .map((reponse: Response) => reponse.json());
  }

  deleteRoom(roomID: string): Observable<boolean> {
    return this.http.delete(this.Url + 'discussionroom/' + roomID, this.options)
      .map((response: Response) => response.json());
  }

  searchRooms(roomName: string): Observable<DiscussionRoom[]> {
    return this.http.get(this.Url + 'roomsbyname' + '/' + roomName, this.options)
      .map((reponse: Response) => reponse.json());
  }

  getRoomByRoomID(roomID): Observable<DiscussionRoom> {
    return this.http.get(this.Url + 'discussionroom/' + roomID, this.options)
      .map((response: Response) => response.json());
  }

  getPostsByUsername(username: string): Observable<DiscussionRoom[]> {
    return this.http.get(this.Url + 'postsbyusername/' + username, this.options)
      .map((response: Response) => response.json());
  }

  addComment(roomID: string, comment: Comment): Observable<DiscussionRoom> {
    return this.http.put(this.Url + 'addcomment/' + roomID, comment, this.options)
      .map((response: Response) => response.json());
  }

  addVote(roomID: string, comment: Comment, username: string): Observable<DiscussionRoom> {
    return this.http.put(this.Url + 'addvote/' + roomID + '/' + username, comment, this.options)
      .map((response: Response) => response.json());
  }

  removeVote(roomID: string, comment: Comment, username: string): Observable<DiscussionRoom> {
    return this.http.put(this.Url + 'removevote/' + roomID + '/' + username, comment, this.options)
      .map((response: Response) => response.json());
  }

  addUserView(roomID: string, username: string): Observable<DiscussionRoom> {
    return this.http.put(this.Url + 'viewusers/' + roomID + '/' + username, this.options)
      .map((response: Response) => response.json());
  }

  removeUserView(roomID: string, username: string): Observable<DiscussionRoom> {
    return this.http.put(this.Url + 'removeviewuser/' + roomID + '/' + username, this.options)
      .map((response: Response) => response.json());
  }

  updateStatus(roomID: string): Observable<DiscussionRoom> {
    return this.http.put(this.Url + 'updatestatus/' + roomID, this.options)
      .map((response: Response) => response.json());
  }

  updatePost(room: DiscussionRoom): Observable<string> {
    return this.http.put(this.Url + 'updatepost', room, this.options)
      .map((response: Response) => response.text());
  }

}
