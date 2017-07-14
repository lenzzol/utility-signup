import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Enrollment } from './models/dto/enrollment';
import { Resident } from './models/dto/resident';
import { ServiceAddress } from './models/dto/service-address';
import { EnrollService } from './services/enroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //myData: Array<any>;
  newEnrollment: Enrollment;
  errorMessage: string;

  constructor(private enrollService: EnrollService){
    // this.http.get('https://jsonplaceholder.typicode.com/photos')
    //   .subscribe(response => this.myData = response.json())
    this.newEnrollment = new Enrollment();

  }

  enroll() :void {
    this.enrollService.createEnrollment(this.newEnrollment)
      .subscribe(
        enrollRecord  => this.confirmEnrolled(enrollRecord),
        error =>  this.onError(<any>error));
  }

  confirmEnrolled(completedEnrollment: Enrollment) :void {
    alert("enrolled!");
  }

  onError(error: any){

  }

}
