import { Component, OnInit } from '@angular/core';
import { DiscussionroomService } from '../../../services/discussionroom.service';
import { DiscussionRoom } from '../../../model/discussion-room';
import { Router } from '../../../../../node_modules/@angular/router';
import { User } from '../../../model/user';

@Component({
  selector: 'app-createforum',
  templateUrl: './createforum.component.html',
  styleUrls: ['./createforum.component.css']
})
export class CreateforumComponent implements OnInit {

  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  room: any = {};
  rooms: DiscussionRoom[];
  room1: DiscussionRoom;
  valid: any = {};
  message: any = {};

  constructor(
    private discussionroomService: DiscussionroomService,
    private router: Router
  ) { }

  ngOnInit() {
    this.valid.roomID = true;
    this.valid.name = true;
    this.valid.post = true;
  }

  addRoom(user: User) {
    this.valid.roomID = true;
    this.valid.name = true;
    this.valid.post = true;
    this.message.roomID = '';
    const roomIDRegex = new RegExp('^[a-zA-Z0-9]{5,15}$');
    if (this.room.roomID === undefined || this.room.roomID.trim().length === 0) {
      this.message.roomID = 'RoomID can not be blank !!!';
      this.valid.roomID = false;
    } else if (this.room.roomID.trim().length < 4) {
      this.message.roomID = 'RoomID must be more than 3 characters !!!';
      this.valid.roomID = false;
    } else if (this.room.roomID.trim().length > 15) {
      this.message.roomID = 'RoomID must be less than 15 characters !!!';
      this.valid.roomID = false;
    } else if (!roomIDRegex.test(this.room.roomID.trim())) {
      this.message.roomID = 'RoomID only contains letters and numbers !!!';
      this.valid.roomID = false;
    }

    if (this.room.name === undefined || this.room.name.trim().length === 0) {
      this.message.name = 'Name can not be blank !!!';
      this.valid.name = false;
    } else if (this.room.name.trim().length < 10) {
      this.message.name = 'Name must be more than 10 characters !!!';
      this.valid.name = false;
    } else if (this.room.name.trim().length > 50) {
      this.message.name = 'RoomID must be less than 50 characters !!!';
      this.valid.name = false;
    }

    if (this.room.post === undefined || this.room.post.trim().length === 0) {
      this.message.post = 'Post can not be blank !!!';
      this.valid.post = false;
    } else if (this.room.post.trim().length < 15) {
      this.message.post = 'Post must be more than 15 characters !!!';
      this.valid.post = false;
    } 

    if (!this.valid.roomID) {
      return false;
    }

    if (!this.valid.name) {
      return false;
    }

    if (!this.valid.post) {
      return false;
    }

    Promise.all([
      this.discussionroomService.getRoomByRoomID(this.room.roomID)
    ]).then((result) => {
      result[0].forEach(element => {

        // check ID already exists
        if (element.roomID !== null) {
          this.message.roomID = 'RoomID already exists !!!';
          this.valid.roomID = false;
        } else {
          // add room on database
          this.room.roomID = this.room.roomID.trim();
          this.room.name = this.room.name.trim();
          this.room.post = this.room.post.replace(/<[^>]*>/g, '');
          this.room.status = 'Opening';
          this.room.username = user.username.trim();
          this.room.datePost = new Date();
          this.discussionroomService.addRoom(this.room).subscribe(result => {
            alert('Post successfully created !!!');
            this.router.navigate(['/forum']);
            
          });
          this.room.roomID = '';
          this.room.name = '';
          this.room.post = '';
          
        }
      });
    });
  }

}
