import { ExamService } from './../../../services/exam.service';
import { PagerService } from './../../../services/pager.service';
import { Component, OnInit } from '@angular/core';
import { TestRoom } from '../../../model/test-room';
import { TestroomService } from '../../../services/testroom.service';
import 'jspdf';
import 'jspdf-autotable';
declare var jsPDF: any;

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.css']
})
export class ShowroomComponent implements OnInit {

  listTestRoom: any[];
  userList: any = [];
  testResultList: any = [];
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(
    private testRoomService: TestroomService,
    private pagerService: PagerService,
    private testroomService: TestroomService,
    private examService: ExamService
  ) { }

  ngOnInit() {
    this.getAllTestRoom();
  }

  getAllTestRoom(): void {
    this.testRoomService.getTestRooms().subscribe(result => {
      this.listTestRoom = result;
      if (this.listTestRoom.length > 0) {
        this.listTestRoom.forEach(element => {
          this.checkTime(element);
        });
      }
      this.setPage(1);
    });
  }

  deleteTestRoom(testRoom: TestRoom) {
    if (confirm('Do you want to delete it ?')) {
      this.testroomService.getCurrentTime().subscribe(time => {
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
          alert('Test session has started and you can not delete it !!!');
        } else {
          this.testRoomService.deleteTestRoom(testRoom.roomID).subscribe(result => {
            this.getAllTestRoom();
          });
        }
      });
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

  showResultList(roomID: string) {
    this.examService.getTestSessionResultHistoryByroomID(roomID).subscribe(r => {
      this.testResultList = r;
    });
  }

  exportPDF() {
    const columns = [
      { title: 'No', dataKey: 'no' },
      { title: 'Username', dataKey: 'username' },
      { title: 'ExamID', dataKey: 'examID' },
      { title: 'Reading Correct', dataKey: 'readCorrect' },
      { title: 'Listening Correct', dataKey: 'listenCorrect' },
      { title: 'Score', dataKey: 'testScore' }
    ];
    let no = 1;
    this.testResultList.forEach(element => {
      element.no = no;
      no++;
    });
    const roomID = this.testResultList[0].roomID;
    // Only pt supported (not mm or in)
    const doc = new jsPDF('p', 'pt');
    doc.autoTable(columns, this.testResultList, {
      margin: { top: 60 },
      addPageContent: function (data) {
        doc.text('Test Result For Room ' + roomID, 180, 30);
      }
    });
    doc.save('result.pdf');
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.listTestRoom.length, page);

    // get current page of items
    this.pagedItems = this.listTestRoom.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  checkTime(testRoom: any) {
    this.testroomService.getCurrentTime().subscribe(time => {
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
      } else {
        testRoom.status = 'Test session has not started yet';
      }
    });
  }
}
