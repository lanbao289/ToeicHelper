import { ExamService } from './../../services/exam.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Exam } from '../../model/exam';
declare var $: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {

  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  loading = false;
  isSubmit = false;
  nextbtn = true;
  prebtn = false;
  numbers: number[];
  numbers1: number[];
  numbers2: number[];
  numbers3: number[];
  numbers4: number[];
  numbers5: number[];
  numbers6: number[];
  numbers7: number[];
  count = 1;

  part1duration: any;
  part2duration: any;
  part3duration: any;
  part4duration: any;
  audio1 = new Audio();
  audio2 = new Audio();
  audio3 = new Audio();
  audio4 = new Audio();

  exam: Exam;
  part1: any = {};
  part2: any = {};
  part3: any = {};
  part4: any = {};
  part5: any = {};
  part6: any = {};
  part7: any = {};

  answers1 = [];
  answers2 = [];
  answers3 = [];
  answers4 = [];
  answers5 = [];
  answers6 = [];
  answers7 = [];

  testResult: any = {};
  timeCountdown: string;
  interval: any;

  constructor(
    private examService: ExamService
  ) { }

  ngOnInit() {
    this.numbers = Array(200).fill(1).map((x, i) => i + 1);

    // Set answer for part 1
    this.numbers1 = this.numbers.slice(0, 10);
    for (let i = 0; i < this.numbers1.length; i++) {
      const ans: any = {};
      ans.name = this.numbers1[i];
      ans.value = '';
      this.answers1.push(ans);
    }

    // Set answer for part 2
    this.numbers2 = this.numbers.slice(10, 40);
    for (let i = 0; i < this.numbers2.length; i++) {
      const ans: any = {};
      ans.name = this.numbers2[i];
      ans.value = '';
      this.answers2.push(ans);
    }

    // Set answer for part 3
    this.numbers3 = this.numbers.slice(40, 70);
    for (let i = 0; i < this.numbers3.length; i++) {
      const ans: any = {};
      ans.name = this.numbers3[i];
      ans.value = '';
      this.answers3.push(ans);
    }

    // Set answer for part 4
    this.numbers4 = this.numbers.slice(70, 100);
    for (let i = 0; i < this.numbers4.length; i++) {
      const ans: any = {};
      ans.name = this.numbers4[i];
      ans.value = '';
      this.answers4.push(ans);
    }

    // Set answer for part 5
    this.numbers5 = this.numbers.slice(100, 140);
    for (let i = 0; i < this.numbers5.length; i++) {
      const ans: any = {};
      ans.name = this.numbers5[i];
      ans.value = '';
      this.answers5.push(ans);
    }

    // Set answer for part 6
    this.numbers6 = this.numbers.slice(140, 152);
    for (let i = 0; i < this.numbers6.length; i++) {
      const ans: any = {};
      ans.name = this.numbers6[i];
      ans.value = '';
      this.answers6.push(ans);
    }

    // Set answer for part 7
    this.numbers7 = this.numbers.slice(152, 200);
    for (let i = 0; i < this.numbers7.length; i++) {
      const ans: any = {};
      ans.name = this.numbers7[i];
      ans.value = '';
      this.answers7.push(ans);
    }
  }

  ngOnDestroy() {
    clearInterval(this.interval);
    this.audio1.pause();
    this.audio2.pause();
    this.audio3.pause();
    this.audio4.pause();
  }

  startTime() {
    let timer2 = '120:00';
    this.interval = setInterval(() => {

      const timer = timer2.split(':');
      // by parsing integer, I avoid all extra string processing
      let minutes = parseInt(timer[0], 10);
      let seconds = parseInt(timer[1], 10);
      --seconds;
      minutes = (seconds < 0) ? --minutes : minutes;
      seconds = (seconds < 0) ? 59 : seconds;
      seconds = (seconds < 10) ? 0 + seconds : seconds;
      if (minutes <= 0 && seconds <= 0) {
        clearInterval(this.interval);
        this.onFormSubmit();
      }
      // minutes = (minutes < 10) ?  minutes : minutes;
      let secondString = '';
      secondString = (seconds < 0) ? '59' : seconds.toString();
      secondString = (seconds < 10) ? '0' + seconds : seconds.toString();
      this.timeCountdown = minutes + ':' + secondString;
      timer2 = minutes + ':' + seconds;
    }, 1000);
  }

  start() {
    if (confirm('Do you want start full test TOEIC training?')) {
      this.starttest();
    }
  }

  starttest() {
    // get exam random
    this.examService.getExamsForTraining().subscribe(exams => {
      if (exams === null || exams.length <= 0) {
        alert('There are no new exams for this test !!!');
        return false;
      }
      this.exam = exams[Math.floor(Math.random() * exams.length)];
      Promise.all([
        this.examService.getListeningParts(this.exam.examID),
        this.examService.getReadingParts(this.exam.examID)
      ])
        .then(listPart => {
          // tslint:disable-next-line:no-shadowed-variable
          listPart[0].forEach(element => {
            if (element.length < 4) {
              this.starttest();
            } else {
              element.forEach(listeningPart => {
                if (listeningPart.partNo === 1) {
                  this.part1 = listeningPart;
                  this.examService.getPdfFiles(this.part1.pdfsrc).subscribe(res => {
                    this.part1.pdfsrc = URL.createObjectURL(res);
                  });
                  this.examService.getMp3Files(this.part1.mp3src).subscribe(res => {
                    this.audio1.src = URL.createObjectURL(res);
                    this.audio1.load();
                    this.audio1.play();
                  });
                }
                if (listeningPart.partNo === 2) {
                  this.part2 = listeningPart;
                  this.examService.getPdfFiles(this.part2.pdfsrc).subscribe(res => {
                    this.part2.pdfsrc = URL.createObjectURL(res);
                  });
                  this.examService.getMp3Files(this.part2.mp3src).subscribe(res => {
                    this.audio2.src = URL.createObjectURL(res);
                  });
                }
                if (listeningPart.partNo === 3) {
                  this.part3 = listeningPart;
                  this.examService.getPdfFiles(this.part3.pdfsrc).subscribe(res => {
                    this.part3.pdfsrc = URL.createObjectURL(res);
                  });
                  this.examService.getMp3Files(this.part3.mp3src).subscribe(res => {
                    this.audio3.src = URL.createObjectURL(res);
                  });
                }
                if (listeningPart.partNo === 4) {
                  this.part4 = listeningPart;
                  this.examService.getPdfFiles(this.part4.pdfsrc).subscribe(res => {
                    this.part4.pdfsrc = URL.createObjectURL(res);
                  });
                  this.examService.getMp3Files(this.part4.mp3src).subscribe(res => {
                    this.audio4.src = URL.createObjectURL(res);
                  });
                }
              });
            }
          }).then((result) => {
            listPart[1].forEach(element => {
              if (element.length < 3) {
                this.starttest();
              } else {
                element.forEach(readingPart => {
                  if (readingPart.partNo === 5) {
                    this.part5 = readingPart;
                    this.examService.getPdfFiles(this.part5.pdfsrc).subscribe(res => {
                      this.part5.pdfsrc = URL.createObjectURL(res);
                    });
                  }
                  if (readingPart.partNo === 6) {
                    this.part6 = readingPart;
                    this.examService.getPdfFiles(this.part6.pdfsrc).subscribe(res => {
                      this.part6.pdfsrc = URL.createObjectURL(res);
                    });
                  }
                  if (readingPart.partNo === 7) {
                    this.part7 = readingPart;
                    this.examService.getPdfFiles(this.part7.pdfsrc).subscribe(res => {
                      this.part7.pdfsrc = URL.createObjectURL(res);
                    });
                  }
                });
              }
              clearInterval(this.interval);
              this.loading = true;
              this.startTime();
            });
          });
        });
    });
    // end get exam
  }

  nextPart() {
    this.nextbtn = true;
    this.prebtn = true;
    this.count += 1;
    if (this.count === 7) {
      this.nextbtn = false;
    }
    if (this.count < 5) {
      switch (this.count) {
        case 2:
          if (!this.audio2.ended) {
            this.audio2.play();
          }
          this.audio1.pause();
          break;
        case 3:
          if (!this.audio3.ended) {
            this.audio3.play();
          }
          this.audio2.pause();
          break;
        case 4:
          if (!this.audio4.ended) {
            this.audio4.play();
          }
          this.audio3.pause();
          break;

        default:
          break;
      }
    } else {
      this.audio4.pause();
    }
  }

  prePart() {
    this.nextbtn = true;
    this.prebtn = true;
    this.count -= 1;
    if (this.count === 1) {
      this.prebtn = false;
    }
    switch (this.count) {
      case 1:
        if (!this.audio1.ended) {
          this.audio1.play();
        }
        this.audio2.pause();
        break;
      case 2:
        if (!this.audio2.ended) {
          this.audio2.play();
        }
        this.audio3.pause();
        break;
      case 3:
        if (!this.audio3.ended) {
          this.audio3.play();
        }
        this.audio4.pause();
        break;
      case 4:
        if (!this.audio4.ended) {
          this.audio4.play();
        }
        break;

      default:
        break;
    }
  }

  onFormSubmit() {
    this.audio1.pause();
    this.audio2.pause();
    this.audio3.pause();
    this.audio4.pause();
    clearInterval(this.interval);
    Promise.all([
      this.examService.getAnswerParts(this.part1.partID),
      this.examService.getAnswerParts(this.part2.partID),
      this.examService.getAnswerParts(this.part3.partID),
      this.examService.getAnswerParts(this.part4.partID),
      this.examService.getAnswerParts(this.part5.partID),
      this.examService.getAnswerParts(this.part6.partID),
      this.examService.getAnswerParts(this.part7.partID)
    ]).then(result => {
      let total = 0;
      let readTotal = 0;

      // tslint:disable-next-line:no-shadowed-variable
      result[0].forEach(element => {
        element.forEach(ans => {
          this.answers1.forEach(ans1 => {
            if (ans.questionOrder === ans1.name) {
              if (ans.answer === ans1.value) {
                total += 1;
              }
            }
          });
        });
        return total;
      }).then(res => {
        result[1].forEach(e => {
          e.forEach(ans => {
            this.answers2.forEach(ans1 => {
              if (ans.questionOrder === ans1.name) {
                if (ans.answer === ans1.value) {
                  total += 1;
                }
              }
            });
          });
          return total;
        }).then(res1 => {
          result[2].forEach(e => {
            e.forEach(ans => {
              this.answers3.forEach(ans1 => {
                if (ans.questionOrder === ans1.name) {
                  if (ans.answer === ans1.value) {
                    total += 1;
                  }
                }
              });
            });
            return total;
          }).then(res2 => {
            result[3].forEach(e => {
              e.forEach(ans => {
                this.answers4.forEach(ans1 => {
                  if (ans.questionOrder === ans1.name) {
                    if (ans.answer === ans1.value) {
                      total += 1;
                    }
                  }
                });
              });
              return total;
            }).then(res3 => {
              result[4].forEach(e => {
                e.forEach(ans => {
                  this.answers5.forEach(ans1 => {
                    if (ans.questionOrder === ans1.name) {
                      if (ans.answer === ans1.value) {
                        readTotal += 1;
                      }
                    }
                  });
                });
                return readTotal;
              }).then(res4 => {
                result[5].forEach(e => {
                  e.forEach(ans => {
                    this.answers6.forEach(ans1 => {
                      if (ans.questionOrder === ans1.name) {
                        if (ans.answer === ans1.value) {
                          readTotal += 1;
                        }
                      }
                    });
                  });
                  return readTotal;
                }).then(res5 => {
                  result[6].forEach(e => {
                    e.forEach(ans => {
                      this.answers7.forEach(ans1 => {
                        if (ans.questionOrder === ans1.name) {
                          if (ans.answer === ans1.value) {
                            readTotal += 1;
                          }
                        }
                      });
                    });
                    this.testResult.username = this.currentUser.username;
                    this.testResult.examID = this.exam.examID;
                    this.testResult.dateTest = new Date();
                    this.testResult.readCorrect = readTotal;
                    this.testResult.listenCorrect = total;
                    Promise.all([
                      this.examService.getReadingPoint(readTotal),
                      this.examService.getListeningPoint(total)
                    ]).then((point) => {
                      let readingPoint = 0;
                      point[0].forEach(readPoint => {
                        this.testResult.readPoint = readPoint;
                        readingPoint = readPoint;
                        return readingPoint;
                      }).then((r) => {
                        point[1].forEach(listenPoint => {
                          this.testResult.listenPoint = listenPoint;
                          this.testResult.testScore = readingPoint + listenPoint;
                          // Add test result
                          this.examService.addTestResult(this.testResult).subscribe(rest => {
                          });
                          this.isSubmit = true;
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  }
}
