import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-opie-form',
  templateUrl: './opie-form.component.html',
  styleUrls: ['./opie-form.component.scss']
})
export class OpieFormComponent implements OnInit {
  dateNeededDate: NgbDateStruct ;
  opieForm: FormGroup;
  showExplainOther = false;

  recurring = [
    {'id': 'no-answer', 'name': 'No choice'},
    {'id': 'one-time', 'name': 'One time'},
    {'id': 'recurring', 'name': 'Recurring'}
  ];

  recurring_schedule = [
    {'id': 'No Choice', 'name': 'No choice'},
    {'id': 'Term', 'name': 'Term'},
    {'id': 'Annually', 'name': 'Annually'},
    {'id': 'Other', 'name': 'Other'},
  ];

  type_of_request = [
    {'id': 'No Choice', name: 'No Choice'},
    {'id': 'Accreditation Reporting', name: 'Accreditation Reporting'},
    {'id': 'Institutional Research', name: 'Institutional Research'},
    {'id': 'Learning Assessment', name: 'Learning Assessment'},
    {'id': 'Performance Improvement', name: 'Performance Improvement'},
    {'id': 'Unknown', name: 'Unknown'},
  ]

  pi_category = [
    {'id': 'No Choice', name: 'No Choice'},
    {'id': 'Department Profile', name: 'Department Profile'},
    {'id': 'PI Report', name: 'PI Report'},
    {'id': 'Resources', name: 'Resources'},
    {'id': 'Survey', name: 'Survey'},
    {'id': 'Training', name: 'Training'},
  ]



//   opieForm.get('One__uTime__bor__bRecurring__Q').valueChanges.subscribe(val => {
//   console.log(val);
// });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {


    this.opieForm = this.fb.group({
      TITLE: ['', Validators.required],
      First__bName: ['', Validators.required],
      Last__bName: ['', Validators.required],
      Email__bAddress: ['', [Validators.required, Validators.email]],

      dateNeeded: ['' , Validators.required],
      One__uTime__bor__bRecurring__Q: [this.recurring[0].id , Validators.required],
      Recurring__bSchedule: [this.recurring_schedule[0].id],
      Please__bExplain__bOther: [''],
      Type__bof__bRequest: [this.type_of_request[0].id],
      PI__bCategory: [''],
      If__bUnknown__bPlease__bDescribe__c: [''],
    });

    this.onChanges();
    const dateInTwoWeeks = moment().add(2, 'weeks');
    this.dateNeededDate = { year: dateInTwoWeeks.year(), month: dateInTwoWeeks.month() + 1, day: dateInTwoWeeks.date()};
    this.opieForm.get('dateNeeded').setValue(this.dateNeededDate);

  }

  onChanges(): void {
    this.opieForm.get('One__uTime__bor__bRecurring__Q').valueChanges.subscribe(val => {
      console.log(val);
    });
    this.opieForm.get('Recurring__bSchedule').valueChanges.subscribe(val => {
      this.showExplainOther = val === 'Other';
    });
  }

  onSubmit = () => {
    console.warn(this.opieForm.value);
    // this.http.post('https://sos.cnm.edu/MRcgi/MRProcessIncomingForms.pl')
    //   .subscribe();
  }
}
