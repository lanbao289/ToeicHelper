import { TestroomService } from './../../../services/testroom.service';
import { PagerService } from './../../../services/pager.service';
import { ExamService } from './../../../services/exam.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  listExams: any[];
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(
    private examService: ExamService,
    private pagerService: PagerService,
    private testroomService: TestroomService
  ) { }

  ngOnInit() {
    this.getExams();
  }

  getExams(): void {
    this.examService.getExams().subscribe(exams => {
      this.listExams = exams;
      if (this.listExams.length > 0) {
        this.listExams.forEach(element => {
          this.checkTime(element);
          Promise.all([
            // upload pdf and mp3 file
            this.examService.getListeningParts(element.examID),
            this.examService.getReadingParts(element.examID)
          ]).then((res) => {
            res[0].forEach(e => {
              if (e.length < 4) {
                element.error = true;
              }
            });

            res[1].forEach(e => {
              if (e.length < 3) {
                element.error = true;
              }
            });
          });
        });
      }
      this.setPage(1);
    });
  }

  checkTime(exam: any) {
    exam.status = true;
    this.testroomService.getTestRoomByexamID(exam.examID).subscribe(res => {
      const testRoom = res;
      if (testRoom.roomID !== null) {
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
            exam.status = false;
          }
        });
      }
    });
  }

  deleteExam(exam: any) {
    if (confirm('Do you want to delete it ?')) {
      this.checkTime(exam);
      if (exam.status) {
        this.examService.deleteExam(exam.examID).subscribe(result => {
          this.getExams();
        });
      } else {
        alert('The exam that is being used for the session has started and you can not delete it !!!');
      }
    }
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.listExams.length, page);

    // get current page of items
    this.pagedItems = this.listExams.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
