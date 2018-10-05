import { TestSessionResult } from './../../model/test-session-result';
import { TestResult } from './../../model/test-result';
import { ExamService } from './../../services/exam.service';
import { Component, OnInit } from '@angular/core';
import { PagerService } from '../../services/pager.service';

@Component({
  selector: 'app-test-history',
  templateUrl: './test-history.component.html',
  styleUrls: ['./test-history.component.css']
})
export class TestHistoryComponent implements OnInit {

  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  listTestHistory: TestResult[];
  listTestSessionHistory: TestSessionResult[];
  listAll: any[];
  userList: any = [];
  selectOption = '1';

  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];

  constructor(
    private examService: ExamService,
    private pagerService: PagerService
  ) { }

  ngOnInit() {
    this.getTestResultHistory();
    this.getTestSessionResultHistory();
  }

  getTestResultHistory(): void {
    this.examService.getTestResultHistory(this.currentUser.username).subscribe(results => {
      this.listTestHistory = results;
      this.listAll = this.listTestHistory;
      this.setPage(1);
    });
  }

  getTestSessionResultHistory(): void {
    this.examService.getTestSessionResultHistory(this.currentUser.username).subscribe(results => {
      this.listTestSessionHistory = results;
    });
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.listAll.length, page);

    // get current page of items
    this.pagedItems = this.listAll.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  changeResult() {
    if (this.selectOption === '1') {
      this.listAll = this.listTestHistory;
      this.setPage(1);
    } else {
      this.listAll = this.listTestSessionHistory;
      this.setPage(1);
    }
  }
}
