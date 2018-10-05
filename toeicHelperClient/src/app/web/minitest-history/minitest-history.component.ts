import { PagerService } from './../../services/pager.service';
import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../services/exam.service';
import { TrainingResult } from '../../model/training-result';

@Component({
  selector: 'app-minitest-history',
  templateUrl: './minitest-history.component.html',
  styleUrls: ['./minitest-history.component.css']
})
export class MinitestHistoryComponent implements OnInit {

  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  listMiniTestHistory: TrainingResult[];
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(
    private examService: ExamService,
    private pagerService: PagerService
  ) { }

  ngOnInit() {
    this.getTrainingResultHistory();
  }

  getTrainingResultHistory(): void {
    this.examService.getMiniTestResultHistory(this.currentUser.username).subscribe(results => {
      this.listMiniTestHistory = results;
      this.setPage(1);
    });
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.listMiniTestHistory.length, page);

    // get current page of items
    this.pagedItems = this.listMiniTestHistory.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
