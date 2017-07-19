import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  //myData: Array<any>;
  newEnrollment: Enrollment;
  errorMessage: string;

  constructor(private enrollService: EnrollService) {
    // this.http.get('https://jsonplaceholder.typicode.com/photos')
    //   .subscribe(response => this.myData = response.json())
    this.newEnrollment = new Enrollment();
    this.newEnrollment.serviceAddress.acnId = 0;
    this.newEnrollment.serviceAddress.serviceId = 0;
  }

  enroll() :void {
    this.enrollService.createEnrollment(this.newEnrollment)
      .subscribe(
        enrollRecord  => this.confirmEnrolled(enrollRecord),
        error =>  this.onError(<any>error));

    
  }

  confirmEnrolled(completedEnrollment: Enrollment) :void {
    console.log(completedEnrollment);
    alert("enrolled!");
  }

  confirmDataReceived(data: any) : void{
    console.log(data);
  }

  onError(error: any){

  }

  ngOnInit(){
    this.enrollService.getData()
        .subscribe(
          propData => this.confirmDataReceived(propData),
          error => this.onError(<any>error)
        );
  }
}
