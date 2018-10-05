import { TestroomService } from './../../../services/testroom.service';
import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../../services/exam.service';
import { Router } from '../../../../../node_modules/@angular/router';
declare var $: any;

@Component({
  selector: 'app-createroom',
  templateUrl: './createroom.component.html',
  styleUrls: ['./createroom.component.css']
})
export class CreateroomComponent implements OnInit {

  testRoom: any = {};
  listExams: any[];
  valid: any = {};
  message: any = {};

  constructor(
    private examService: ExamService,
    private testroomService: TestroomService,
    private router: Router
  ) { }

  ngOnInit() {
    this.valid.roomID = true;
    this.valid.startTime = true;
    this.valid.examID = true;
    this.getExams();
    $('#form_datetime').datetimepicker({
      format: 'mm/dd/yyyy hh:ii:00',
      autoclose: true,
      todayBtn: true,
      minuteStep: 5,
      weekStart: 1,

      todayHighlight: 1,
      startView: 2,
      forceParse: 0,
      showMeridian: 1
    });
  }

  getExams(): void {
    this.examService.getExamsForTest().subscribe(exams => {
      this.listExams = exams;
      if (this.listExams.length > 0) {
        let cnt = 0;
        this.listExams.forEach(element => {
          Promise.all([
            // upload pdf and mp3 file
            this.examService.getListeningParts(element.examID),
            this.examService.getReadingParts(element.examID)
          ]).then((res) => {
            res[0].forEach(e => {
              if (e.length < 4) {
                element.error = true;
              }
            }).then((result) => {
              res[1].forEach(e => {
                if (e.length < 3) {
                  if (this.listExams.indexOf(element) >= 0) {
                    element.error = true;
                  }
                }
              });
              if (cnt === 0 && !element.error) {
                this.testRoom.examID = element.examID;
                cnt++;
              }
            });
          });
        });
        if (cnt === 0) {
          this.testRoom.examID = '';
        }
      }
    });
  }

  submitform() {
    // validate roomID field
    this.valid.roomID = true;
    this.message.roomID = '';
    const roomIDRegex = new RegExp('^[a-zA-Z0-9]{5,15}$');
    if (this.testRoom.roomID === undefined || this.testRoom.roomID.trim().length === 0) {
      this.message.roomID = 'RoomID can not be blank !!!';
      this.valid.roomID = false;
    } else if (this.testRoom.roomID.trim().length < 5) {
      this.message.roomID = 'RoomID must be more than 4 characters !!!';
      this.valid.roomID = false;
    } else if (this.testRoom.roomID.trim().length > 15) {
      this.message.roomID = 'RoomID must be less than 15 characters !!!';
      this.valid.roomID = false;
    } else if (!roomIDRegex.test(this.testRoom.roomID.trim())) {
      this.message.roomID = 'RoomID only contains letters and numbers !!!';
      this.valid.roomID = false;
    }

    this.valid.examID = true;
    this.message.examID = '';
    if (this.testRoom.examID === undefined || this.testRoom.examID.trim().length === 0) {
      this.message.examID = 'Please select a examID !!!';
      this.valid.examID = false;
    }

    if (this.testRoom.roomID !== undefined && this.testRoom.roomID.trim().length > 0) {
      // check start time
      Promise.all([
        this.testroomService.getCurrentTime(),
        this.testroomService.getTestRoomByRoomID(this.testRoom.roomID),
        this.testroomService.getTestRoomByexamID(this.testRoom.examID)
      ]).then((result) => {
        result[1].forEach(element => {
          if (element.roomID === this.testRoom.roomID) {
            this.message.roomID = 'RoomID already exists !!!';
            this.valid.roomID = false;
          }
        }).then((r) => {
          result[2].forEach(element => {
            if (element.examID === this.testRoom.examID) {
              this.message.examID = 'Exam created for another room session !!!';
              this.valid.examID = false;
            }
          }).then((r1) => {
            result[0].forEach(element => {
              const serverTime = new Date(element);
              this.valid.startTime = true;
              this.message.startTime = '';
              const date = $('#date').val();
              if (date === undefined || date === '') {
                this.message.startTime = 'StartTime can not be blank !!!';
                this.valid.startTime = false;
              } else {
                this.testRoom.startTime = new Date(date);
                if (
                  (
                    serverTime.getFullYear() > this.testRoom.startTime.getFullYear()
                  )
                  ||
                  (
                    serverTime.getFullYear() === this.testRoom.startTime.getFullYear() &&
                    serverTime.getMonth() > this.testRoom.startTime.getMonth()
                  )
                  ||
                  (
                    serverTime.getFullYear() === this.testRoom.startTime.getFullYear() &&
                    serverTime.getMonth() === this.testRoom.startTime.getMonth() &&
                    serverTime.getDate() > this.testRoom.startTime.getDate()
                  )
                  ||
                  (
                    serverTime.getFullYear() === this.testRoom.startTime.getFullYear() &&
                    serverTime.getMonth() === this.testRoom.startTime.getMonth() &&
                    serverTime.getDate() === this.testRoom.startTime.getDate() &&
                    serverTime.getHours() > this.testRoom.startTime.getHours()
                  )
                  ||
                  (
                    serverTime.getFullYear() === this.testRoom.startTime.getFullYear() &&
                    serverTime.getMonth() === this.testRoom.startTime.getMonth() &&
                    serverTime.getDate() === this.testRoom.startTime.getDate() &&
                    serverTime.getHours() === this.testRoom.startTime.getHours() &&
                    (serverTime.getMinutes() + 5) > this.testRoom.startTime.getMinutes()
                  )
                  ||
                  (
                    serverTime.getFullYear() === this.testRoom.startTime.getFullYear() &&
                    serverTime.getMonth() === this.testRoom.startTime.getMonth() &&
                    serverTime.getDate() === this.testRoom.startTime.getDate() &&
                    serverTime.getHours() + 1 === this.testRoom.startTime.getHours() &&
                    (60 - serverTime.getMinutes() + this.testRoom.startTime.getMinutes()) < 5
                  )
                ) {
                  this.message.startTime = 'Please select a start time greater than the current time 5 mins !!!';
                  this.valid.startTime = false;
                }
              }
              if (!this.valid.roomID || !this.valid.startTime || !this.valid.examID) {
                return false;
              }
              this.testRoom.userRegisteredList = [];
              this.testRoom.userJoinedList = [];
              this.testRoom.userOnlineList = [];
              this.testroomService.addTestRoom(this.testRoom).subscribe((r2) => {
                alert('The test room session successfully created !!!');
                this.router.navigate(['/admin/room/show']);
              });
            });
          });
        });
      });
    } else {
      return false;
    }
  }
}
