import { Component, OnInit } from '@angular/core';
import { Exam } from '../../model/exam';
import { ExamService } from '../../services/exam.service';
import { Router } from '../../../../node_modules/@angular/router';
import { DomSanitizer } from '../../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  isStart = false;
  isListenPart = false;
  isShowPdf = false;
  isSubmit = false;
  numbers: number[];
  numbers1: number[];
  answers = [];
  selectPart: any;
  part: any = {};
  exam: Exam;
  miniTestResult: any = {};

  constructor(
    private examService: ExamService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.numbers = Array(200).fill(1).map((x, i) => i + 1);
    this.selectPart = '1';
  }

  start() {
    if (confirm('Do you want start mini test TOEIC training?')) {
      this.examService.getExamsForTraining().subscribe(exams => {
        if (exams === null || exams.length <= 0) {
          alert('There are no new exams for this test !!!');
          return false;
        }
        this.starttraining();
      });
    }
  }

  starttraining() {
    switch (this.selectPart) {
      case '1':
        this.getListenPart('1');
        this.isStart = true;
        break;

      case '2':
        this.getListenPart('2');
        this.isStart = true;
        break;

      case '3':
        this.getListenPart('3');
        this.isStart = true;
        break;

      case '4':
        this.getListenPart('4');
        this.isStart = true;
        break;

      case '5':
        this.getReadPart('5');
        this.isStart = true;
        break;

      case '6':
        this.getReadPart('6');
        this.isStart = true;
        break;

      case '7':
        this.getReadPart('7');
        this.isStart = true;
        break;

      default:
        break;
    }
  }

  onFormSubmit() {
    Promise.all([
      this.examService.getAnswerParts(this.part.partID),
    ]).then((result) => {
      let correctTotal = 0;
      result[0].forEach(answers => {
        answers.forEach(answer => {
          this.answers.forEach(ans1 => {
            if (answer.questionOrder === ans1.name) {
              if (answer.answer === ans1.value) {
                correctTotal += 1;
              } else {
                ans1.isCorrect = false;
              }
              ans1.correct = answer.answer;
            }
          });
        });
        this.miniTestResult.username = this.currentUser.username;
        this.miniTestResult.examID = this.exam.examID;
        this.miniTestResult.partNo = this.selectPart;
        this.miniTestResult.dateTraining = new Date();
        this.miniTestResult.answerCorrect = correctTotal;
        this.miniTestResult.questionTotal = answers.length;
        this.examService.addMiniTestResult(this.miniTestResult).subscribe();
        this.isSubmit = true;
        alert('Congratulations on completing the exam !!!\n You have answered exactly '
          + this.miniTestResult.answerCorrect + '/' + this.miniTestResult.questionTotal + ' sentences !!!');
      });
    });

  }

  finish() {
    this.router.navigate(['/home']);
  }

  getListenPart(partNo: string) {
    let num1 = 0;
    let num2 = 0;
    switch (partNo) {
      case '1':
        num1 = 0;
        num2 = 10;
        break;
      case '2':
        num1 = 10;
        num2 = 40;
        break;
      case '3':
        num1 = 40;
        num2 = 70;
        break;
      case '4':
        num1 = 70;
        num2 = 100;
        break;
      default:
        break;
    }
    this.examService.getExamsForTraining().subscribe(exams => {
      this.exam = exams[Math.floor(Math.random() * exams.length)];
      Promise.all([
        this.examService.getListeningPart(this.exam.examID, this.selectPart)
      ]).then((result) => {
        result[0].forEach(element => {
          this.part = element;
          this.examService.getPdfFiles(this.part.pdfsrc).subscribe(res => {
            this.part.pdfsrc = URL.createObjectURL(res);
            this.isShowPdf = true;
          });
          this.examService.getMp3Files(this.part.mp3src).subscribe(res => {
            const src = URL.createObjectURL(res);
            this.part.mp3src = this.sanitizer.bypassSecurityTrustUrl(src);
            this.isListenPart = true;
          });
          // Set answer for part
          this.numbers1 = this.numbers.slice(num1, num2);
          for (let i = 0; i < this.numbers1.length; i++) {
            const ans: any = {};
            ans.name = this.numbers1[i];
            ans.value = '';
            ans.isCorrect = true;
            this.answers.push(ans);
          }
        });
      });
    });
  }

  getReadPart(partNo: string) {
    let num1 = 0;
    let num2 = 0;
    switch (partNo) {
      case '5':
        num1 = 100;
        num2 = 140;
        break;
      case '6':
        num1 = 140;
        num2 = 152;
        break;
      case '7':
        num1 = 152;
        num2 = 200;
        break;
      default:
        break;
    }
    this.examService.getExamsForTraining().subscribe(exams => {
      this.exam = exams[Math.floor(Math.random() * exams.length)];
      Promise.all([
        this.examService.getReadPart(this.exam.examID, this.selectPart)
      ]).then((result) => {
        result[0].forEach(element => {
          this.part = element;
          this.examService.getPdfFiles(this.part.pdfsrc).subscribe(res => {
            this.part.pdfsrc = URL.createObjectURL(res);
            this.isShowPdf = true;
          });
          // Set answer for part
          this.numbers1 = this.numbers.slice(num1, num2);
          for (let i = 0; i < this.numbers1.length; i++) {
            const ans: any = {};
            ans.name = this.numbers1[i];
            ans.value = '';
            ans.isCorrect = true;
            this.answers.push(ans);
          }
        });
      });
    });
  }
}
