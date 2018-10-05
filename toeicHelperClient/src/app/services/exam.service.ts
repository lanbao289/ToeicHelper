import { AnswerPart } from './../model/answer-part';
import { ListeningPart } from './../model/listening-part';
import { TestSessionResult } from './../model/test-session-result';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response, ResponseContentType } from '../../../node_modules/@angular/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Exam } from '../model/exam';
import { Part } from '../model/part';
import { TestResult } from '../model/test-result';
import { TrainingResult } from '../model/training-result';

@Injectable()
export class ExamService {

  private Url = 'http://localhost:8080/api/';

  options: RequestOptions;

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService
  ) {
    const headers = new Headers;
    headers.append('Authorization', this.authenticationService.token);
    headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({ headers });
  }

  // get all exam
  getExams(): Observable<Exam[]> {
    return this.http.get(this.Url + 'exams', this.options)
      .map((response: Response) => response.json());
  }

  // get exam by examID
  getExamByExamID(examID): Observable<Exam> {
    return this.http.get(this.Url + 'exam/' + examID, this.options)
      .map((response: Response) => response.json());
  }

  // delete exam by examID
  deleteExam(examID): Observable<boolean> {
    return this.http.delete(this.Url + 'exam/' + examID, this.options)
      .map((response: Response) => response.json());
  }

  // get listening Part by examID
  getListeningParts(examID: string): Observable<ListeningPart[]> {
    return this.http.get(this.Url + 'listeningparts/' + examID, this.options)
      .map((reponse: Response) => reponse.json());
  }

  // get listening Part by examID
  getReadingParts(examID: string): Observable<Part[]> {
    return this.http.get(this.Url + 'parts/' + examID, this.options)
      .map((reponse: Response) => reponse.json());
  }

  // get answer part by partID
  getAnswerParts(partID: string): Observable<AnswerPart[]> {
    return this.http.get(this.Url + 'answerparts/' + partID, this.options)
      .map((reponse: Response) => reponse.json());
  }

  // add result for full test
  addTestResult(testResult: TestResult): Observable<TestResult> {
    return this.http.post(this.Url + 'testresult', testResult, this.options)
      .map((reponse: Response) => reponse.json());
  }

  // get full test result history
  getTestResultHistory(username: string): Observable<TestResult[]> {
    return this.http.get(this.Url + 'testresults/' + username, this.options)
      .map((reponse: Response) => reponse.json());
  }

  // get file save on server
  getMp3Files(filename: string): Observable<any> {
    const headers = new Headers;
    headers.append('Authorization', this.authenticationService.token);
    const options = new RequestOptions({ headers, responseType: ResponseContentType.Blob });
    return this.http.get(this.Url + 'files/' + filename, options)
      .map((reponse: Response) => {
        return new Blob([reponse.blob()], { type: 'audio/mpeg' });
      });
  }

  getPdfFiles(filename: string): Observable<any> {
    const headers = new Headers;
    headers.append('Authorization', this.authenticationService.token);
    const options = new RequestOptions({ headers, responseType: ResponseContentType.Blob });
    return this.http.get(this.Url + 'files/' + filename, options)
      .map((reponse: Response) => {
        return new Blob([reponse.blob()], { type: 'application/pdf' });
      });
  }

  // get listening part by examID and partNo
  getListeningPart(examID: string, partNo: number): Observable<ListeningPart> {
    return this.http.get(this.Url + 'minitestlistenpart/' + examID + '/' + partNo, this.options)
      .map((reponse: Response) => reponse.json());
  }

  // get read part by examID and partNo
  getReadPart(examID: string, partNo: number): Observable<Part> {
    return this.http.get(this.Url + 'minitestpart/' + examID + '/' + partNo, this.options)
      .map((reponse: Response) => reponse.json());
  }

  // add result for mini test
  addMiniTestResult(trainingResult: TrainingResult): Observable<TrainingResult> {
    return this.http.post(this.Url + 'trainingresult', trainingResult, this.options)
      .map((reponse: Response) => reponse.json());
  }

  // get minitest result history
  getMiniTestResultHistory(username: string): Observable<TrainingResult[]> {
    return this.http.get(this.Url + 'trainingresults/' + username, this.options)
      .map((reponse: Response) => reponse.json());
  }

  // Get reading points based on number of correct sentences from server
  getReadingPoint(readCorrect: number): Observable<number> {
    return this.http.get(this.Url + 'readingpoint/' + readCorrect, this.options)
      .map((reponse: Response) => reponse.json());
  }

  // Get listening points based on number of correct sentences from server
  getListeningPoint(listenCorrect: number): Observable<number> {
    return this.http.get(this.Url + 'listeningpoint/' + listenCorrect, this.options)
      .map((reponse: Response) => reponse.json());
  }

  // get test result history of test session by username
  getTestSessionResultHistory(username: string): Observable<TestSessionResult[]> {
    return this.http.get(this.Url + 'testsessionresults/' + username, this.options)
      .map((reponse: Response) => reponse.json());
  }

  // add result for test sesion
  addTestSesionResult(testSessionResult: TestSessionResult): Observable<TestSessionResult> {
    return this.http.post(this.Url + 'testsessionresult', testSessionResult, this.options)
      .map((reponse: Response) => reponse.json());
  }

  // update listening part
  editListeningPart(listeningPart: ListeningPart): Observable<ListeningPart> {
    return this.http.put(this.Url + 'listeningpart', listeningPart, this.options)
      .map((reponse: Response) => reponse.json());
  }

  // update listening part
  editReadingPart(readingPart: Part): Observable<Part> {
    return this.http.put(this.Url + 'part', readingPart, this.options)
      .map((reponse: Response) => reponse.json());
  }

  // update answer part
  editAnswerPart(answerPart: AnswerPart[]): Observable<AnswerPart[]> {
    return this.http.put(this.Url + 'answerparts', answerPart, this.options)
      .map((reponse: Response) => reponse.json());
  }

  // get all exam
  getExamsForTraining(): Observable<Exam[]> {
    return this.http.get(this.Url + 'examsfortrain', this.options)
      .map((response: Response) => response.json());
  }

  // get all exam
  getExamsForTest(): Observable<Exam[]> {
    return this.http.get(this.Url + 'examsfortest', this.options)
      .map((response: Response) => response.json());
  }

  // get test result history of test session by username
  getTestSessionResultHistoryByroomID(roomID: string): Observable<TestSessionResult[]> {
    return this.http.get(this.Url + 'testsessionresultsbyroomid/' + roomID, this.options)
      .map((reponse: Response) => reponse.json());
  }
}
