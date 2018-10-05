import { AuthenticationService } from './../../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';
import { DiscussionroomService } from '../../../services/discussionroom.service';

@Component({
  selector: 'app-nvarbar',
  templateUrl: './nvarbar.component.html',
  styleUrls: ['./nvarbar.component.css']
})
export class NvarbarComponent implements OnInit {

  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
  constructor(
    private authenticationService: AuthenticationService,
    private discussionRoomService: DiscussionroomService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authenticationService.isTokenExpired();
  }

  logoutClicked(): void {
    this.authenticationService.logout();
  }

  logoutRoomToForum(username: string) {
    var userJoinRoom = JSON.parse(localStorage.getItem('isActiveOf' + username));
    
    if(userJoinRoom != null){
      if(confirm("Do you want to exit room")) {
        this.discussionRoomService.removeUserView(userJoinRoom ,username).subscribe(result => this.router.navigate(['/forum']));
        localStorage.removeItem('isActiveOf' + username);
      }
    }
    else {
      this.router.navigate(['/forum']);
    }
  }
  
  logoutRoomToSchedule(username: string) {
    var userJoinRoom = JSON.parse(localStorage.getItem('isActiveOf' + username));
    if(userJoinRoom != null){
      if(confirm("Do you want to exit room")) {
        localStorage.removeItem('isActiveOf' + username);
        localStorage.removeItem('isActive');
        this.router.navigate(['/schedule']);
      }
    }
    else {
      this.router.navigate(['/schedule']);
    }
  }

  logoutRoomToTraining(username: string) {
    var userJoinRoom = JSON.parse(localStorage.getItem('isActiveOf' + username));
    if(userJoinRoom != null){
      if(confirm("Do you want to exit room")) {
        localStorage.removeItem('isActiveOf' + username);
        localStorage.removeItem('isActive');
        this.router.navigate(['/training']);
      }
    }
    else {
      this.router.navigate(['/training']);
    }
  }

  logoutRoomToTest(username: string) {
    var userJoinRoom = JSON.parse(localStorage.getItem('isActiveOf' + username));
    if(userJoinRoom != null){
      if(confirm("Do you want to exit room")) {
        localStorage.removeItem('isActiveOf' + username);
        localStorage.removeItem('isActive');
        this.router.navigate(['/test']);
      }
    }
    else {
      this.router.navigate(['/test']);
    }
  }

  logoutRoomToHome(username: string) {
    var userJoinRoom = JSON.parse(localStorage.getItem('isActiveOf' + username));
    if(userJoinRoom != null){
      if(confirm("Do you want to exit room")) {
        localStorage.removeItem('isActiveOf' + username);
        localStorage.removeItem('isActive');
        this.router.navigate(['/home']);
      }
    }
    else {
      this.router.navigate(['/home']);
    }
  }
}
