import { Component, OnInit } from '@angular/core';
import { DiscussionroomService } from './../../services/discussionroom.service';
import { DiscussionRoom } from '../../model/discussion-room';
import { Router } from '../../../../node_modules/@angular/router';
import { User } from '../../model/user';
import { PagerService } from '../../services/pager.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  room: any = {};
  pager: any = {};
  pagedItems: any[];
  rooms: DiscussionRoom[];
  room1: DiscussionRoom;
  users: User[];
  Active = false;
  count = 0;

  constructor(
    private discussionroomService: DiscussionroomService,
    private router: Router,
    private pagerService: PagerService
  ) { }

  ngOnInit() {
    this.getRooms();
  }

  getRooms(): void {
    this.discussionroomService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
      this.setPage(1);
    });
  }

  searchRoom() {
    this.discussionroomService.searchRooms(this.room.name).subscribe(rooms => {
      this.rooms = rooms;
      this.setPage(1);
    });
  }

  joinRoom(username: string, usernameOfRoom: string, roomID: string) {
    if (!username.match(usernameOfRoom)) {
      this.discussionroomService.addUserView(roomID, username).subscribe(room => {
        this.room = room;
        for (let ro of this.rooms) {
          if (ro.roomID.match(this.room.roomID)) {
            ro = this.room;
          }
        }
      });

      localStorage.setItem('isActiveOf' + username, JSON.stringify(roomID));
      this.router.navigate(['/detailroom/' + roomID]);
    }
    else {
      this.router.navigate(['/detailroom/' + roomID]);
    }
  }

  checkOpening(room: DiscussionRoom) {
    if (room.viewusers.length == 0 && room.status == "Opening") {
      return true;
    }
    return false;
  }

  checkActive(room: DiscussionRoom) {
    if (room.viewusers.length > 0 && room.status == "Active") {
      return true;
    }
    return false;
  }

  checkStatus(room: DiscussionRoom) {
    if (room.status == "Resolved") {
      return true;
    }
    return false;
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.rooms.length, page);

    // get current page of items
    this.pagedItems = this.rooms.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
