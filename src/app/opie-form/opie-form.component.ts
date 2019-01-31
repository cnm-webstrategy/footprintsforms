import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-opie-form',
  templateUrl: './opie-form.component.html',
  styleUrls: ['./opie-form.component.scss']
})
export class OpieFormComponent implements OnInit {

// <option value="no-answer">No choice</option>
// <option value="one-time">One time</option>
// <option value="recurring">Recurring</option>
  recurring = [
    {'id': 'no-answer', 'name': 'No choice'},
    {'id': 'one-time', 'name': 'One time'},
  ];

  opieForm = new FormGroup({
    TITLE: new FormControl(''),
    First__bName: new FormControl(''),
    Last__bName: new FormControl(''),
    Email__bAddress: new FormControl(''),

    One__uTime__bor__bRecurring__Q: new FormControl(''),
    Recurring__bSchedule: new FormControl(''),
    Please__bExplain__bOther: new FormControl(this.recurring[0].id)
    // Please__bExplain__bOther: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.opieForm.value);
    // this.http.post('https://sos.cnm.edu/MRcgi/MRProcessIncomingForms.pl')
    //   .subscribe();
  }
}
