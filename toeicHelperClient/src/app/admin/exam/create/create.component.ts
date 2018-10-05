import { ExamService } from './../../../services/exam.service';
import { AnswerPart } from './../../../model/answer-part';
import { AddExamService } from './../../../services/add-exam.service';
import { UploadfileService } from './../../../services/uploadfile.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from '../../../model/exam';
declare var $: any;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  exam: any = {};
  exam1: Exam;
  valid: any = {};
  message: any = {};

  isExamID = true;
  isPart1 = false;
  isPart2 = false;
  isPart3 = false;
  isPart4 = false;
  isPart5 = false;
  isPart6 = false;
  isPart7 = false;

  answerPart1: string;
  answerPart2: string;
  answerPart3: string;
  answerPart4: string;
  answerPart5: string;
  answerPart6: string;
  answerPart7: string;
  answerParts: AnswerPart[] = [];

  selectedFilesPart1: FileList;
  selectedMp3FilesPart1: FileList;

  selectedFilesPart2: FileList;
  selectedMp3FilesPart2: FileList;

  selectedFilesPart3: FileList;
  selectedMp3FilesPart3: FileList;

  selectedFilesPart4: FileList;
  selectedMp3FilesPart4: FileList;

  selectedFilesPart5: FileList;

  selectedFilesPart6: FileList;

  selectedFilesPart7: FileList;


  constructor(
    private uploadfileService: UploadfileService,
    private addExamService: AddExamService,
    private examService: ExamService,
    private router: Router
  ) { }

  ngOnInit() {
    $('#pdfpart1').attr({ 'value': '/src/assets/images/bg_clock_toeic.png' });
    this.valid.examID = true;
    this.exam.isTest = 'false';
    // part 1
    this.valid.pdfPart1 = true;
    this.valid.mp3Part1 = true;
    this.valid.answerPart1 = true;

    // part 2
    this.valid.pdfPart2 = true;
    this.valid.mp3Part2 = true;
    this.valid.answerPart2 = true;

    // part 3
    this.valid.pdfPart3 = true;
    this.valid.mp3Part3 = true;
    this.valid.answerPart3 = true;

    // part 4
    this.valid.pdfPart4 = true;
    this.valid.mp3Part4 = true;
    this.valid.answerPart4 = true;

    // part 5
    this.valid.pdfPart5 = true;
    this.valid.answerPart5 = true;

    // part 6
    this.valid.pdfPart6 = true;
    this.valid.answerPart6 = true;

    // part 7
    this.valid.pdfPart7 = true;
    this.valid.answerPart7 = true;
  }

  // select change file input

  selectFilePart1(event) {
    this.selectedFilesPart1 = event.target.files;
  }
  selectMp3FilePart1(event) {
    this.selectedMp3FilesPart1 = event.target.files;
  }

  selectFilePart2(event) {
    this.selectedFilesPart2 = event.target.files;
  }
  selectMp3FilePart2(event) {
    this.selectedMp3FilesPart2 = event.target.files;
  }

  selectFilePart3(event) {
    this.selectedFilesPart3 = event.target.files;
  }
  selectMp3FilePart3(event) {
    this.selectedMp3FilesPart3 = event.target.files;
  }

  selectFilePart4(event) {
    this.selectedFilesPart4 = event.target.files;
  }
  selectMp3FilePart4(event) {
    this.selectedMp3FilesPart4 = event.target.files;
  }

  selectFilePart5(event) {
    this.selectedFilesPart5 = event.target.files;
  }

  selectFilePart6(event) {
    this.selectedFilesPart6 = event.target.files;
  }

  selectFilePart7(event) {
    this.selectedFilesPart7 = event.target.files;
  }

  // end select.

  onisTestChanged(value: boolean) {
    if (value) {
      this.exam.isTest = 'true';
    } else {
      this.exam.isTest = 'false';
    }
  }

  addExam() {
    this.valid.examID = true;
    this.message.examID = '';
    const examIDRegex = new RegExp('^[a-zA-Z0-9]{5,15}$');
    if (this.exam.examID === undefined || this.exam.examID.trim().length === 0) {
      this.message.examID = 'ExamID can not be blank !!!';
      this.valid.examID = false;
    } else if (this.exam.examID.trim().length < 5) {
      this.message.examID = 'ExamID must be more than 4 characters !!!';
      this.valid.examID = false;
    } else if (this.exam.examID.trim().length > 15) {
      this.message.examID = 'ExamID must be less than 15 characters !!!';
      this.valid.examID = false;
    } else if (!examIDRegex.test(this.exam.examID.trim())) {
      this.message.examID = 'ExamID only contains letters and numbers !!!';
      this.valid.examID = false;
    }

    if (!this.valid.examID) {
      return false;
    }

    Promise.all([
      this.examService.getExamByExamID(this.exam.examID)
    ]).then((result) => {
      result[0].forEach(element => {

        // check ID already exists
        if (element.examID !== null) {
          this.message.examID = 'ExamID already exists !!!';
          this.valid.examID = false;
        } else {
          // add exam on database
          this.addExamService.addExam(this.exam).subscribe(exam => {
            this.exam1 = exam;
          });
          this.isExamID = false;
          this.isPart1 = true;
          this.isPart2 = true;
          this.isPart3 = true;
          this.isPart4 = true;
          this.isPart5 = true;
          this.isPart6 = true;
          this.isPart7 = true;
        }
      });
    });
  }

  showAnswer(partNo: number) {
    this.answerParts = [];
    switch (partNo) {
      case 1:
        if (this.answerPart1 === undefined) {
          this.answerPart1 = '';
        }
        for (let i = 0; i < 10; i++) {
          const answer: AnswerPart = new AnswerPart;
          answer.partID = '1';
          answer.answer = this.answerPart1.charAt(i) === ' ' ? '' : this.answerPart1.charAt(i).toUpperCase();
          answer.questionOrder = i + 1;
          this.answerParts.push(answer);
        }
        break;

      case 2:
        if (this.answerPart2 === undefined) {
          this.answerPart2 = '';
        }
        for (let i = 0; i < 30; i++) {
          const answer: AnswerPart = new AnswerPart;
          answer.partID = '2';
          answer.answer = this.answerPart2.charAt(i) === ' ' ? '' : this.answerPart2.charAt(i).toUpperCase();
          answer.questionOrder = i + 11;
          this.answerParts.push(answer);
        }
        break;

      case 3:
        if (this.answerPart3 === undefined) {
          this.answerPart3 = '';
        }
        for (let i = 0; i < 30; i++) {
          const answer: AnswerPart = new AnswerPart;
          answer.partID = '3';
          answer.answer = this.answerPart3.charAt(i) === ' ' ? '' : this.answerPart3.charAt(i).toUpperCase();
          answer.questionOrder = i + 41;
          this.answerParts.push(answer);
        }
        break;

      case 4:
        if (this.answerPart4 === undefined) {
          this.answerPart4 = '';
        }
        for (let i = 0; i < 30; i++) {
          const answer: AnswerPart = new AnswerPart;
          answer.partID = '4';
          answer.answer = this.answerPart4.charAt(i) === ' ' ? '' : this.answerPart4.charAt(i).toUpperCase();
          answer.questionOrder = i + 71;
          this.answerParts.push(answer);
        }
        break;

      case 5:
        if (this.answerPart5 === undefined) {
          this.answerPart5 = '';
        }
        for (let i = 0; i < 40; i++) {
          const answer: AnswerPart = new AnswerPart;
          answer.partID = '5';
          answer.answer = this.answerPart5.charAt(i) === ' ' ? '' : this.answerPart5.charAt(i).toUpperCase();
          answer.questionOrder = i + 101;
          this.answerParts.push(answer);
        }
        break;

      case 6:
        if (this.answerPart6 === undefined) {
          this.answerPart6 = '';
        }
        for (let i = 0; i < 12; i++) {
          const answer: AnswerPart = new AnswerPart;
          answer.partID = '6';
          answer.answer = this.answerPart6.charAt(i) === ' ' ? '' : this.answerPart6.charAt(i).toUpperCase();
          answer.questionOrder = i + 141;
          this.answerParts.push(answer);
        }
        break;

      case 7:
        if (this.answerPart7 === undefined) {
          this.answerPart7 = '';
        }
        for (let i = 0; i < 48; i++) {
          const answer: AnswerPart = new AnswerPart;
          answer.partID = '7';
          answer.answer = this.answerPart7.charAt(i) === ' ' ? '' : this.answerPart7.charAt(i).toUpperCase();
          answer.questionOrder = i + 153;
          this.answerParts.push(answer);
        }
        break;

      default:
        break;
    }

  }

  answerChange(partNo: string) {
    switch (partNo) {
      case '1':
        this.answerPart1 = '';
        this.answerParts.forEach(element => {
          this.answerPart1 += element.answer === '' ? ' ' : element.answer.toUpperCase();
        });
        break;
      case '2':
        this.answerPart2 = '';
        this.answerParts.forEach(element => {
          this.answerPart2 += element.answer === '' ? ' ' : element.answer.toUpperCase();
        });
        break;
      case '3':
        this.answerPart3 = '';
        this.answerParts.forEach(element => {
          this.answerPart3 += element.answer === '' ? ' ' : element.answer.toUpperCase();
        });
        break;
      case '4':
        this.answerPart4 = '';
        this.answerParts.forEach(element => {
          this.answerPart4 += element.answer === '' ? ' ' : element.answer.toUpperCase();
        });
        break;
      case '5':
        this.answerPart5 = '';
        this.answerParts.forEach(element => {
          this.answerPart5 += element.answer === '' ? ' ' : element.answer.toUpperCase();
        });
        break;
      case '6':
        this.answerPart6 = '';
        this.answerParts.forEach(element => {
          this.answerPart6 += element.answer === '' ? ' ' : element.answer.toUpperCase();
        });
        break;
      case '7':
        this.answerPart7 = '';
        this.answerParts.forEach(element => {
          this.answerPart7 += element.answer === '' ? ' ' : element.answer.toUpperCase();
        });
        break;

      default:
        break;
    }
  }

  upload(part: number) {
    switch (part) {

      case 1:
        // check file type
        this.valid.pdfPart1 = true;
        this.message.pdfPart1 = '';
        if (this.selectedFilesPart1 === undefined || this.selectedFilesPart1.length === 0) {
          this.message.pdfPart1 = 'Please choose pdf file for part 1 !!!';
          this.valid.pdfPart1 = false;
        } else if (this.selectedFilesPart1[0].type !== 'application/pdf') {
          this.message.pdfPart1 = 'Only accept pdf file !!!';
          this.valid.pdfPart1 = false;
        }

        this.valid.mp3Part1 = true;
        this.message.mp3Part1 = '';
        if (this.selectedMp3FilesPart1 === undefined || this.selectedMp3FilesPart1.length === 0) {
          this.message.mp3Part1 = 'Please choose mp3 file for part 1 !!!';
          this.valid.mp3Part1 = false;
        } else if (this.selectedMp3FilesPart1[0].type !== 'audio/mp3') {
          this.message.mp3Part1 = 'Only accept mp3 file !!!';
          this.valid.mp3Part1 = false;
        }

        // check answer
        this.valid.answerPart1 = true;
        this.message.answerPart1 = '';
        const answerPart1Regex = new RegExp('^[abcdABCD]{10}$');
        if (this.answerPart1 === undefined || this.answerPart1.trim().length === 0) {
          this.message.answerPart1 = 'Please insert 10 answer for this part !!!';
          this.valid.answerPart1 = false;
        } else if (!answerPart1Regex.test(this.answerPart1.trim())) {
          this.message.answerPart1 = 'Only accept a,b,c,d answer!!!';
          this.valid.answerPart1 = false;
        }

        if (!this.valid.pdfPart1 || !this.valid.mp3Part1 || !this.valid.answerPart1) {
          break;
        }

        // upload file and create part 1
        Promise.all([
          // upload pdf and mp3 file
          this.uploadfileService.pushFileToStorage(this.selectedFilesPart1[0]),
          this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart1[0])
        ]).then(result => {

          // create part object and set value
          const part1: any = {};
          part1.examID = this.exam1.examID;
          part1.partNo = 1;
          part1.pdfsrc = result[0];
          part1.mp3src = result[1];

          // add part in database
          this.addExamService.addListeningPart(part1).subscribe(listeningPart => {

            // create answert sheet for part
            const answers: AnswerPart[] = [];
            for (let i = 0; i < 10; i++) {
              const answer: AnswerPart = new AnswerPart;
              answer.partID = listeningPart.partID;
              answer.questionOrder = i + 1;
              answer.answer = this.answerPart1.charAt(i).toUpperCase();
              answers.push(answer);
            }
            this.addExamService.addAnswer(answers).subscribe(answerPart => {
              alert('Part 1 successfully created !!!');
              this.selectedFilesPart1 = undefined;
              this.selectedMp3FilesPart1 = undefined;
              this.isPart1 = false;
              this.checkFullExam();
            });
          });
        });
        break;

      case 2:
        // check file type
        this.valid.pdfPart2 = true;
        this.message.pdfPart2 = '';
        if (this.selectedFilesPart2 === undefined || this.selectedFilesPart2.length === 0) {
          this.message.pdfPart2 = 'Please choose pdf file for part 2 !!!';
          this.valid.pdfPart2 = false;
        } else if (this.selectedFilesPart2[0].type !== 'application/pdf') {
          this.message.pdfPart2 = 'Only accept pdf file !!!';
          this.valid.pdfPart2 = false;
        }

        this.valid.mp3Part2 = true;
        this.message.mp3Part2 = '';
        if (this.selectedMp3FilesPart2 === undefined || this.selectedMp3FilesPart2.length === 0) {
          this.message.mp3Part2 = 'Please choose mp3 file for part 2 !!!';
          this.valid.mp3Part2 = false;
        } else if (this.selectedMp3FilesPart2[0].type !== 'audio/mp3') {
          this.message.mp3Part2 = 'Only accept mp3 file !!!';
          this.valid.mp3Part2 = false;
        }

        // check answer
        this.valid.answerPart2 = true;
        this.message.answerPart2 = '';
        const answerPart2Regex = new RegExp('^[abcdABCD]{30}$');
        if (this.answerPart2 === undefined || this.answerPart2.trim().length === 0) {
          this.message.answerPart2 = 'Please insert 30 answer for this part !!!';
          this.valid.answerPart2 = false;
        } else if (!answerPart2Regex.test(this.answerPart2.trim())) {
          this.message.answerPart2 = 'Only accept a,b,c,d answer!!!';
          this.valid.answerPart2 = false;
        }

        if (!this.valid.pdfPart2 || !this.valid.mp3Part2 || !this.valid.answerPart2) {
          break;
        }

        // upload file and create part 2
        Promise.all([
          this.uploadfileService.pushFileToStorage(this.selectedFilesPart2[0]),
          this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart2[0])
        ]).then(result => {
          const part1: any = {};
          part1.examID = this.exam1.examID;
          part1.partNo = 2;
          part1.pdfsrc = result[0];
          part1.mp3src = result[1];
          this.addExamService.addListeningPart(part1).subscribe(listeningPart => {
            const answers: AnswerPart[] = [];
            for (let i = 0; i < 30; i++) {
              const answer: AnswerPart = new AnswerPart;
              answer.partID = listeningPart.partID;
              answer.questionOrder = i + 11;
              answer.answer = this.answerPart2.charAt(i).toUpperCase();
              answers.push(answer);
            }
            this.addExamService.addAnswer(answers).subscribe(answerPart => {
              alert('Part 2 successfully created !!!');
              this.selectedFilesPart2 = undefined;
              this.selectedMp3FilesPart2 = undefined;
              this.isPart2 = false;
              this.checkFullExam();
            });
          });
        });
        break;

      case 3:
        // check file type
        this.valid.pdfPart3 = true;
        this.message.pdfPart3 = '';
        if (this.selectedFilesPart3 === undefined || this.selectedFilesPart3.length === 0) {
          this.message.pdfPart3 = 'Please choose pdf file for part 3 !!!';
          this.valid.pdfPart3 = false;
        } else if (this.selectedFilesPart3[0].type !== 'application/pdf') {
          this.message.pdfPart3 = 'Only accept pdf file !!!';
          this.valid.pdfPart3 = false;
        }

        this.valid.mp3Part3 = true;
        this.message.mp3Part3 = '';
        if (this.selectedMp3FilesPart3 === undefined || this.selectedMp3FilesPart3.length === 0) {
          this.message.mp3Part3 = 'Please choose mp3 file for part 3 !!!';
          this.valid.mp3Part3 = false;
        } else if (this.selectedMp3FilesPart3[0].type !== 'audio/mp3') {
          this.message.mp3Part3 = 'Only accept mp3 file !!!';
          this.valid.mp3Part3 = false;
        }

        // check answer
        this.valid.answerPart3 = true;
        this.message.answerPart3 = '';
        const answerPart3Regex = new RegExp('^[abcdABCD]{30}$');
        if (this.answerPart3 === undefined || this.answerPart3.trim().length === 0) {
          this.message.answerPart3 = 'Please insert 30 answer for this part !!!';
          this.valid.answerPart3 = false;
        } else if (!answerPart3Regex.test(this.answerPart3.trim())) {
          this.message.answerPart3 = 'Only accept a,b,c,d answer!!!';
          this.valid.answerPart3 = false;
        }

        if (!this.valid.pdfPart3 || !this.valid.mp3Part3 || !this.valid.answerPart3) {
          break;
        }

        // upload file and create part 3
        Promise.all([
          this.uploadfileService.pushFileToStorage(this.selectedFilesPart3[0]),
          this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart3[0])
        ]).then(result => {
          const part1: any = {};
          part1.examID = this.exam1.examID;
          part1.partNo = 3;
          part1.pdfsrc = result[0];
          part1.mp3src = result[1];
          this.addExamService.addListeningPart(part1).subscribe(listeningPart => {
            const answers: AnswerPart[] = [];
            for (let i = 0; i < 30; i++) {
              const answer: AnswerPart = new AnswerPart;
              answer.partID = listeningPart.partID;
              answer.questionOrder = i + 41;
              answer.answer = this.answerPart3.charAt(i).toUpperCase();
              answers.push(answer);
            }
            this.addExamService.addAnswer(answers).subscribe(answerPart => {
              alert('Part 3 successfully created !!!');
              this.selectedFilesPart3 = undefined;
              this.selectedMp3FilesPart3 = undefined;
              this.isPart3 = false;
              this.checkFullExam();
            });
          });
        });
        break;

      case 4:
        // check file type
        this.valid.pdfPart4 = true;
        this.message.pdfPart4 = '';
        if (this.selectedFilesPart4 === undefined || this.selectedFilesPart4.length === 0) {
          this.message.pdfPart4 = 'Please choose pdf file for part 4 !!!';
          this.valid.pdfPart4 = false;
        } else if (this.selectedFilesPart4[0].type !== 'application/pdf') {
          this.message.pdfPart4 = 'Only accept pdf file !!!';
          this.valid.pdfPart4 = false;
        }

        this.valid.mp3Part4 = true;
        this.message.mp3Part4 = '';
        if (this.selectedMp3FilesPart4 === undefined || this.selectedMp3FilesPart4.length === 0) {
          this.message.mp3Part4 = 'Please choose mp3 file for part 4 !!!';
          this.valid.mp3Part4 = false;
        } else if (this.selectedMp3FilesPart4[0].type !== 'audio/mp3') {
          this.message.mp3Part4 = 'Only accept mp3 file !!!';
          this.valid.mp3Part4 = false;
        }

        // check answer
        this.valid.answerPart4 = true;
        this.message.answerPart4 = '';
        const answerPart4Regex = new RegExp('^[abcdABCD]{30}$');
        if (this.answerPart4 === undefined || this.answerPart4.trim().length === 0) {
          this.message.answerPart4 = 'Please insert 30 answer for this part !!!';
          this.valid.answerPart4 = false;
        } else if (!answerPart4Regex.test(this.answerPart4.trim())) {
          this.message.answerPart4 = 'Only accept a,b,c,d answer!!!';
          this.valid.answerPart4 = false;
        }

        if (!this.valid.pdfPart4 || !this.valid.mp3Part4 || !this.valid.answerPart4) {
          break;
        }

        // upload file and create part 4
        Promise.all([
          this.uploadfileService.pushFileToStorage(this.selectedFilesPart4[0]),
          this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart4[0])
        ]).then(result => {
          const part1: any = {};
          part1.examID = this.exam1.examID;
          part1.partNo = 4;
          part1.pdfsrc = result[0];
          part1.mp3src = result[1];
          this.addExamService.addListeningPart(part1).subscribe(listeningPart => {
            const answers: AnswerPart[] = [];
            for (let i = 0; i < 30; i++) {
              const answer: AnswerPart = new AnswerPart;
              answer.partID = listeningPart.partID;
              answer.questionOrder = i + 71;
              answer.answer = this.answerPart4.charAt(i).toUpperCase();
              answers.push(answer);
            }
            this.addExamService.addAnswer(answers).subscribe(answerPart => {
              alert('Part 4 successfully created !!!');
              this.selectedFilesPart4 = undefined;
              this.selectedMp3FilesPart4 = undefined;
              this.isPart4 = false;
              this.checkFullExam();
            });
          });
        });
        break;

      case 5:
        // check file type
        this.valid.pdfPart5 = true;
        this.message.pdfPart5 = '';
        if (this.selectedFilesPart5 === undefined || this.selectedFilesPart5.length === 0) {
          this.message.pdfPart5 = 'Please choose pdf file for part 5 !!!';
          this.valid.pdfPart5 = false;
        } else if (this.selectedFilesPart5[0].type !== 'application/pdf') {
          this.message.pdfPart5 = 'Only accept pdf file !!!';
          this.valid.pdfPart5 = false;
        }

        // check answer
        this.valid.answerPart5 = true;
        this.message.answerPart5 = '';
        const answerPart5Regex = new RegExp('^[abcdABCD]{40}$');
        if (this.answerPart5 === undefined || this.answerPart5.trim().length === 0) {
          this.message.answerPart5 = 'Please insert 40 answer for this part !!!';
          this.valid.answerPart5 = false;
        } else if (!answerPart5Regex.test(this.answerPart5.trim())) {
          this.message.answerPart5 = 'Only accept a,b,c,d answer!!!';
          this.valid.answerPart5 = false;
        }

        if (!this.valid.pdfPart5 || !this.valid.answerPart5) {
          break;
        }

        // upload file and create part 5
        Promise.all([
          this.uploadfileService.pushFileToStorage(this.selectedFilesPart5[0])
        ]).then(result => {
          const part1: any = {};
          part1.examID = this.exam1.examID;
          part1.partNo = 5;
          part1.pdfsrc = result[0];

          this.addExamService.addReadingPart(part1).subscribe(readingPart => {
            const answers: AnswerPart[] = [];
            for (let i = 0; i < 40; i++) {
              const answer: AnswerPart = new AnswerPart;
              answer.partID = readingPart.partID;
              answer.questionOrder = i + 101;
              answer.answer = this.answerPart5.charAt(i).toUpperCase();
              answers.push(answer);
            }
            this.addExamService.addAnswer(answers).subscribe(answerPart => {
              alert('Part 5 successfully created !!!');
              this.selectedFilesPart5 = undefined;
              this.isPart5 = false;
              this.checkFullExam();
            });
          });
        });
        break;

      case 6:
        // check file type
        this.valid.pdfPart6 = true;
        this.message.pdfPart6 = '';
        if (this.selectedFilesPart6 === undefined || this.selectedFilesPart6.length === 0) {
          this.message.pdfPart6 = 'Please choose pdf file for part 6 !!!';
          this.valid.pdfPart6 = false;
        } else if (this.selectedFilesPart6[0].type !== 'application/pdf') {
          this.message.pdfPart6 = 'Only accept pdf file !!!';
          this.valid.pdfPart6 = false;
        }

        // check answer
        this.valid.answerPart6 = true;
        this.message.answerPart6 = '';
        const answerPart6Regex = new RegExp('^[abcdABCD]{12}$');
        if (this.answerPart6 === undefined || this.answerPart6.trim().length === 0) {
          this.message.answerPart6 = 'Please insert 12 answer for this part !!!';
          this.valid.answerPart6 = false;
        } else if (!answerPart6Regex.test(this.answerPart6.trim())) {
          this.message.answerPart6 = 'Only accept a,b,c,d answer!!!';
          this.valid.answerPart6 = false;
        }

        if (!this.valid.pdfPart6 || !this.valid.answerPart6) {
          break;
        }

        // upload file and create part 6
        Promise.all([
          this.uploadfileService.pushFileToStorage(this.selectedFilesPart6[0])
        ]).then(result => {
          const part1: any = {};
          part1.examID = this.exam1.examID;
          part1.partNo = 6;
          part1.pdfsrc = result[0];

          this.addExamService.addReadingPart(part1).subscribe(readingPart => {
            const answers: AnswerPart[] = [];
            for (let i = 0; i < 12; i++) {
              const answer: AnswerPart = new AnswerPart;
              answer.partID = readingPart.partID;
              answer.questionOrder = i + 141;
              answer.answer = this.answerPart6.charAt(i).toUpperCase();
              answers.push(answer);
            }
            this.addExamService.addAnswer(answers).subscribe(answerPart => {
              alert('Part 6 successfully created !!!');
              this.selectedFilesPart6 = undefined;
              this.isPart6 = false;
              this.checkFullExam();
            });
          });
        });
        break;

      case 7:
        // check file type
        this.valid.pdfPart7 = true;
        this.message.pdfPart7 = '';
        if (this.selectedFilesPart7 === undefined || this.selectedFilesPart7.length === 0) {
          this.message.pdfPart7 = 'Please choose pdf file for part 7 !!!';
          this.valid.pdfPart7 = false;
        } else if (this.selectedFilesPart7[0].type !== 'application/pdf') {
          this.message.pdfPart7 = 'Only accept pdf file !!!';
          this.valid.pdfPart7 = false;
        }

        // check answer
        this.valid.answerPart7 = true;
        this.message.answerPart7 = '';
        const answerPart7Regex = new RegExp('^[abcdABCD]{48}$');
        if (this.answerPart7 === undefined || this.answerPart7.trim().length === 0) {
          this.message.answerPart7 = 'Please insert 48 answer for this part !!!';
          this.valid.answerPart7 = false;
        } else if (!answerPart7Regex.test(this.answerPart7.trim())) {
          this.message.answerPart7 = 'Only accept a,b,c,d answer!!!';
          this.valid.answerPart7 = false;
        }

        if (!this.valid.pdfPart7 || !this.valid.answerPart7) {
          break;
        }

        // upload file and create part 7
        Promise.all([
          this.uploadfileService.pushFileToStorage(this.selectedFilesPart7[0])
        ]).then(result => {
          const part1: any = {};
          part1.examID = this.exam1.examID;
          part1.partNo = 7;
          part1.pdfsrc = result[0];

          this.addExamService.addReadingPart(part1).subscribe(readingPart => {
            const answers: AnswerPart[] = [];
            for (let i = 0; i < 48; i++) {
              const answer: AnswerPart = new AnswerPart;
              answer.partID = readingPart.partID;
              answer.questionOrder = i + 153;
              answer.answer = this.answerPart7.charAt(i).toUpperCase();
              answers.push(answer);
            }
            this.addExamService.addAnswer(answers).subscribe(answerPart => {
              alert('Part 7 successfully created !!!');
              this.selectedFilesPart7 = undefined;
              this.isPart7 = false;
              this.checkFullExam();
            });
          });
        });
        break;

      default: return;
    }
  }

  checkFullExam() {
    if (!this.isPart1 &&
      !this.isPart2 &&
      !this.isPart3 &&
      !this.isPart4 &&
      !this.isPart5 &&
      !this.isPart6 &&
      !this.isPart7
    ) {
      this.router.navigate(['/admin/exam']);
    }
  }
}
