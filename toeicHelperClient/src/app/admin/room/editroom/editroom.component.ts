import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { TestroomService } from '../../../services/testroom.service';
import { ExamService } from '../../../services/exam.service';
import { Exam } from '../../../model/exam';
declare var $: any;

@Component({
  selector: 'app-editroom',
  templateUrl: './editroom.component.html',
  styleUrls: ['./editroom.component.css']
})
export class EditroomComponent implements OnInit {

  testRoom: any = {};
  listExams: Exam[];
  valid: any = {};
  message: any = {};

  constructor(
    private route: ActivatedRoute,
    private examService: ExamService,
    private testroomService: TestroomService,
    private routers: Router
  ) { }

  ngOnInit() {
    this.valid.startTime = true;
    this.valid.examID = true;
    const id = this.route.snapshot.paramMap.get('id');

    this.testroomService.getTestRoomByRoomID(id).subscribe(result => {
      this.testRoom = result;
      if (this.testRoom.roomID === null) {
        this.routers.navigate(['/admin/room']);
      }
      this.testroomService.getCurrentTime().subscribe(current => {
        const serverTime = new Date(current);
        const startTime = new Date(this.testRoom.startTime);
        // check test session has not started yet
        if (
          (
            serverTime.getFullYear() < startTime.getFullYear()
          )
          ||
          (
            serverTime.getFullYear() === startTime.getFullYear() &&
            serverTime.getMonth() < startTime.getMonth()
          )
          ||
          (
            serverTime.getFullYear() === startTime.getFullYear() &&
            serverTime.getMonth() === startTime.getMonth() &&
            serverTime.getDate() < startTime.getDate()
          )
          ||
          (
            serverTime.getFullYear() === startTime.getFullYear() &&
            serverTime.getMonth() === startTime.getMonth() &&
            serverTime.getDate() === startTime.getDate() &&
            serverTime.getHours() < startTime.getHours()
          )
          ||
          (
            serverTime.getFullYear() === startTime.getFullYear() &&
            serverTime.getMonth() === startTime.getMonth() &&
            serverTime.getDate() === startTime.getDate() &&
            serverTime.getHours() === startTime.getHours() &&
            serverTime.getMinutes() < startTime.getMinutes()
          )
        ) {
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
        } else {
          alert('The test room session has started and you cannot edit it !!!');
          this.routers.navigate(['/admin/room']);
        }
      });
    });
  }

  getExams(): void {
    this.examService.getExams().subscribe(exams => {
      this.listExams = exams;
    });
  }

  submitform() {
    this.valid.examID = true;
    this.message.examID = '';
    if (this.testRoom.examID === undefined || this.testRoom.examID.trim().length === 0) {
      this.message.examID = 'Please select a examID !!!';
      this.valid.examID = false;
    }
    // check start time
    Promise.all([
      this.testroomService.getCurrentTime()
    ]).then((result) => {

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
              serverTime.getHours() > this.testRoom.startTime.getHours() + 1
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
              serverTime.getHours() === (this.testRoom.startTime.getHours() + 1) &&
              (60 - serverTime.getMinutes() + this.testRoom.startTime.getMinutes()) > 5
            )
          ) {
            this.message.startTime = 'Please select a start time greater than the current time 5 mins !!!';
            this.valid.startTime = false;
          }
        }

        if (!this.valid.startTime || !this.testRoom.examID) {
          return false;
        }
        this.testRoom.userRegisteredList = [];
        this.testRoom.userJoinedList = [];
        this.testroomService.editTestRoom(this.testRoom).subscribe((r) => {
          alert('Update successful !!!');
          this.routers.navigate(['/admin/room/show']);
        });
      });
    });
  }
}
