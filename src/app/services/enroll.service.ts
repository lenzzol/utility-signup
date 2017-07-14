import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Enrollment } from '../models/dto/enrollment';

@Injectable()
export class EnrollService {

  private enrollUrl = '/api/enroll';

  constructor(private http: Http) { }

  createEnrollment(enrollment: Enrollment): Observable<Enrollment> {
    return this.http.post(this.enrollUrl, enrollment)
                  .map(this.extractData)
                  .catch(this.handleError);
  }
  
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
 
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
