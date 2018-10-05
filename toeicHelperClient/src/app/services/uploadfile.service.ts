import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Http, RequestOptions, Headers, Response } from '../../../node_modules/@angular/http';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class UploadfileService {

  private Url = 'http://localhost:8080/api/upload';
  options: RequestOptions;

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) { }

  pushFileToStorage(file: File): Promise<any> {
    const formdata: FormData = new FormData();
    const headers = new Headers;
    headers.append('Authorization', this.authenticationService.token);
    formdata.append('file', file);
    this.options = new RequestOptions({ headers });
    return this.http.post(this.Url, formdata, this.options)
      .toPromise().then(this.extractData).catch((err) => {
      });
  }

  deleteFile(filename: string): Observable<boolean> {
    return this.http.delete(this.Url + 'files/' + filename, this.options)
      .map((response: Response) => {
        if (response.text() === 'true') {
          return true;
        } else {
          return false;
        }
      });
  }

  private extractData(res: Response) {
    const body = res.text();
    return body;
  }

}
