import { TestroomService } from './../../../services/testroom.service';
import { AddExamService } from './../../../services/add-exam.service';
import { UploadfileService } from './../../../services/uploadfile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { ExamService } from '../../../services/exam.service';
import { AnswerPart } from '../../../model/answer-part';
import { DomSanitizer } from '../../../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  exam: any = {};
  valid: any = {};
  message: any = {};
  part1: any = {};
  part2: any = {};
  part3: any = {};
  part4: any = {};
  part5: any = {};
  part6: any = {};
  part7: any = {};


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

  part1pdfsrc: any;
  part1mp3src: any;
  part2pdfsrc: any;
  part2mp3src: any;
  part3pdfsrc: any;
  part3mp3src: any;
  part4pdfsrc: any;
  part4mp3src: any;
  part5pdfsrc: any;
  part6pdfsrc: any;
  part7pdfsrc: any;

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
    private route: ActivatedRoute,
    private router: Router,
    private examService: ExamService,
    private uploadfileService: UploadfileService,
    private addExamService: AddExamService,
    private sanitizer: DomSanitizer,
    private testroomService: TestroomService
  ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    this.examService.getExamByExamID(id).subscribe(exam => {
      this.exam = exam;
      if (this.exam.examID === null) {
        this.router.navigate(['/admin/exam']);
      }
      this.checkTime(this.exam);
      Promise.all([
        // upload pdf and mp3 file
        this.examService.getListeningParts(this.exam.examID),
        this.examService.getReadingParts(this.exam.examID)
      ]).then((result) => {
        result[0].forEach(ListenPart => {
          this.part1 = null;
          this.part2 = null;
          this.part3 = null;
          this.part4 = null;
          ListenPart.forEach(element => {
            if (element.partNo === 1) {
              this.part1 = element;
            } else if (element.partNo === 2) {
              this.part2 = element;
            } else if (element.partNo === 3) {
              this.part3 = element;
            } else if (element.partNo === 4) {
              this.part4 = element;
            }
          });
        }).then((r) => {
          if (this.part1 !== null) {
            this.isPart1 = true;
            this.examService.getPdfFiles(this.part1.pdfsrc).subscribe(res => {
              const src = URL.createObjectURL(res);
              this.part1pdfsrc = this.sanitizer.bypassSecurityTrustUrl(src);
            });
            this.examService.getMp3Files(this.part1.mp3src).subscribe(res => {
              const src = URL.createObjectURL(res);
              this.part1mp3src = this.sanitizer.bypassSecurityTrustUrl(src);
            });
            this.examService.getAnswerParts(this.part1.partID).subscribe(ans => {
              const answers: AnswerPart[] = ans;
              this.answerPart1 = '';
              answers.forEach(element => {
                this.answerPart1 += element.answer;
              });
            });
          }
          if (this.part2 !== null) {
            this.isPart2 = true;
            this.examService.getPdfFiles(this.part2.pdfsrc).subscribe(res => {
              const src = URL.createObjectURL(res);
              this.part2pdfsrc = this.sanitizer.bypassSecurityTrustUrl(src);
            });
            this.examService.getMp3Files(this.part2.mp3src).subscribe(res => {
              const src = URL.createObjectURL(res);
              this.part2mp3src = this.sanitizer.bypassSecurityTrustUrl(src);
            });
            this.examService.getAnswerParts(this.part2.partID).subscribe(ans => {
              const answers: AnswerPart[] = ans;
              this.answerPart2 = '';
              answers.forEach(element => {
                this.answerPart2 += element.answer;
              });
            });
          }
          if (this.part3 !== null) {
            this.isPart3 = true;
            this.examService.getPdfFiles(this.part3.pdfsrc).subscribe(res => {
              const src = URL.createObjectURL(res);
              this.part3pdfsrc = this.sanitizer.bypassSecurityTrustUrl(src);
            });
            this.examService.getMp3Files(this.part3.mp3src).subscribe(res => {
              const src = URL.createObjectURL(res);
              this.part3mp3src = this.sanitizer.bypassSecurityTrustUrl(src);
            });
            this.examService.getAnswerParts(this.part3.partID).subscribe(ans => {
              const answers: AnswerPart[] = ans;
              this.answerPart3 = '';
              answers.forEach(element => {
                this.answerPart3 += element.answer;
              });
            });
          }
          if (this.part4 !== null) {
            this.isPart4 = true;
            this.examService.getPdfFiles(this.part4.pdfsrc).subscribe(res => {
              const src = URL.createObjectURL(res);
              this.part4pdfsrc = this.sanitizer.bypassSecurityTrustUrl(src);
            });
            this.examService.getMp3Files(this.part4.mp3src).subscribe(res => {
              const src = URL.createObjectURL(res);
              this.part4mp3src = this.sanitizer.bypassSecurityTrustUrl(src);
            });
            this.examService.getAnswerParts(this.part4.partID).subscribe(ans => {
              const answers: AnswerPart[] = ans;
              this.answerPart4 = '';
              answers.forEach(element => {
                this.answerPart4 += element.answer;
              });
            });
          }
        });

        result[1].forEach(ReadPart => {
          this.part5 = null;
          this.part6 = null;
          this.part7 = null;
          ReadPart.forEach(element => {
            if (element.partNo === 5) {
              this.part5 = element;
            } else if (element.partNo === 6) {
              this.part6 = element;
            } else if (element.partNo === 7) {
              this.part7 = element;
            }
          });
        }).then((r) => {
          if (this.part5 !== null) {
            this.isPart5 = true;
            this.examService.getPdfFiles(this.part5.pdfsrc).subscribe(res => {
              const src = URL.createObjectURL(res);
              this.part5pdfsrc = this.sanitizer.bypassSecurityTrustUrl(src);
            });
            this.examService.getAnswerParts(this.part5.partID).subscribe(ans => {
              const answers: AnswerPart[] = ans;
              this.answerPart5 = '';
              answers.forEach(element => {
                this.answerPart5 += element.answer;
              });
            });
          }
          if (this.part6 !== null) {
            this.examService.getPdfFiles(this.part6.pdfsrc).subscribe(res => {
              this.isPart6 = true;
              const src = URL.createObjectURL(res);
              this.part6pdfsrc = this.sanitizer.bypassSecurityTrustUrl(src);
            });
            this.examService.getAnswerParts(this.part6.partID).subscribe(ans => {
              const answers: AnswerPart[] = ans;
              this.answerPart6 = '';
              answers.forEach(element => {
                this.answerPart6 += element.answer;
              });
            });
          }
          if (this.part7 !== null) {
            this.examService.getPdfFiles(this.part7.pdfsrc).subscribe(res => {
              this.isPart7 = true;
              const src = URL.createObjectURL(res);
              this.part7pdfsrc = this.sanitizer.bypassSecurityTrustUrl(src);
            });
            this.examService.getAnswerParts(this.part7.partID).subscribe(ans => {
              const answers: AnswerPart[] = ans;
              this.answerPart7 = '';
              answers.forEach(element => {
                this.answerPart7 += element.answer;
              });
            });
          }
        });
      });
    });

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
        if (this.part1 === null) {
          // this part has not been initialized
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
            return;
          }

          // upload file and create part 1
          Promise.all([
            // upload pdf and mp3 file
            this.uploadfileService.pushFileToStorage(this.selectedFilesPart1[0]),
            this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart1[0])
          ]).then(result => {
            // create part object and set value
            const part1: any = {};
            part1.examID = this.exam.examID;
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
                this.part1 = part1;
                this.examService.getPdfFiles(part1.pdfsrc).subscribe(res => {
                  const src = URL.createObjectURL(res);
                  this.part1pdfsrc = this.sanitizer.bypassSecurityTrustUrl(src);
                });
                this.examService.getMp3Files(part1.pdfsrc).subscribe(res => {
                  const src = URL.createObjectURL(res);
                  this.part1mp3src = this.sanitizer.bypassSecurityTrustUrl(src);
                });

                this.isPart1 = true;
                this.selectedFilesPart1 = undefined;
                this.selectedMp3FilesPart1 = undefined;
                alert('Part 1 successfully created !!!');
              });
            });
          });
        } else {
          // check file type
          this.valid.pdfPart1 = true;
          this.message.pdfPart1 = '';
          if (this.selectedFilesPart1 !== undefined) {
            if (this.selectedFilesPart1.length > 0 && this.selectedFilesPart1[0].type !== 'application/pdf') {
              this.message.pdfPart1 = 'Only accept pdf file !!!';
              this.valid.pdfPart1 = false;
            }
          }

          this.valid.mp3Part1 = true;
          this.message.mp3Part1 = '';
          if (this.selectedMp3FilesPart1 !== undefined) {
            if (this.selectedMp3FilesPart1.length > 0 && this.selectedMp3FilesPart1[0].type !== 'audio/mp3') {
              this.message.mp3Part1 = 'Only accept mp3 file !!!';
              this.valid.mp3Part1 = false;
            }
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
            return;
          }

          let check = false;
          if (this.selectedFilesPart1 !== undefined) {
            if (this.selectedFilesPart1.length > 0) {
              check = true;
              this.uploadfileService.pushFileToStorage(this.selectedFilesPart1[0]).then((pdffile) => {
                this.part1.pdfsrc = pdffile;
                this.examService.editListeningPart(this.part1).subscribe(res => {
                  this.part1 = res;
                  this.examService.getPdfFiles(this.part1.pdfsrc).subscribe(res1 => {
                    const src = URL.createObjectURL(res1);
                    this.part1pdfsrc = this.sanitizer.bypassSecurityTrustUrl(src);
                    this.selectedFilesPart1 = undefined;
                  });
                });
              });
            }
          }
          if (this.selectedMp3FilesPart1 !== undefined) {
            if (this.selectedMp3FilesPart1.length > 0) {
              check = true;
              this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart1[0]).then((mp3file) => {
                this.part1.mp3src = mp3file;
                this.examService.editListeningPart(this.part1).subscribe(res => {
                  this.part1 = res;
                  this.examService.getPdfFiles(this.part1.mp3src).subscribe(res1 => {
                    const src = URL.createObjectURL(res1);
                    this.part1mp3src = this.sanitizer.bypassSecurityTrustUrl(src);
                    this.selectedMp3FilesPart1 = undefined;
                  });
                });
              });
            }
          }
          this.examService.getAnswerParts(this.part1.partID).subscribe(ans => {
            let checkAnswer = true;
            const answers: AnswerPart[] = ans;
            answers.forEach(element => {
              for (let i = 0; i < this.answerPart1.length; i++) {
                if (element.questionOrder === i + 1) {
                  if (element.answer !== this.answerPart1.charAt(i).toUpperCase()) {
                    element.answer = this.answerPart1.charAt(i).toUpperCase();
                    checkAnswer = false;
                  }
                }
              }
            });
            if (!checkAnswer) {
              this.examService.editAnswerPart(answers).subscribe(result => {
              });
            }
            if (!checkAnswer || check) {
              this.selectedFilesPart1 = undefined;
              this.selectedMp3FilesPart1 = undefined;
              alert('Part 1 successfully updated !!!');
            } else {
              alert('Please change info to update for Part 1 !!!');
            }
          });
        }

        break;

      case 2:
        if (this.part2 === null) {
          // this part has not been initialized
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
            return;
          }

          // upload file and create part 1
          Promise.all([
            // upload pdf and mp3 file
            this.uploadfileService.pushFileToStorage(this.selectedFilesPart2[0]),
            this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart2[0])
          ]).then(result => {
            // create part object and set value
            const part1: any = {};
            part1.examID = this.exam.examID;
            part1.partNo = 2;
            part1.pdfsrc = result[0];
            part1.mp3src = result[1];

            // add part in database
            this.addExamService.addListeningPart(part1).subscribe(listeningPart => {

              // create answert sheet for part
              const answers: AnswerPart[] = [];
              for (let i = 0; i < 30; i++) {
                const answer: AnswerPart = new AnswerPart;
                answer.partID = listeningPart.partID;
                answer.questionOrder = i + 11;
                answer.answer = this.answerPart2.charAt(i).toUpperCase();
                answers.push(answer);
              }
              this.addExamService.addAnswer(answers).subscribe(answerPart => {
                this.part2 = part1;
                this.examService.getPdfFiles(part1.pdfsrc).subscribe(res => {
                  const src = URL.createObjectURL(res);
                  this.part2pdfsrc = this.sanitizer.bypassSecurityTrustUrl(src);
                });
                this.examService.getMp3Files(part1.pdfsrc).subscribe(res => {
                  const src = URL.createObjectURL(res);
                  this.part2mp3src = this.sanitizer.bypassSecurityTrustUrl(src);
                });

                this.isPart2 = true;
                this.selectedFilesPart2 = undefined;
                this.selectedMp3FilesPart2 = undefined;
                alert('Part 2 successfully created !!!');
              });
            });
          });
        } else {
          // check file type
          this.valid.pdfPart2 = true;
          this.message.pdfPart2 = '';
          if (this.selectedFilesPart2 !== undefined) {
            if (this.selectedFilesPart2.length > 0 && this.selectedFilesPart2[0].type !== 'application/pdf') {
              this.message.pdfPart2 = 'Only accept pdf file !!!';
              this.valid.pdfPart2 = false;
            }
          }

          this.valid.mp3Part2 = true;
          this.message.mp3Part2 = '';
          if (this.selectedMp3FilesPart2 !== undefined) {
            if (this.selectedMp3FilesPart2.length > 0 && this.selectedMp3FilesPart2[0].type !== 'audio/mp3') {
              this.message.mp3Part2 = 'Only accept mp3 file !!!';
              this.valid.mp3Part2 = false;
            }
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
            return;
          }

          let check = false;
          if (this.selectedFilesPart2 !== undefined) {
            if (this.selectedFilesPart2.length > 0) {
              check = true;
              this.uploadfileService.pushFileToStorage(this.selectedFilesPart2[0]).then((pdffile) => {
                this.part2.pdfsrc = pdffile;
                this.examService.editListeningPart(this.part2).subscribe(res => {
                  this.part2 = res;
                  this.examService.getPdfFiles(this.part2.pdfsrc).subscribe(res1 => {
                    const src = URL.createObjectURL(res1);
                    this.part2pdfsrc = this.sanitizer.bypassSecurityTrustUrl(src);
                    this.selectedFilesPart2 = undefined;
                  });
                });
              });
            }
          }
          if (this.selectedMp3FilesPart2 !== undefined) {
            if (this.selectedMp3FilesPart2.length > 0) {
              check = true;
              this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart2[0]).then((mp3file) => {
                this.part2.mp3src = mp3file;
                this.examService.editListeningPart(this.part2).subscribe(res => {
                  this.part2 = res;
                  this.examService.getPdfFiles(this.part2.mp3src).subscribe(res1 => {
                    const src = URL.createObjectURL(res1);
                    this.part2mp3src = this.sanitizer.bypassSecurityTrustUrl(src);
                    this.selectedMp3FilesPart2 = undefined;
                  });
                });
              });
            }
          }
          this.examService.getAnswerParts(this.part2.partID).subscribe(ans => {
            let checkAnswer = true;
            const answers: AnswerPart[] = ans;
            answers.forEach(element => {
              for (let i = 0; i < this.answerPart2.length; i++) {
                if (element.questionOrder === i + 11) {
                  if (element.answer !== this.answerPart2.charAt(i).toUpperCase()) {
                    element.answer = this.answerPart2.charAt(i).toUpperCase();
                    checkAnswer = false;
                  }
                }
              }
            });
            if (!checkAnswer) {
              this.examService.editAnswerPart(answers).subscribe(result => {
              });
            }
            if (!checkAnswer || check) {
              this.selectedFilesPart2 = undefined;
              this.selectedMp3FilesPart2 = undefined;
              alert('Part 2 successfully updated !!!');
            } else {
              alert('Please change info to update for Part 2 !!!');
            }
          });
        }

        break;

      case 3:
        if (this.part3 === null) {
          // this part has not been initialized
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
            return;
          }

          // upload file and create part 1
          Promise.all([
            // upload pdf and mp3 file
            this.uploadfileService.pushFileToStorage(this.selectedFilesPart3[0]),
            this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart3[0])
          ]).then(result => {
            // create part object and set value
            const part1: any = {};
            part1.examID = this.exam.examID;
            part1.partNo = 3;
            part1.pdfsrc = result[0];
            part1.mp3src = result[1];

            // add part in database
            this.addExamService.addListeningPart(part1).subscribe(listeningPart => {

              // create answert sheet for part
              const answers: AnswerPart[] = [];
              for (let i = 0; i < 30; i++) {
                const answer: AnswerPart = new AnswerPart;
                answer.partID = listeningPart.partID;
                answer.questionOrder = i + 41;
                answer.answer = this.answerPart3.charAt(i).toUpperCase();
                answers.push(answer);
              }
              this.addExamService.addAnswer(answers).subscribe(answerPart => {
                this.part3 = part1;
                this.examService.getPdfFiles(part1.pdfsrc).subscribe(res => {
                  const src = URL.createObjectURL(res);
                  this.part3pdfsrc = this.sanitizer.bypassSecurityTrustUrl(src);
                });
                this.examService.getMp3Files(part1.pdfsrc).subscribe(res => {
                  const src = URL.createObjectURL(res);
                  this.part3mp3src = this.sanitizer.bypassSecurityTrustUrl(src);
                });

                this.isPart3 = true;
                this.selectedFilesPart3 = undefined;
                this.selectedMp3FilesPart3 = undefined;
                alert('Part 3 successfully created !!!');
              });
            });
          });
        } else {
          // check file type
          this.valid.pdfPart3 = true;
          this.message.pdfPart3 = '';
          if (this.selectedFilesPart3 !== undefined) {
            if (this.selectedFilesPart3.length > 0 && this.selectedFilesPart3[0].type !== 'application/pdf') {
              this.message.pdfPart3 = 'Only accept pdf file !!!';
              this.valid.pdfPart3 = false;
            }
          }

          this.valid.mp3Part3 = true;
          this.message.mp3Part3 = '';
          if (this.selectedMp3FilesPart3 !== undefined) {
            if (this.selectedMp3FilesPart3.length > 0 && this.selectedMp3FilesPart3[0].type !== 'audio/mp3') {
              this.message.mp3Part3 = 'Only accept mp3 file !!!';
              this.valid.mp3Part3 = false;
            }
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
            return;
          }

          let check = false;
          if (this.selectedFilesPart3 !== undefined) {
            if (this.selectedFilesPart3.length > 0) {
              check = true;
              this.uploadfileService.pushFileToStorage(this.selectedFilesPart3[0]).then((pdffile) => {
                this.part3.pdfsrc = pdffile;
                this.examService.editListeningPart(this.part3).subscribe(res => {
                  this.part3 = res;
                  this.examService.getPdfFiles(this.part3.pdfsrc).subscribe(res1 => {
                    const src = URL.createObjectURL(res1);
                    this.part3pdfsrc = this.sanitizer.bypassSecurityTrustUrl(src);
                    this.selectedFilesPart3 = undefined;
                  });
                });
              });
            }
          }
          if (this.selectedMp3FilesPart3 !== undefined) {
            if (this.selectedMp3FilesPart3.length > 0) {
              check = true;
              this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart3[0]).then((mp3file) => {
                this.part3.mp3src = mp3file;
                this.examService.editListeningPart(this.part3).subscribe(res => {
                  this.part3 = res;
                  this.examService.getPdfFiles(this.part3.mp3src).subscribe(res1 => {
                    const src = URL.createObjectURL(res1);
                    this.part3mp3src = this.sanitizer.bypassSecurityTrustUrl(src);
                    this.selectedMp3FilesPart3 = undefined;
                  });
                });
              });
            }
          }
          this.examService.getAnswerParts(this.part3.partID).subscribe(ans => {
            let checkAnswer = true;
            const answers: AnswerPart[] = ans;
            answers.forEach(element => {
              for (let i = 0; i < this.answerPart3.length; i++) {
                if (element.questionOrder === i + 41) {
                  if (element.answer !== this.answerPart3.charAt(i).toUpperCase()) {
                    element.answer = this.answerPart3.charAt(i).toUpperCase();
                    checkAnswer = false;
                  }
                }
              }
            });
            if (!checkAnswer) {
              this.examService.editAnswerPart(answers).subscribe(result => {
              });
            }
            if (!checkAnswer || check) {
              this.selectedFilesPart3 = undefined;
              this.selectedMp3FilesPart3 = undefined;
              alert('Part 3 successfully updated !!!');
            } else {
              alert('Please change info to update for Part 3 !!!');
            }
          });
        }

        break;

      case 4:
        if (this.part4 === null) {
          // this part has not been initialized
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
            return;
          }

          // upload file and create part 1
          Promise.all([
            // upload pdf and mp3 file
            this.uploadfileService.pushFileToStorage(this.selectedFilesPart4[0]),
            this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart4[0])
          ]).then(result => {
            // create part object and set value
            const part1: any = {};
            part1.examID = this.exam.examID;
            part1.partNo = 4;
            part1.pdfsrc = result[0];
            part1.mp3src = result[1];

            // add part in database
            this.addExamService.addListeningPart(part1).subscribe(listeningPart => {

              // create answert sheet for part
              const answers: AnswerPart[] = [];
              for (let i = 0; i < 30; i++) {
                const answer: AnswerPart = new AnswerPart;
                answer.partID = listeningPart.partID;
                answer.questionOrder = i + 71;
                answer.answer = this.answerPart4.charAt(i).toUpperCase();
                answers.push(answer);
              }
              this.addExamService.addAnswer(answers).subscribe(answerPart => {
                this.part4 = part1;
                this.examService.getPdfFiles(part1.pdfsrc).subscribe(res => {
                  const src = URL.createObjectURL(res);
                  this.part4pdfsrc = this.sanitizer.bypassSecurityTrustUrl(src);
                });
                this.examService.getMp3Files(part1.pdfsrc).subscribe(res => {
                  const src = URL.createObjectURL(res);
                  this.part4mp3src = this.sanitizer.bypassSecurityTrustUrl(src);
                });

                this.isPart4 = true;
                this.selectedFilesPart4 = undefined;
                this.selectedMp3FilesPart4 = undefined;
                alert('Part 4 successfully created !!!');
              });
            });
          });
        } else {
          // check file type
          this.valid.pdfPart4 = true;
          this.message.pdfPart4 = '';
          if (this.selectedFilesPart4 !== undefined) {
            if (this.selectedFilesPart4.length > 0 && this.selectedFilesPart4[0].type !== 'application/pdf') {
              this.message.pdfPart4 = 'Only accept pdf file !!!';
              this.valid.pdfPart4 = false;
            }
          }

          this.valid.mp3Part4 = true;
          this.message.mp3Part4 = '';
          if (this.selectedMp3FilesPart4 !== undefined) {
            if (this.selectedMp3FilesPart4.length > 0 && this.selectedMp3FilesPart4[0].type !== 'audio/mp3') {
              this.message.mp3Part4 = 'Only accept mp3 file !!!';
              this.valid.mp3Part4 = false;
            }
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
            return;
          }

          let check = false;
          if (this.selectedFilesPart4 !== undefined) {
            if (this.selectedFilesPart4.length > 0) {
              check = true;
              this.uploadfileService.pushFileToStorage(this.selectedFilesPart4[0]).then((pdffile) => {
                this.part4.pdfsrc = pdffile;
                this.examService.editListeningPart(this.part4).subscribe(res => {
                  this.part4 = res;
                  this.examService.getPdfFiles(this.part4.pdfsrc).subscribe(res1 => {
                    const src = URL.createObjectURL(res1);
                    this.part4pdfsrc = this.sanitizer.bypassSecurityTrustUrl(src);
                    this.selectedFilesPart4 = undefined;
                  });
                });
              });
            }
          }
          if (this.selectedMp3FilesPart4 !== undefined) {
            if (this.selectedMp3FilesPart4.length > 0) {
              check = true;
              this.uploadfileService.pushFileToStorage(this.selectedMp3FilesPart4[0]).then((mp3file) => {
                this.part4.mp3src = mp3file;
                this.examService.editListeningPart(this.part4).subscribe(res => {
                  this.part4 = res;
                  this.examService.getPdfFiles(this.part4.mp3src).subscribe(res1 => {
                    const src = URL.createObjectURL(res1);
                    this.part4mp3src = this.sanitizer.bypassSecurityTrustUrl(src);
                    this.selectedMp3FilesPart4 = undefined;
                  });
                });
              });
            }
          }
          this.examService.getAnswerParts(this.part4.partID).subscribe(ans => {
            let checkAnswer = true;
            const answers: AnswerPart[] = ans;
            answers.forEach(element => {
              for (let i = 0; i < this.answerPart4.length; i++) {
                if (element.questionOrder === i + 71) {
                  if (element.answer !== this.answerPart4.charAt(i).toUpperCase()) {
                    element.answer = this.answerPart4.charAt(i).toUpperCase();
                    checkAnswer = false;
                  }
                }
              }
            });
            if (!checkAnswer) {
              this.examService.editAnswerPart(answers).subscribe(result => {
              });
            }
            if (!checkAnswer || check) {
              this.selectedFilesPart4 = undefined;
              this.selectedMp3FilesPart4 = undefined;
              alert('Part 4 successfully updated !!!');
            } else {
              alert('Please change info to update for Part 4 !!!');
            }
          });
        }

        break;

      case 5:
        if (this.part5 === null) {
          // this part has not been initialized
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
            return;
          }

          // upload file and create part 1
          Promise.all([
            // upload pdf and mp3 file
            this.uploadfileService.pushFileToStorage(this.selectedFilesPart5[0])
          ]).then(result => {
            // create part object and set value
            const part1: any = {};
            part1.examID = this.exam.examID;
            part1.partNo = 5;
            part1.pdfsrc = result[0];

            // add part in database
            this.addExamService.addReadingPart(part1).subscribe(readingPart => {

              // create answert sheet for part
              const answers: AnswerPart[] = [];
              for (let i = 0; i < 40; i++) {
                const answer: AnswerPart = new AnswerPart;
                answer.partID = readingPart.partID;
                answer.questionOrder = i + 101;
                answer.answer = this.answerPart5.charAt(i).toUpperCase();
                answers.push(answer);
              }
              this.addExamService.addAnswer(answers).subscribe(answerPart => {
                this.part5 = part1;
                this.examService.getPdfFiles(part1.pdfsrc).subscribe(res => {
                  const src = URL.createObjectURL(res);
                  this.part5pdfsrc = this.sanitizer.bypassSecurityTrustUrl(src);
                });

                this.isPart5 = true;
                this.selectedFilesPart5 = undefined;
                alert('Part 5 successfully created !!!');
              });
            });
          });
        } else {
          // check file type
          this.valid.pdfPart5 = true;
          this.message.pdfPart5 = '';
          if (this.selectedFilesPart5 !== undefined) {
            if (this.selectedFilesPart5.length > 0 && this.selectedFilesPart5[0].type !== 'application/pdf') {
              this.message.pdfPart5 = 'Only accept pdf file !!!';
              this.valid.pdfPart5 = false;
            }
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
            return;
          }

          let check = false;
          if (this.selectedFilesPart5 !== undefined) {
            if (this.selectedFilesPart5.length > 0) {
              check = true;
              this.uploadfileService.pushFileToStorage(this.selectedFilesPart5[0]).then((pdffile) => {
                this.part5.pdfsrc = pdffile;
                this.examService.editReadingPart(this.part5).subscribe(res => {
                  this.part5 = res;
                  this.examService.getPdfFiles(this.part5.pdfsrc).subscribe(res1 => {
                    const src = URL.createObjectURL(res1);
                    this.part5pdfsrc = this.sanitizer.bypassSecurityTrustUrl(src);
                    this.selectedFilesPart5 = undefined;
                  });
                });
              });
            }
          }
          this.examService.getAnswerParts(this.part5.partID).subscribe(ans => {
            let checkAnswer = true;
            const answers: AnswerPart[] = ans;
            answers.forEach(element => {
              for (let i = 0; i < this.answerPart5.length; i++) {
                if (element.questionOrder === i + 101) {
                  if (element.answer !== this.answerPart5.charAt(i).toUpperCase()) {
                    element.answer = this.answerPart5.charAt(i).toUpperCase();
                    checkAnswer = false;
                  }
                }
              }
            });
            if (!checkAnswer) {
              this.examService.editAnswerPart(answers).subscribe(result => {
              });
            }
            if (!checkAnswer || check) {
              this.selectedFilesPart5 = undefined;
              alert('Part 5 successfully updated !!!');
            } else {
              alert('Please change info to update for Part 5 !!!');
            }
          });
        }

        break;

      case 6:
        if (this.part6 === null) {
          // this part has not been initialized
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
            return;
          }

          // upload file and create part 1
          Promise.all([
            // upload pdf and mp3 file
            this.uploadfileService.pushFileToStorage(this.selectedFilesPart6[0])
          ]).then(result => {
            // create part object and set value
            const part1: any = {};
            part1.examID = this.exam.examID;
            part1.partNo = 6;
            part1.pdfsrc = result[0];

            // add part in database
            this.addExamService.addReadingPart(part1).subscribe(readingPart => {

              // create answert sheet for part
              const answers: AnswerPart[] = [];
              for (let i = 0; i < 12; i++) {
                const answer: AnswerPart = new AnswerPart;
                answer.partID = readingPart.partID;
                answer.questionOrder = i + 141;
                answer.answer = this.answerPart6.charAt(i).toUpperCase();
                answers.push(answer);
              }
              this.addExamService.addAnswer(answers).subscribe(answerPart => {
                this.part6 = part1;
                this.examService.getPdfFiles(part1.pdfsrc).subscribe(res => {
                  const src = URL.createObjectURL(res);
                  this.part6pdfsrc = this.sanitizer.bypassSecurityTrustUrl(src);
                });

                this.isPart6 = true;
                this.selectedFilesPart6 = undefined;
                alert('Part 6 successfully created !!!');
              });
            });
          });
        } else {
          // check file type
          this.valid.pdfPart6 = true;
          this.message.pdfPart6 = '';
          if (this.selectedFilesPart6 !== undefined) {
            if (this.selectedFilesPart6.length > 0 && this.selectedFilesPart6[0].type !== 'application/pdf') {
              this.message.pdfPart6 = 'Only accept pdf file !!!';
              this.valid.pdfPart6 = false;
            }
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
            return;
          }

          let check = false;
          if (this.selectedFilesPart6 !== undefined) {
            if (this.selectedFilesPart6.length > 0) {
              check = true;
              this.uploadfileService.pushFileToStorage(this.selectedFilesPart6[0]).then((pdffile) => {
                this.part6.pdfsrc = pdffile;
                this.examService.editReadingPart(this.part6).subscribe(res => {
                  this.part6 = res;
                  this.examService.getPdfFiles(this.part6.pdfsrc).subscribe(res1 => {
                    const src = URL.createObjectURL(res1);
                    this.part6pdfsrc = this.sanitizer.bypassSecurityTrustUrl(src);
                    this.selectedFilesPart6 = undefined;
                  });
                });
              });
            }
          }
          this.examService.getAnswerParts(this.part6.partID).subscribe(ans => {
            let checkAnswer = true;
            const answers: AnswerPart[] = ans;
            answers.forEach(element => {
              for (let i = 0; i < this.answerPart6.length; i++) {
                if (element.questionOrder === i + 101) {
                  if (element.answer !== this.answerPart6.charAt(i).toUpperCase()) {
                    element.answer = this.answerPart6.charAt(i).toUpperCase();
                    checkAnswer = false;
                  }
                }
              }
            });
            if (!checkAnswer) {
              this.examService.editAnswerPart(answers).subscribe(result => {
              });
            }
            if (!checkAnswer || check) {
              this.selectedFilesPart6 = undefined;
              alert('Part 6 successfully updated !!!');
            } else {
              alert('Please change info to update for Part 6 !!!');
            }
          });
        }

        break;

      case 7:
        if (this.part7 === null) {
          // this part has not been initialized
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
            return;
          }

          // upload file and create part 1
          Promise.all([
            // upload pdf and mp3 file
            this.uploadfileService.pushFileToStorage(this.selectedFilesPart7[0])
          ]).then(result => {
            // create part object and set value
            const part1: any = {};
            part1.examID = this.exam.examID;
            part1.partNo = 7;
            part1.pdfsrc = result[0];

            // add part in database
            this.addExamService.addReadingPart(part1).subscribe(readingPart => {

              // create answert sheet for part
              const answers: AnswerPart[] = [];
              for (let i = 0; i < 48; i++) {
                const answer: AnswerPart = new AnswerPart;
                answer.partID = readingPart.partID;
                answer.questionOrder = i + 153;
                answer.answer = this.answerPart7.charAt(i).toUpperCase();
                answers.push(answer);
              }
              this.addExamService.addAnswer(answers).subscribe(answerPart => {
                this.part7 = part1;
                this.examService.getPdfFiles(part1.pdfsrc).subscribe(res => {
                  const src = URL.createObjectURL(res);
                  this.part7pdfsrc = this.sanitizer.bypassSecurityTrustUrl(src);
                });

                this.isPart7 = true;
                this.selectedFilesPart7 = undefined;
                alert('Part 7 successfully created !!!');
              });
            });
          });
        } else {
          // check file type
          this.valid.pdfPart7 = true;
          this.message.pdfPart7 = '';
          if (this.selectedFilesPart7 !== undefined) {
            if (this.selectedFilesPart7.length > 0 && this.selectedFilesPart7[0].type !== 'application/pdf') {
              this.message.pdfPart7 = 'Only accept pdf file !!!';
              this.valid.pdfPart7 = false;
            }
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
            return;
          }

          let check = false;
          if (this.selectedFilesPart7 !== undefined) {
            if (this.selectedFilesPart7.length > 0) {
              check = true;
              this.uploadfileService.pushFileToStorage(this.selectedFilesPart7[0]).then((pdffile) => {
                this.part7.pdfsrc = pdffile;
                this.examService.editReadingPart(this.part7).subscribe(res => {
                  this.part7 = res;
                  this.examService.getPdfFiles(this.part7.pdfsrc).subscribe(res1 => {
                    const src = URL.createObjectURL(res1);
                    this.part7pdfsrc = this.sanitizer.bypassSecurityTrustUrl(src);
                    this.selectedFilesPart7 = undefined;
                  });
                });
              });
            }
          }
          this.examService.getAnswerParts(this.part7.partID).subscribe(ans => {
            let checkAnswer = true;
            const answers: AnswerPart[] = ans;
            answers.forEach(element => {
              for (let i = 0; i < this.answerPart7.length; i++) {
                if (element.questionOrder === i + 153) {
                  if (element.answer !== this.answerPart7.charAt(i).toUpperCase()) {
                    element.answer = this.answerPart7.charAt(i).toUpperCase();
                    checkAnswer = false;
                  }
                }
              }
            });
            if (!checkAnswer) {
              this.examService.editAnswerPart(answers).subscribe(result => {
              });
            }
            if (!checkAnswer || check) {
              this.selectedFilesPart7 = undefined;
              alert('Part 7 successfully updated !!!');
            } else {
              alert('Please change info to update for Part 7 !!!');
            }
          });
        }

        break;

      default: return;
    }
  }

  checkTime(exam: any) {
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
            alert('The exam that is being used for the session has started and you can not edit it !!!');
            this.router.navigate(['/admin/exam']);
          }
        });
      }
    });
  }
}
