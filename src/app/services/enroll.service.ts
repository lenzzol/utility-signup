import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Property } from '../models/dto/property';
import { User } from '../models/dto/user';
import { ServiceAddress } from '../models/dto/service-address';
import { Enrollment } from '../models/dto/enrollment';


@Injectable()
export class EnrollService {
  private enrollUrl = 'http://localhost:5000/api/enrollment';

  constructor(private http: Http) { }

  createEnrollment(enrollment: Enrollment): Observable<Enrollment> {
    let header = new Headers({ 'Content-Type': 'application/json' });
        //enrollment.createdBy = null;
    //enrollment.property = null;
    //enrollment.resident = null;
    

    return this.http.post(this.enrollUrl, enrollment, <RequestOptionsArgs>{ headers: header })
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
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
