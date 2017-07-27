import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import { Property } from '../models/dto/property';
import { User } from '../models/dto/user';
import { ServiceAddress } from '../models/dto/service-address';
import { Enrollment } from '../models/dto/enrollment';

@Injectable()
export class DataService {

  properties: Property[];
  users: User[];
  premises: ServiceAddress[];

  constructor(private http : Http) {
  }

  init() : void {
    Observable.forkJoin(
      this.getProperties(),
      this.getUsers(),
      this.getPremises()
    ).subscribe(
      data => {
        console.log("data received");
        this.properties = data[0];
        this.users = data[1];
        this.premises = data[2];
      }
    )
  }

  private getProperties() : Observable<Property[]> {
    return this.http.get("assets/property-list.json").map(this.extractData).catch(this.handleError);
  }

  private getUsers() : Observable<User[]> {
    return this.http.get("assets/user-list.json").map(this.extractData).catch(this.handleError);
  }

  private getPremises() : Observable<ServiceAddress[]> {
    return this.http.get("assets/premise-list.json").map(this.extractData).catch(this.handleError);
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
