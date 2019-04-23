import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { SubmitService } from '../shared/submit.service';

@Component({
  selector: 'app-student-complaint-form',
  templateUrl: './student-complaint-form.component.html',
  styleUrls: ['./student-complaint-form.component.scss']
})
export class StudentComplaintFormComponent implements OnInit {

  dateOccurred: NgbDateStruct;
  submitDisabled = false;
  studentComplaintForm: FormGroup;

  constructor(private fb: FormBuilder,
              private submitService: SubmitService ) { }

  ngOnInit() {
    this.studentComplaintForm = this.fb.group({
      First__bName: [ '', [ Validators.required ] ],
      Last__bName: [ '', [ Validators.required ] ],
      Email__bAddress: [ '', [ Validators.required ] ],
      User__bName: [ '', [ Validators.required] ],
      CNM__bPhone: [ '' ],
      CNM__bID__bNumber: [ '' ],
      Student__bAddress: [ '' ],
      City: [ '' ],
      State: [ '' ],
      Zip__bCode: [ '' ],
      TITLE: [ '' ],
      Feedback: [ '' ],
      Feedback__bCategory: [ '' ],
      dateOccurred: [ '', [ Validators.required ] ],
      Student__bStatus: [ '' ],
      Course__bName: [ '' ],
      Name__bof__bIndividual: [ '' ],
      Confidentiality: [ '' ],
      Referred__bby: [ '' ],
      LONGDESCRIPTION: [ '' ],
      Individual__bOutcome__bor__bDiscussion: [ '' ],
      Month_Date__bEvent__bOccurred: [ '' ],
      Day_Date__bEvent__bOccurred: [ '' ],
      Year_Date__bEvent__bOccurred: [ '' ],
      TO: [ 'studentcomp@cnm.edu' ],
      FROM: [ 'Web@cnm.edu' ],
      PROJECTNUM: [ '21' ],
      PROJECTNAME: [ 'Dean of Students' ],
      DATE_TYPE: [ '0' ],
    });
    this.onChanges();
  }

  onChanges(): void {
    this.studentComplaintForm.get('Email__bAddress').valueChanges.subscribe(val => {
      this.studentComplaintForm.get('FROM').setValue(val);
    });

    this.studentComplaintForm.get('dateOccurred').valueChanges.subscribe(val => {
      // console.log(val)
      this.studentComplaintForm.get('Month_Date__bEvent__bOccurred').setValue(val.month);
      this.studentComplaintForm.get('Day_Date__bEvent__bOccurred').setValue(val.day);
      this.studentComplaintForm.get('Year_Date__bEvent__bOccurred').setValue(val.year);
    });
  
  }

  onSubmit = () => {
    // prevent multiple submissions
    this.submitDisabled = true;

    // `dateOccurred` is only used at runtime, the server is not aware of this field
    this.studentComplaintForm.removeControl('dateOccurred');

    this.submitService.submitForm(this.studentComplaintForm, 'https://sos.cnm.edu/MRcgi/MRProcessIncomingForms.pl')

  };

}
