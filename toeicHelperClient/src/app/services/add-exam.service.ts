import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '../../../node_modules/@angular/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Part } from '../model/part';
import { Exam } from '../model/exam';
import { ListeningPart } from '../model/listening-part';
import { AnswerPart } from '../model/answer-part';

@Injectable()
export class AddExamService {
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

  addExam(exam: Exam): Observable<Exam> {
    return this.http.post(this.Url + 'exam', exam, this.options)
      .map((reponse: Response) => reponse.json());
  }

  addListeningPart(listeningPart: ListeningPart): Observable<ListeningPart> {
    return this.http.post(this.Url + 'listeningpart', listeningPart, this.options)
      .map((reponse: Response) => reponse.json());
  }

  addReadingPart(part: Part): Observable<ListeningPart> {
    return this.http.post(this.Url + 'part', part, this.options)
      .map((reponse: Response) => reponse.json());
  }

  addAnswer(answerParts: AnswerPart[]): Observable<string> {
    return this.http.post(this.Url + 'answerparts', answerParts, this.options)
      .map((reponse: Response) => reponse.text());
  }

}
