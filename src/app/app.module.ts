import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, JsonpModule } from '@angular/http';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, 
  MdIconModule, MdGridListModule, MdInputModule, MdTabsModule, 
  MdDialogModule, MdDatepickerModule, MdNativeDateModule, MdAutocompleteModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EnrollService } from './services/enroll.service';
import { SecurityService } from './services/security.service';
import { DataService } from './services/data.service';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfirmDialogComponent } from './dashboard/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCardModule, 
    MdMenuModule, 
    MdToolbarModule, 
    MdIconModule,
    HttpModule,
    JsonpModule,
    MdGridListModule,
    FlexLayoutModule,
    MdTabsModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdAutocompleteModule,
    MdDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  providers: [EnrollService, DataService, SecurityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
