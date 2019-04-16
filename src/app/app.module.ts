import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpieFormComponent } from './opie-form/opie-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentComplaintFormComponent } from './student-complaint-form/student-complaint-form.component';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { DefaultComponent } from './default.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OpieFormComponent,
    StudentComplaintFormComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
