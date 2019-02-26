import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-complaint-form',
  templateUrl: './student-complaint-form.component.html',
  styleUrls: ['./student-complaint-form.component.scss']
})
export class StudentComplaintFormComponent implements OnInit {

  studentComplaintForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.studentComplaintForm = this.fb.group({
      First__bName: [ '' ],
      Last__bName: [ '' ],
      Email__bAddress: [ '' ],
      User__bName: [ '' ],
      CNM__bPhone: [ '' ],
      CNM__bID__bNumber: [ '' ],
      Student__bAddress: [ '' ],
      City: [ '' ],
      State: [ '' ],
      Zip__bCode: [ '' ],
      TITLE: [ '' ],
      Feedback: [ '' ],
      Feedback__bCategory: [ '' ],
      dateOccurred: [ '' ],
      Student__bStatus: [ '' ],
      Course__bName: [ '' ],
      Name__bof__bIndividual: [ '' ],
      Confidentiality: [ '' ],
      Referred__bby: [ '' ],
      LONGDESCRIPTION: [ '' ],
      Individual__bOutcome__bor__bDiscussion: [ '' ],
      Month_Date__bEvent__bOccured: [ '' ],
      Day_Date__bEvent__bOccured: [ '' ],
      Year_Date__bEvent__bOccured: [ '' ],
      TO: [ 'studentcomp@cnm.edu' ],
      FROM: [ 'Web@cnm.edu' ],
      PROJECTNUM: [ '21' ],
      PROJECTNAME: [ 'Dean of Students' ],
      DATE_TYPE: [ '0' ],
    });
  }

}
