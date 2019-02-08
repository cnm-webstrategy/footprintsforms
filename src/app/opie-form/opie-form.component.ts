import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as td from 'tempusdominus-bootstrap-4';

@Component({
  selector: 'app-opie-form',
  templateUrl: './opie-form.component.html',
  styleUrls: ['./opie-form.component.scss']
})
export class OpieFormComponent implements OnInit {
  opieForm: FormGroup;
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



//   opieForm.get('One__uTime__bor__bRecurring__Q').valueChanges.subscribe(val => {
//   console.log(val);
// });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {


    this.opieForm = this.fb.group({
      TITLE: ['', Validators.required],
      First__bName: ['', Validators.required],
      Last__bName: ['', Validators.required],
      Email__bAddress: ['', Validators.required],

      One__uTime__bor__bRecurring__Q: [this.recurring[0].id , Validators.required],
      Recurring__bSchedule: [this.recurring_schedule[0].id],
      Please__bExplain__bOther: [''],
      // Please__bExplain__bOther: [''],
    });

    this.onChanges();

  }

  onChanges(): void {
    this.opieForm.get('One__uTime__bor__bRecurring__Q').valueChanges.subscribe(val => {
      console.log(val);
    });
  }

  onSubmit = () => {
    console.warn(this.opieForm.value);
    // this.http.post('https://sos.cnm.edu/MRcgi/MRProcessIncomingForms.pl')
    //   .subscribe();
  }
}
