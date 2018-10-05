import { PagerService } from './../../services/pager.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList: User[];
  newUser: any = {};
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(
    private userService: UserService,
    private pagerService: PagerService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.userList = users;
      this.setPage(1);
    });
  }

  deleteUser(user: any) {
    if (confirm('Do you want to delete it ?')) {
      this.userService.deleteUser(user.username).subscribe(r => {
        alert('Delete successful !!!');
        this.getUsers();
      });
    }
  }

  showInfo(user: any) {
    this.newUser = null;
    this.newUser = user;
  }

  updateRole() {
    this.userService.updateUser(this.newUser).subscribe(res => {
      alert('Update successful !!!');
      this.getUsers();
    });
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.userList.length, page);

    // get current page of items
    this.pagedItems = this.userList.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
