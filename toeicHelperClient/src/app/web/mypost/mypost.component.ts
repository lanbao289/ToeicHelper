import { Component, OnInit } from '@angular/core';
import { DiscussionRoom } from '../../model/discussion-room';
import { DiscussionroomService } from './../../services/discussionroom.service';
import { PagerService } from '../../services/pager.service';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {

  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  rooms: DiscussionRoom[];
  pager: any = {};
  pagedItems: any[];

  constructor(
    private discussionroomService: DiscussionroomService,
    private pagerService: PagerService
  ) { }

  ngOnInit() {
    this.getPostsByUsername(this.currentUser.username);
  }

  getPostsByUsername(username: string) {
    this.discussionroomService.getPostsByUsername(username).subscribe(rooms => {
      this.rooms = rooms;
      this.setPage(1);
    });
  }

  deleteRoom(dRoom: DiscussionRoom, username: string) {
    if(username.match(dRoom.username)){
      if (confirm('Do you want to delete it ?')) {
        this.discussionroomService.deleteRoom(dRoom.roomID).subscribe(result => {
          this.getPostsByUsername(username);
        });
      }
    }
    else {
      alert("You can't delete this post of another user");
    }
  }
  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.rooms.length, page);

    // get current page of items
    this.pagedItems = this.rooms.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
