import { Component, OnInit, HostListener } from '@angular/core';
import { TestRoom } from '../../model/test-room';
import { TestroomService } from '../../services/testroom.service';
import { Router } from '../../../../node_modules/@angular/router';
import { PagerService } from '../../services/pager.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  listTestRoom: any[];
  userList: any = [];
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(
    private testRoomService: TestroomService,
    private router: Router,
    private pagerService: PagerService
  ) { }

  ngOnInit() {
    this.getAllTestRoom();
  }

  getAllTestRoom(): void {
    this.testRoomService.getTestRooms().toPromise().then((result) => {
      this.listTestRoom = result;
      this.listTestRoom.forEach(element => {
        let check = true;
        if (element.userRegisteredList != null) {
          element.userRegisteredList.forEach(e => {
            if (this.currentUser.username === e) {
              check = false;
            }
          });
          if (!check) {
            element.isRegister = true;
            element.isJoin = true;
          } else {
            element.isRegister = false;
            element.isJoin = false;
          }
        } else {
          element.isRegister = false;
          element.isJoin = false;
        }
        this.checkTime(element);
      });
      this.setPage(1);
    });
  }

  checkTime(testRoom: any) {
    this.testRoomService.getCurrentTime().subscribe(time => {
      const currentTime = new Date(time);
      const startTime = new Date(testRoom.startTime);
      if (
        (startTime.getFullYear() === currentTime.getFullYear() &&
          startTime.getMonth() === currentTime.getMonth() &&
          startTime.getDate() === currentTime.getDate() &&
          startTime.getHours() === currentTime.getHours() &&
          startTime.getMinutes() <= currentTime.getMinutes()
        )
        ||
        (startTime.getFullYear() === currentTime.getFullYear() &&
          startTime.getMonth() === currentTime.getMonth() &&
          startTime.getDate() === currentTime.getDate() &&
          startTime.getHours() + 1 === currentTime.getHours()
        )
        ||
        (startTime.getFullYear() === currentTime.getFullYear() &&
          startTime.getMonth() === currentTime.getMonth() &&
          startTime.getDate() === currentTime.getDate() &&
          startTime.getHours() + 2 === currentTime.getHours() &&
          startTime.getMinutes() >= currentTime.getMinutes()
        )
      ) {
        testRoom.status = 'Test session has started';
        testRoom.isRegister = true;
      } else if (
        (
          startTime.getFullYear() < currentTime.getFullYear()
        )
        ||
        (
          startTime.getFullYear() === currentTime.getFullYear() &&
          startTime.getMonth() < currentTime.getMonth()
        )
        ||
        (
          startTime.getFullYear() === currentTime.getFullYear() &&
          startTime.getMonth() === currentTime.getMonth() &&
          startTime.getDate() < currentTime.getDate()
        )
        ||
        (
          startTime.getFullYear() === currentTime.getFullYear() &&
          startTime.getMonth() === currentTime.getMonth() &&
          startTime.getDate() === currentTime.getDate() &&
          startTime.getHours() + 3 <= currentTime.getHours()
        )
        ||
        (
          startTime.getFullYear() === currentTime.getFullYear() &&
          startTime.getMonth() === currentTime.getMonth() &&
          startTime.getDate() === currentTime.getDate() &&
          startTime.getHours() + 2 === currentTime.getHours() &&
          currentTime.getMinutes() > startTime.getMinutes()
        )
      ) {
        testRoom.status = 'Test session is expired';
        testRoom.isRegister = true;
        testRoom.isJoin = false;
      } else {
        testRoom.status = 'Test session has not started yet';
      }
    });
  }

  register(testRoom: TestRoom) {
    const startTime = new Date(testRoom.startTime);
    const currentDate = new Date();
    if (
      (
        startTime.getFullYear() > currentDate.getFullYear()
      )
      ||
      (
        startTime.getFullYear() === currentDate.getFullYear() &&
        startTime.getMonth() > currentDate.getMonth()
      )
      ||
      (
        startTime.getFullYear() === currentDate.getFullYear() &&
        startTime.getMonth() === currentDate.getMonth() &&
        startTime.getDate() > currentDate.getDate()
      )
      ||
      (
        startTime.getFullYear() === currentDate.getFullYear() &&
        startTime.getMonth() === currentDate.getMonth() &&
        startTime.getDate() === currentDate.getDate() &&
        startTime.getHours() > currentDate.getHours()
      )
      ||
      (
        startTime.getFullYear() === currentDate.getFullYear() &&
        startTime.getMonth() === currentDate.getMonth() &&
        startTime.getDate() === currentDate.getDate() &&
        startTime.getHours() === currentDate.getHours() &&
        currentDate.getMinutes() < startTime.getMinutes()
      )
    ) {
      let check = true;
      if (testRoom.userRegisteredList != null) {
        testRoom.userRegisteredList.forEach(e => {
          if (this.currentUser.username === e) {
            check = false;
          }
        });
        if (check) {
          testRoom.userRegisteredList.push(this.currentUser.username);
          this.testRoomService.updateTestRoom(testRoom).subscribe(result => {
            alert('Congratulations on your successful registration , Please click join button to join this room');
            this.getAllTestRoom();
          });
        }
      } else {
        testRoom.userRegisteredList.push(this.currentUser.username);
        this.testRoomService.updateTestRoom(testRoom).subscribe(result => {
          alert('Congratulations on your successful registration , Please click join button to join this room');
          this.getAllTestRoom();
        });
      }
    } else {
      alert('The test session has been started and you can not register !!!');
    }
  }

  startRoom(testRoom: TestRoom) {
    const startTime = new Date(testRoom.startTime);
    const currentDate = new Date();
    if (
      (
        startTime.getFullYear() < currentDate.getFullYear()
      )
      ||
      (
        startTime.getFullYear() === currentDate.getFullYear() &&
        startTime.getMonth() < currentDate.getMonth()
      )
      ||
      (
        startTime.getFullYear() === currentDate.getFullYear() &&
        startTime.getMonth() === currentDate.getMonth() &&
        startTime.getDate() < currentDate.getDate()
      )
      ||
      (
        startTime.getFullYear() === currentDate.getFullYear() &&
        startTime.getMonth() === currentDate.getMonth() &&
        startTime.getDate() === currentDate.getDate() &&
        startTime.getHours() + 3 <= currentDate.getHours()
      )
      ||
      (
        startTime.getFullYear() === currentDate.getFullYear() &&
        startTime.getMonth() === currentDate.getMonth() &&
        startTime.getDate() === currentDate.getDate() &&
        startTime.getHours() + 2 === currentDate.getHours() &&
        currentDate.getMinutes() > startTime.getMinutes()
      )
    ) {
      alert('The test session is expired !!!');
    } else {
      this.router.navigate(['/room', testRoom.roomID]);
    }
  }

  showUserList(userList: string[]) {
    this.userList = [];
    userList.forEach(element => {
      const user: any = {};
      user.username = element;
      this.userList.push(user);
    });
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.listTestRoom.length, page);

    // get current page of items
    this.pagedItems = this.listTestRoom.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
