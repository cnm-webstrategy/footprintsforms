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
  node: Node;
  config = { attributes: true, childList: true, subtree: true };
  observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        console.log('A child node has been added or removed.');
      } else if (mutation.type === 'attributes') {
        console.log('The ' + mutation.attributeName + ' attribute was modified.');
      }
    });
  });


  dateNeededDate: NgbDateStruct ;
  opieForm: FormGroup;
  showExplainOther = false;

  // values for various dropdowns
  recurring = [
    {id: 'no-answer', text: 'No choice'},
    {id: 'one-time', text: 'One time'},
    {id: 'recurring', text: 'Recurring'}
  ];
  recurring_schedule = [
    {id: 'No Choice', text: 'No choice'},
    {id: 'Term', text: 'Term'},
    {id: 'Annually', text: 'Annually'},
    {id: 'Other', text: 'Other'},
  ];
  type_of_request = [
    {id: 'No Choice', text: 'No Choice'},
    {id: 'Accreditation Reporting', text: 'Accreditation Reporting'},
    {id: 'Institutional Research', text: 'Institutional Research'},
    {id: 'Learning Assessment', text: 'Learning Assessment'},
    {id: 'Performance Improvement', text: 'Performance Improvement'},
    {id: 'Unknown', text: 'Unknown'},
  ];
  pi_category = [
    {id: 'No Choice', text: 'No Choice'},
    {id: 'Department Profile', text: 'Department Profile'},
    {id: 'PI Report', text: 'PI Report'},
    {id: 'Resources', text: 'Resources'},
    {id: 'Survey', text: 'Survey'},
    {id: 'Training', text: 'Training'},
  ];
  proposed_audience = [
    {id: 'No Choice', text: 'No Choice'}
  ]
//     <option value="No Choice">No Choice</option>
// <option value="Internal CNM ">Internal CNM (Employees only)</option>
// <option value="External to CNM">External to CNM</option>
// <option value="Performance Improvement">Both</option>

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.node = document.getElementById('recurring');
    this.observer.observe(this.node, this.config);

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
      Proposed__bAudience: [''],
      Strategic__bgoal__bto__bwhich__bthis__brelates: ['']
    });

    this.onChanges();

    // calculate a date two weeks in the future as default, as per the customer
    const dateInTwoWeeks = moment().add(2, 'weeks');
    // convert moment date to NgbDateStruct, because that's what angular bootstrap uses
    this.dateNeededDate = { year: dateInTwoWeeks.year(), month: dateInTwoWeeks.month() + 1, day: dateInTwoWeeks.date()};
    // set `dateNeeded` field to date two weeks in the future
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
