import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Enrollment } from '../models/dto/enrollment';
import { Resident } from '../models/dto/resident';
import { Property } from '../models/dto/property';
import { ServiceAddress } from '../models/dto/service-address';
import { EnrollService } from '../services/enroll.service';
import { User } from '../models/dto/user';
import { DataService } from '../services/data.service';
import { SecurityService } from '../services/security.service';
import { FormControl } from '@angular/forms';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Observable } from "rxjs/Observable";
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component'
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  filteredPremises: Observable<ServiceAddress[]>;
  newEnrollment: Enrollment;
  premises: ServiceAddress[];
  addressCtrl: FormControl;

  private errorMessage: string;

  constructor(private enrollService: EnrollService, private dataService: DataService, 
    private securityService: SecurityService, public confirmDialog: MdDialog) {
    // this.http.get('https://jsonplaceholder.typicode.com/photos')
    //   .subscribe(response => this.myData = response.json())
    this.newEnrollment = new Enrollment();
    this.newEnrollment.createdBy = this.securityService.getUser();
    this.newEnrollment.property = this.newEnrollment.createdBy.acnId
      ? this.dataService.properties.find(x => x.acnId === this.newEnrollment.createdBy.acnId)
      : null;
    this.newEnrollment.serviceRequestTypeId = 3;
    this.premises = this.newEnrollment.createdBy.acnId
      ? this.dataService.premises.filter(x => x.acnId === this.newEnrollment.createdBy.acnId)
      : null;

    this.addressCtrl = new FormControl();
    this.filteredPremises = this.addressCtrl.valueChanges.startWith(null)
      .map(premise => premise ? this.filterAddresses(premise) : this.premises);
  }

  enroll(): void {
    this.newEnrollment.created = new Date();

    this.enrollService.createEnrollment(this.newEnrollment)
      .subscribe(
      enrollRecord => this.confirmEnrolled(enrollRecord),
      error => this.onError(<any>error));
  }

  filterAddresses(address: string): ServiceAddress[] {
    return this.premises.filter(premise => new RegExp(`^.*${address}.*$`, 'gi').test(premise.address));
  }

  displayAddressName(serviceAddress: ServiceAddress): string {
    return serviceAddress ? serviceAddress.address : null;
  }

  confirmEnrollment(): void {
    let dialogRef = this.confirmDialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result && result === "true"){
        console.log("made it to send");
        this.enroll();
      }
    });
  }

  confirmEnrolled(completedEnrollment: Enrollment): void {
    console.log(completedEnrollment);
    alert("enrolled!");
  }

  confirmDataReceived(data: any): void {
    console.log(data);
  }

  onError(error: any) {
  }

  ngOnInit() {

  }
}
