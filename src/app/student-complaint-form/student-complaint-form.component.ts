import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student-complaint-form',
  templateUrl: './student-complaint-form.component.html',
  styleUrls: ['./student-complaint-form.component.scss']
})
export class StudentComplaintFormComponent implements OnInit {

  node;
  dateOccurred: NgbDateStruct;
  studentComplaintForm: FormGroup;

  constructor(private fb: FormBuilder) { }

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
    // this.studentComplaintForm.get('One__uTime__bor__bRecurring__Q').valueChanges.subscribe(val => {
      // console.log(val);
    // });
    // this.studentComplaintForm.get('Recurring__bSchedule').valueChanges.subscribe(val => {
      // this.showExplainOther = val === 'Other';
      // console.log(val);
    // });
    // this.studentComplaintForm.get('Strategic__bgoal__bto__bwhich__bthis__brelates').valueChanges.subscribe(val => {
      // this.studentComplaintForm.controls[ 'Strategic__binitiative__bto__bwhich__bthis__brelates' ].setValue(this.strategicInitiative[ val ][ 0 ], {onlySelf: true});
      // console.log(val);
      // console.log(this.strategicInitiative[ val ]);
    // });
    this.studentComplaintForm.get('dateOccurred').valueChanges.subscribe(val => {
      // console.log(val)
      this.studentComplaintForm.get('Month_Date__bEvent__bOccurred').setValue(val.month);
      this.studentComplaintForm.get('Day_Date__bEvent__bOccurred').setValue(val.day);
      this.studentComplaintForm.get('Year_Date__bEvent__bOccurred').setValue(val.year);
    });
  
  }

  onSubmit = () => {
    console.warn(this.studentComplaintForm.value);
    // this.http.post('https://sos.cnm.edu/MRcgi/MRProcessIncomingForms.pl')
    //   .subscribe();
  };

}
