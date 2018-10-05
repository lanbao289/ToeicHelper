import { Component, OnInit } from '@angular/core';
import { DiscussionroomService } from '../../../services/discussionroom.service';
import { DiscussionRoom } from '../../../model/discussion-room';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-editforum',
  templateUrl: './editforum.component.html',
  styleUrls: ['./editforum.component.css']
})
export class EditforumComponent implements OnInit {

  room: any = {};
  rooms: DiscussionRoom[];
  room1: DiscussionRoom;
  valid: any = {};
  message: any = {};

  constructor(
    private discussionroomService: DiscussionroomService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.valid.name = true;
    this.valid.post = true;
    const id = this.route.snapshot.paramMap.get('id');
    this.discussionroomService.getRoomByRoomID(id).subscribe(room => {
      this.room = room;
    });
  }

  update() {
    this.valid.name = true;
    this.valid.post = true;
    if (this.room.name === undefined || this.room.name.trim().length === 0) {
      this.message.name = 'Name can not be blank !!!';
      this.valid.name = false;
    } else if (this.room.name.trim().length < 10) {
      this.message.name = 'Name must be more than 10 characters !!!';
      this.valid.name = false;
    } else if (this.room.name.trim().length > 100) {
      this.message.name = 'RoomID must be less than 100 characters !!!';
      this.valid.name = false;
    }

    if (this.room.post === undefined || this.room.post.trim().length === 0) {
      this.message.post = 'Post can not be blank !!!';
      this.valid.post = false;
    } else if (this.room.post.trim().length < 15) {
      this.message.post = 'Post must be more than 15 characters !!!';
      this.valid.post = false;
    } 

    if (!this.valid.name) {
      return false;
    }

    if (!this.valid.post) {
      return false;
    }

    this.room.name = this.room.name.trim();
    this.room.post = this.room.post.replace(/<[^>]*>/g, '');
    this.discussionroomService.updatePost(this.room).subscribe(room => {
      this.room = room;
      alert("Update successful")
      this.router.navigate(['/admin/forum']);
    })
    
  }

}
