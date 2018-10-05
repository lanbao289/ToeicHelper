import { ExamService } from './../../services/exam.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  numberOfUser = 0;
  numberOfExam = 0;

  constructor(
    private userService: UserService,
    private examService: ExamService
  ) { }

  ngOnInit() {
    this.getNumOfUsers();
    this.getNumOfExams();
  }

  getNumOfUsers() {
    this.userService.getUsers().subscribe(users => {
      this.numberOfUser = users.length;
    });
  }

  getNumOfExams() {
    this.examService.getExams().subscribe(exams => {
      this.numberOfExam = exams.length;
    });
  }
}
