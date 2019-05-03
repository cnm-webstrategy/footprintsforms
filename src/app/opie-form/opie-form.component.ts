import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import * as moment from 'moment';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { restrictedWords } from '../shared/restricted-words.validator';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { SubmitService } from '../shared/submit.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-opie-form',
  templateUrl: './opie-form.component.html',
  styleUrls: [ './opie-form.component.scss' ]
})

export class OpieFormComponent implements OnInit {

  node;
  submitDisabled = false;
  dateNeededDate: NgbDateStruct;
  opieForm: FormGroup;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded'
    })};

  dropdowns = {
    recurring: [
      {id: 'Required', text: 'Required'},
      {id: 'one-time', text: 'One time'},
      {id: 'recurring', text: 'Recurring'}
    ],
    recurringSchedule: [
      {id: 'Term', text: 'Term'},
      {id: 'Annually', text: 'Annually'},
      {id: 'Other', text: 'Other'}
    ]
  };

  // values for various dropdowns
  recurring = [
    {id: 'Required', text: 'Required'},
    {id: 'one-time', text: 'One time'},
    {id: 'recurring', text: 'Recurring'}
  ];
  recurringSchedule = [
    {id: 'Term', text: 'Term'},
    {id: 'Annually', text: 'Annually'},
    {id: 'Other', text: 'Other'},
  ];
  typeOfRequest = [
    {id: 'Required', text: 'Required'},
    {id: 'Accreditation Reporting', text: 'Accreditation Reporting'},
    {id: 'Institutional Research', text: 'Institutional Research'},
    {id: 'Learning Assessment', text: 'Learning ssAssessment'},
    {id: 'Performance Improvement', text: 'Performance Improvement'},
    {id: 'Unknown', text: 'Unknown'},
  ];
  piCategory = [
    {id: 'No Choice', text: 'No Choice'},
    {id: 'Department Profile', text: 'Department Profile'},
    {id: 'PI Report', text: 'PI Report'},
    {id: 'Resources', text: 'Resources'},
    {id: 'Survey', text: 'Survey'},
    {id: 'Training', text: 'Training'},
  ];
  proposedAudience = [
    {id: 'Required', text: 'Required'},
    {id: 'Internal', text: 'Internal CNM (Employees only)'},
    {id: 'External to CNM', text: 'External to CNM'},
    {id: 'Performance Improvement', text: 'Both'},
  ];
  strategicGoal = [
    {id: 'No Choice', text: 'No Choice'},
    {id: 'Student__bSuccess', text: 'Student Success'},
    {id: 'Community__bSuccess', text: 'Community Success'},
    {id: 'Organization__bExcellence__band__bInnovation', text: 'Organization Excellence and Innovation'},
    {id: 'None__bof__bthese', text: 'None of these'},
  ];
  strategicInitiative = {
    Student__bSuccess: [
      {
        id: 'No Choice',
        text: 'No Choice'
      },
      {
        id: 'All First-Time, Full-Time, Degree-Seeking Students Have an Academic Plan', text: 'All First-Time, Full-Time, Degree-Seeking Students Have an Academic Plan'
      },
      {id: 'Create a Student-Centered Course Schedule', text: 'Create a Student-Centered Course Schedule'},
      {id: 'Create Comprehensive Online College', text: 'Create Comprehensive Online College'},
      {
        id: 'Develop Early Childhood Connect Center of Excellence', text: 'Develop Early Childhood Connect Center of Excellence'
      },
      {id: 'Develop Global Learning Initiative', text: 'Develop Global Learning Initiative'},
      {id: 'Develop Student Work Experience Program', text: 'Develop Student Work Experience Program'},
      {id: 'Expand College Career High School', text: 'Expand College Career High School'},
      {id: 'Expand Credit for Prior Learning', text: 'Expand Credit for Prior Learning'},
      {id: 'Expand Dual Credit', text: 'Expand Dual Credit'},
      {id: 'Expand Fast-Track Degree Offerings', text: 'Expand Fast-Track Degree Offerings'},
      {
        id: 'Expand Non-Credit Offerings Through Bootcamps, Academies', text: 'Expand Non-Credit Offerings Through Bootcamps, Academies'
      },
      {id: 'Grow Intersession', text: 'Grow Intersession'},
      {id: 'Implement Competency-Based Education options', text: 'Implement Competency-Based Education options'},
      {
        id: 'Incorporate Sustainability Initiatives into Course Offerings', text: 'Incorporate Sustainability Initiatives into Course Offerings'
      },
      {
        id: 'Increase Graduation Rates of First-Time, Full-Time, Degree-Seeking Students', text: 'Increase Graduation Rates of First-Time, Full-Time, Degree-Seeking Students'
      },
      {
        id: 'Transition from col-mdlege-Owned Technology to Student-Owned Technology', text: 'Transition from col-mdlege-Owned Technology to Student-Owned Technology'
      },
    ],
    Community__bSuccess: [
      {id: 'No Choice', text: 'No Choice'},
      {
        id: 'Create Comprehensive Online College', text: 'Create Comprehensive Online College'
      },
      {
        id: 'Develop and Implement Comprehensive Makerspace', text: 'Develop and Implement Comprehensive Makerspace'
      },
      {
        id: 'Develop Global Learning Initiative', text: 'Develop Global Learning Initiative'
      },
      {
        id: 'Develop Student Work Experience Program', text: 'Develop Student Work Experience Program'
      },
      {
        id: 'Expand Business Support through Business Accelerator and SBDCs', text: 'Expand Business Support through Business Accelerator and SBDCs'
      },
      {
        id: 'Expand College & Career High School', text: 'Expand College & Career High School'
      },
      {
        id: 'Expand Fast-Track Degree Offerings', text: 'Expand Fast-Track Degree Offerings'
      },
      {
        id: 'Expand Non - Credit Offerings Through Bootcamps, Academies', text: 'Expand Non - Credit Offerings Through Bootcamps, Academies'
      },
      {id: 'Grow Intersession', text: 'Grow Intersession'},
      {
        id: 'Implement Competency-Based Education options', text: 'Implement Competency-Based Education options'
      },
    ],
    Organization__bExcellence__band__bInnovation: [
      {
        id: 'No Choice', text: 'No Choice'
      },
      {
        id: 'Articulate and Implement Space Efficiency Initiatives ', text: 'Articulate and Implement Space Efficiency Initiatives '
      },
      {
        id: 'Develop Global Learning Initiative ', text: 'Develop Global Learning Initiative '
      },
      {
        id: 'Develop Student Work Experience Program ', text: 'Develop Student Work Experience Program '
      },
      {
        id: 'Enhance Intellectual Property Initiatives ', text: 'Enhance Intellectual Property Initiatives '
      },
      {
        id: 'Implement values-Based Employee Initiatives ', text: 'Implement values-Based Employee Initiatives '
      },
      {
        id: 'Streamline and Document all Processes and Procedures ', text: 'Streamline and Document all Processes and Procedures '
      },
      {
        id: 'Transform Customer Service Experience ', text: 'Transform Customer Service Experience '
      },
      {
        id: 'Transition from col - mdlege - Owned Technology to Student - Owned Technology ', text: 'Transition from col - mdlege - Owned Technology to Student - Owned Technology '
      },
    ]
  };


  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router,
              private submitService: SubmitService,
              private titleService: Title ) {
  }

  ngOnInit() {
    this.titleService.setTitle('OPIE Data Request')
    this.node = document.getElementById('recurring');
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => console.log(mutation));
    });
    observer.observe(this.node, {
      attributes: true,
      childList: true,
      characterData: true
    });

    this.opieForm = this.fb.group({
      TITLE: [ '', Validators.required ],
      First__bName: [ '', Validators.required ],
      Last__bName: [ '', Validators.required ],
      Email__bAddress: [ '', [ Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$') ] ],

      dateNeeded: [ '', Validators.required ],
      One__uTime__bor__bRecurring__Q: [ this.recurring[ 0 ].id, [Validators.required, restrictedWords(['Required'])]],
      Recurring__bSchedule: [ this.recurringSchedule[ 0 ].id, [Validators.required, restrictedWords(['Required'])]],
      Please__bExplain__bOther: [ '' ],
      Type__bof__bRequest: [ this.typeOfRequest[ 0 ].id, [Validators.required, restrictedWords(['Required'])] ],
      PI__bCategory: [ this.piCategory[ 0 ].id ],
      If__bUnknown__bPlease__bDescribe__c: [ '' ],
      Proposed__bAudience: [ this.proposedAudience[ 0 ].id, [Validators.required, restrictedWords(['Required'])]],
      Strategic__bgoal__bto__bwhich__bthis__brelates: [ this.strategicGoal[ 0 ].id, [Validators.required, restrictedWords(['Required'])] ],
      Strategic__binitiative__bto__bwhich__bthis__brelates: [ '' ],
      LONGDESCRIPTION: [ '' ],
      Month_Date__bNeeded: [ '' ],
      Day_Date__bNeeded: [ '' ],
      Year_Date__bNeeded: [ '' ],
      TO: [ 'OPIERequests@cnm.edu' ],
      FROM: [ 'webservices@cnm.edu' ],
      PROJECTNUM: [ '23' ],
      PROJECTNAME: [ 'OPIE' ],
      DATE_TYPE: [ '0' ],
    });

    this.onChanges();

    // calculate a date two weeks in the future as default, as per the customer
    const dateInTwoWeeks = moment().add(2, 'weeks');
    // convert moment date to NgbDateStruct, because that's what angular bootstrap uses
    this.dateNeededDate = {year: dateInTwoWeeks.year(), month: dateInTwoWeeks.month() + 1, day: dateInTwoWeeks.date()};
    // set `dateNeeded` field to date two weeks in the future
    this.opieForm.get('dateNeeded').setValue(this.dateNeededDate);


  }

  onChanges(): void {
    this.opieForm.get('Email__bAddress').valueChanges.subscribe(val => {
      this.opieForm.get('FROM').setValue(val);
    });
    this.opieForm.get('dateNeeded').valueChanges.subscribe(val => {
      this.opieForm.get('Month_Date__bNeeded').setValue(val.month);
      this.opieForm.get('Day_Date__bNeeded').setValue(val.day);
      this.opieForm.get('Year_Date__bNeeded').setValue(val.year);
    });

  }

  // addParamsToBody = (obj) => {
  //   const body = new HttpParams({ fromObject: obj});
  //   return body;
  // }

  onSubmit = () => {

    // const body2 = this.addParamsToBody(this.opieForm.value);

    if (this.opieForm.valid) {

      // prevent multiple submissions
      this.submitDisabled = true;

      // `dateNeeded` is only used at runtime, the server is not aware of this field
      this.opieForm.removeControl('dateNeeded');

      this.submitService.submitForm(this.opieForm, 'https://sos.cnm.edu/MRcgi/MRProcessIncomingForms.pl');
    }

  }

}
