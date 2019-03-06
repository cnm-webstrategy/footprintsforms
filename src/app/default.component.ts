import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  template: `
    <div class="container">
      <div class="row">
        <ul class="nav">
          <li class="nav-item"><a class="nav-link" [routerLink]="['/opie-form.html']">OPIE Form</a></li>
          <li class="nav-item"><a class="nav-link" [routerLink]="['/student-complaint-form.html']">Student Complaint Form</a></li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .container {
      border: none;
    }
  `]
})
export class DefaultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
