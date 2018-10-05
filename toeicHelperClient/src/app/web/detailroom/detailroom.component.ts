import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { DiscussionroomService } from '../../services/discussionroom.service';
import { Comment } from '../../model/comment';
import { Vote } from '../../model/vote';
import { User } from '../../model/user';

@Component({
  selector: 'app-detailroom',
  templateUrl: './detailroom.component.html',
  styleUrls: ['./detailroom.component.css']
})

export class DetailroomComponent implements OnInit {

  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  map = new Map<string, any[]>();
  post: any = {};
  room: any = {};
  comments: Comment[];
  com: any = {};
  vote: any = {};
  isAgree = false;
  valid: any = {};
  message: any = {};

  constructor(
    private route: ActivatedRoute,
    private discussionRoomService: DiscussionroomService,
    private router: Router
  ) { }

  ngOnInit() {
    this.valid.content = true;
    const id = this.route.snapshot.paramMap.get('id');
    this.discussionRoomService.getRoomByRoomID(id).subscribe(room => {
      this.room = room;
      this.comments = this.room.comment;
      for(let co of this.room.comment){
          this.getPostsByUserName(co.username);  
      }
    });
    
  }

  countVoteWithAgree(votes: Vote[]) {
    var count = 0;
    for(let vot of votes){
      if(vot.vot == 'AGREE'){
        count++;
      }
    }
    return count;
  }

  checkUserVoteAgree(votes: Vote[], user: User) {
    this.isAgree = false;
    for(let vot of votes) {
      if(vot.username == user.username && vot.vot == 'AGREE'){
        this.isAgree = true;
        return this.isAgree;
      }
    }
    return this.isAgree;
  }
  
  addComment(user: User, roomID: string) {
    this.valid.content = true;
    this.message.content = '';
    if (this.com.content === undefined || this.com.content.trim().length === 0) {
      this.message.content = 'Content can not be blank !!!';
      this.valid.content = false;
    } else if (this.com.content.trim().length < 10) {
      this.message.content = 'Content must be more than 10 characters !!!';
      this.valid.content = false;
    } 
    if (!this.valid.content) {
      return false;
    }
    this.com.content = this.com.content.trim().replace(/<[^>]*>/g, '');
    this.com.username = user.username.trim();
    this.discussionRoomService.addComment(roomID, this.com).subscribe(room => {
        this.room = room;
        this.com.content = '';
        this.comments = this.room.comment;
    })
  }

  addVoteAgree(user: User, roomID: string, comment: any) {
      this.discussionRoomService.addVote(roomID, comment, user.username.trim()).subscribe(room => {
        this.room = room;
        this.comments = this.room.comment;
      })
  }

  removeVoteAgree(user: User, roomID: string, comment: any) {
      this.discussionRoomService.removeVote(roomID, comment, user.username.trim()).subscribe(room => {
        this.room = room;
        this.comments = this.room.comment;
      })
  }

  getPostsByUserName(username: string) {
    this.discussionRoomService.getPostsByUsername(username).subscribe(post => {
      this.post = post;
      this.map.set(username, this.post);
    });
    
  }
  
  getCountPosts(username: string) {
    var count = 0;
    this.map.forEach((value: any[], key: string) => {
        if(key == username)
          count = value.length;
    });
    return count;
  }

  updateStatus(roomID: string) {
    if(confirm("Do you want to resolved")) {
      this.discussionRoomService.updateStatus(roomID).subscribe(room => this.room = room);
    }
  }

}

