import { TestroomService } from './../../services/testroom.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Exam } from '../../model/exam';
import { ExamService } from '../../services/exam.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit, OnDestroy {

  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  isChoosePart = false;
  isCountdown = false;
  isStart = false;
  isExpired = false;
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
  selectCnt = '7';

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
  timeCountdownStart: string;
  interval: any;
  interval1: any;
  roomID: string;
  testRoom: any = {};
  getout: any;

  constructor(
    private route: ActivatedRoute,
    private examService: ExamService,
    private testroomService: TestroomService,
    private routers: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    const context = this;
    this.getout = function (e) {
      context.testroomService.checkoutUser(context.currentUser.username, context.testRoom.roomID).subscribe(r => {
      });
      e.preventDefault();
    }
    window.addEventListener('beforeunload', this.getout);
    const id = this.route.snapshot.paramMap.get('id');
    this.roomID = id;

    this.testroomService.getTestRoomByRoomID(this.roomID).subscribe(result => {
      this.testRoom = result;
      if (this.testRoom.roomID === null) {
        this.routers.navigate(['/home']);
      }
      let check = false;
      if (this.testRoom.userJoinedList !== null) {
        this.testRoom.userRegisteredList.forEach(element => {
          if (element === this.currentUser.username) {
            check = true;
          }
        });
      } else {
        check = false;
      }
      if (!check) {
        this.routers.navigate(['/home']);
      }
      let check1 = false;
      if (this.testRoom.userJoinedList !== null) {
        this.testRoom.userJoinedList.forEach(element => {
          if (element === this.currentUser.username) {
            check1 = true;
          }
        });
      } else {
        check1 = false;
      }
      if (check1) {
        alert('You completed the test at this test session, Please join the another test session.');
        this.routers.navigate(['/home']);
      } else {
        this.checkTime();
        const userTestSession = JSON.parse(localStorage.getItem('userTestSession'));
        if (userTestSession !== null) {
          if (userTestSession.username === this.currentUser.username && userTestSession.roomID === this.roomID) {
            this.answers1 = userTestSession.answers1;
            this.answers2 = userTestSession.answers2;
            this.answers3 = userTestSession.answers3;
            this.answers4 = userTestSession.answers4;
            this.answers5 = userTestSession.answers5;
            this.answers6 = userTestSession.answers6;
            this.answers7 = userTestSession.answers7;
            this.starttest();
          }
        } else {
          this.testroomService.checkUserOnline(this.currentUser.username, this.testRoom.roomID).subscribe(isOnline => {
            if (!isOnline) {
              this.starttest();
            }
          });
        }
      }
    });

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
    this.audio1.pause();
    this.audio2.pause();
    this.audio3.pause();
    this.audio4.pause();
    clearInterval(this.interval1);
    clearInterval(this.interval);
    this.testroomService.checkoutUser(this.currentUser.username, this.testRoom.roomID).subscribe(r => {
    });
    window.removeEventListener('beforeunload', this.getout);
  }

  checkTime() {
    this.testroomService.getCurrentTime().subscribe(time => {
      let currentTime = new Date(time);
      const startTime = new Date(this.testRoom.startTime);
      if (
        startTime.getFullYear() === currentTime.getFullYear() &&
        startTime.getMonth() === currentTime.getMonth() &&
        startTime.getDate() === currentTime.getDate()
      ) {
        this.interval1 = setInterval(() => {
          this.authenticationService.isTokenExpired();
          this.testroomService.getCurrentTime().subscribe(time1 => {
            currentTime = new Date(time1);
            if (
              (startTime.getHours() === currentTime.getHours() && startTime.getMinutes() > currentTime.getMinutes()) ||
              (startTime.getHours() === currentTime.getHours() + 1 && startTime.getMinutes() <= currentTime.getMinutes())
            ) {
              let timer2 = '';
              if (startTime.getHours() === currentTime.getHours()) {
                if (startTime.getMinutes() === currentTime.getMinutes()) {
                  timer2 = (startTime.getMinutes() - currentTime.getMinutes()) + ':' + (60 - currentTime.getSeconds());
                } else {
                  timer2 = (startTime.getMinutes() - currentTime.getMinutes() - 1) + ':' + (60 - currentTime.getSeconds());
                }
              } else {
                timer2 = (59 - currentTime.getMinutes() + startTime.getMinutes()) + ':' + (60 - currentTime.getSeconds());
              }

              this.isCountdown = true;
              const timer = timer2.split(':');
              // by parsing integer, I avoid all extra string processing
              let minutes = parseInt(timer[0], 10);
              let seconds = parseInt(timer[1], 10);
              --seconds;
              minutes = (seconds < 0) ? --minutes : minutes;
              seconds = (seconds < 0) ? 59 : seconds;
              seconds = (seconds < 10) ? 0 + seconds : seconds;
              if (minutes <= 0 && seconds <= 0) {
                this.isStart = true;
              }
              // minutes = (minutes < 10) ?  minutes : minutes;
              let secondString = '';
              secondString = (seconds < 0) ? '59' : seconds.toString();
              secondString = (seconds < 10) ? '0' + seconds : seconds.toString();
              this.timeCountdownStart = minutes + ':' + secondString;
            } else if (
              (
                startTime.getHours() + 2 < currentTime.getHours()
              )
              ||
              (
                startTime.getHours() + 2 === currentTime.getHours() &&
                startTime.getMinutes() <= currentTime.getMinutes()
              )
            ) {
              this.isExpired = true;
            } else if (
              startTime.getHours() === currentTime.getHours() && startTime.getMinutes() === currentTime.getMinutes()
            ) {
              this.isStart = true;
            }
          });
        }, 1000);
      } else if (
        (
          startTime.getFullYear() < currentTime.getFullYear()
        )
        ||
        (
          startTime.getFullYear() === currentTime.getFullYear() &&
          startTime.getMonth() < currentTime.getMonth()
        )
        ||
        (
          startTime.getFullYear() === currentTime.getFullYear() &&
          startTime.getMonth() === currentTime.getMonth() &&
          startTime.getDate() < currentTime.getDate()
        )
        ||
        (
          startTime.getFullYear() === currentTime.getFullYear() &&
          startTime.getMonth() === currentTime.getMonth() &&
          startTime.getDate() === currentTime.getDate() &&
          startTime.getHours() + 2 < currentTime.getHours()
        )
        ||
        (
          startTime.getFullYear() === currentTime.getFullYear() &&
          startTime.getMonth() === currentTime.getMonth() &&
          startTime.getDate() === currentTime.getDate() &&
          startTime.getHours() + 2 === currentTime.getHours() &&
          startTime.getMinutes() <= currentTime.getMinutes()
        )
      ) {
        this.isExpired = true;
      }
    });
  }

  startTime() {
    let currentTime;
    let cnt = 0;
    this.interval = setInterval(() => {
      this.authenticationService.isTokenExpired();
      this.testroomService.checkUserOnline(this.currentUser.username, this.testRoom.roomID).subscribe(isOnline => {
        if (isOnline) {
          alert('The account is being logged in somewhere else !!!');
          clearInterval(this.interval);
          this.routers.navigate(['/home']);
        }
      });
      this.testroomService.getCurrentTime().subscribe(time => {
        currentTime = new Date(time);
        const startTime = new Date(this.testRoom.startTime);
        let timer2 = '';
        if (startTime.getHours() === currentTime.getHours()) {
          timer2 = (119 - (currentTime.getMinutes() - startTime.getMinutes())) + ':' + (60 - currentTime.getSeconds());
        } else if (startTime.getHours() + 1 === currentTime.getHours()) {
          timer2 = (119 - (currentTime.getMinutes() + 59 - startTime.getMinutes())) + ':' + (60 - currentTime.getSeconds());
        } else if (startTime.getHours() + 2 === currentTime.getHours() && startTime.getMinutes() > currentTime.getMinutes()) {
          if (startTime.getMinutes() <= currentTime.getMinutes()) {
            timer2 = '0:1';
          } else {
            timer2 = (119 - (currentTime.getMinutes() + 119 - startTime.getMinutes() - 1)) + ':' + (60 - currentTime.getSeconds());
          }
        } else {
          timer2 = '0:1';
        }
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

        // Synchronize play time of mp3
        if (cnt < 3) {
          let min = 0;
          let sec = 0;
          if (startTime.getHours() === currentTime.getHours()) {
            min = currentTime.getMinutes() - startTime.getMinutes();
            sec = currentTime.getSeconds();
          } else if (startTime.getHours() + 1 === currentTime.getHours()) {
            min = 60 - startTime.getMinutes() + currentTime.getMinutes();
            sec = currentTime.getSeconds();
          } else if (startTime.getHours() + 2 === currentTime.getHours()) {
            min = 60 - startTime.getMinutes() + 60 + currentTime.getMinutes();
            sec = currentTime.getSeconds();
          }
          const timeMp3 = (min * 60) + sec;
          if (timeMp3 > this.audio1.duration) {
            this.audio1.currentTime = this.audio1.duration;
            if (timeMp3 > (this.audio1.duration + this.audio2.duration)) {
              this.audio2.currentTime = this.audio2.duration;
              if (timeMp3 > (this.audio1.duration + this.audio2.duration + this.audio3.duration)) {
                this.audio3.currentTime = this.audio3.duration;
                if (timeMp3 > (this.audio1.duration + this.audio2.duration + this.audio3.duration + this.audio4.duration)) {
                  this.audio4.currentTime = this.audio4.duration;
                  this.count = 5;
                  this.prebtn = true;
                } else {
                  this.audio4.currentTime = timeMp3 - (this.audio1.duration + this.audio2.duration + this.audio3.duration);
                  this.audio4.play();
                  this.count = 4;
                  this.prebtn = true;
                }
              } else {
                this.audio3.currentTime = timeMp3 - (this.audio1.duration + this.audio2.duration);
                this.audio3.play();
                this.count = 3;
                this.prebtn = true;
              }
            } else {
              this.audio2.currentTime = timeMp3 - this.audio1.duration;
              this.audio2.play();
              this.count = 2
              this.prebtn = true;
            }
          } else {
            this.audio1.currentTime = timeMp3;
            this.audio1.play();
          }
        } else if (cnt > 3) {
          if (this.audio1.ended || this.audio1.currentTime >= this.audio1.duration - 1) {
            if (!this.audio2.ended && this.audio2.currentTime < this.audio2.duration - 1) {
              this.audio2.play();
            } else {
              if (!this.audio3.ended && this.audio3.currentTime < this.audio3.duration - 1) {
                this.audio3.play();
              } else {
                if (!this.audio4.ended) {
                  this.audio4.play();
                }
              }
            }
          }
        }
        cnt++;
        // End synchronize play time of mp3
      });
    }, 1000);
  }

  onSelectionChange() {
    localStorage.setItem('userTestSession', JSON.stringify({
      username: this.currentUser.username, roomID: this.roomID,
      answers1: this.answers1, answers2: this.answers2, answers3: this.answers3, answers4: this.answers4,
      answers5: this.answers5, answers6: this.answers6, answers7: this.answers7
    }));
  }

  start() {
    if (confirm('Do you want start TOEIC test session?')) {
      this.starttest();
    }
  }

  starttest() {
    clearInterval(this.interval1);
    localStorage.setItem('userTestSession', JSON.stringify({
      username: this.currentUser.username, roomID: this.roomID,
      answers1: this.answers1, answers2: this.answers2, answers3: this.answers3, answers4: this.answers4,
      answers5: this.answers5, answers6: this.answers6, answers7: this.answers7
    }));
    // check user online
    this.testroomService.checkUserOnline(this.currentUser.username, this.testRoom.roomID).subscribe(isOnline => {
      if (!isOnline) {
        alert('The account is being logged in somewhere else !!!');
        this.routers.navigate(['/home']);
      } else {
        this.testRoom.userOnlineList.push(this.currentUser.username);
        this.testroomService.updateTestRoom(this.testRoom).subscribe(re => {
        });
        this.audio1 = new Audio();
        this.audio2 = new Audio();
        this.audio3 = new Audio();
        this.audio4 = new Audio();
        // get exam random
        this.examService.getExamByExamID(this.testRoom.examID).subscribe(result => {
          this.exam = result;
          Promise.all([
            this.examService.getListeningParts(this.exam.examID),
            this.examService.getReadingParts(this.exam.examID)
          ])
            .then(listPart => {

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
              });

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
              });
              this.loading = true;
              this.startTime();
            });
        });
        // end get exam
      }
    });
  }

  changePart() {
    this.nextbtn = true;
    this.prebtn = true;
    switch (this.selectCnt) {
      case '1':
        this.count = 1;
        this.prebtn = false;
        break;
      case '2':
        this.count = 2;
        break;
      case '3':
        this.count = 3;
        break;
      case '4':
        this.count = 4;
        break;
      case '5':
        this.count = 5;
        break;
      case '6':
        this.count = 6;
        break;
      case '7':
        this.count = 7;
        this.nextbtn = false;
        break;
      default:
        this.count = 1;
        break;
    }
  }

  nextPart() {
    this.nextbtn = true;
    this.prebtn = true;
    this.count += 1;
    this.selectCnt = this.count.toString();
    if (this.count === 7) {
      this.nextbtn = false;
      this.isChoosePart = true;
    }
  }

  prePart() {
    this.nextbtn = true;
    this.prebtn = true;
    this.count -= 1;
    this.selectCnt = this.count.toString();
    if (this.count === 1) {
      this.prebtn = false;
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
                    this.testResult.roomID = this.testRoom.roomID;
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
                          this.examService.addTestSesionResult(this.testResult).subscribe(rest => {
                            this.testRoom.userJoinedList.push(this.currentUser.username);
                            this.testroomService.updateTestRoom(this.testRoom).subscribe(re => {
                            });
                          });
                          this.isSubmit = true;
                          clearInterval(this.interval);
                          localStorage.removeItem('userTestSession');
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
