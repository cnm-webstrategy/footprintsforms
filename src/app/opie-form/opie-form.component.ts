import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import * as moment from 'moment';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { restrictedWords } from '../shared/restricted-words.validator';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opie-form',
  templateUrl: './opie-form.component.html',
  styleUrls: [ './opie-form.component.scss' ]
})

export class OpieFormComponent implements OnInit {

  node;
  dateNeededDate: NgbDateStruct;
  opieForm: FormGroup;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded'
    })};

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
        id: 'All__bFirst__uTime__M__bFull__uTime__M__bDegree__uSeeking__bStudents__bHave__ban__bAcademic__bPlan',
        text: 'All First-Time, Full-Time, Degree-Seeking Students Have an Academic Plan'
      },
      {id: 'Create__ba__bStudent__uCentered__bCourse__bSchedule', text: 'Create a Student-Centered Course Schedule'},
      {id: 'Create__bComprehensive__bOnline__bcol-mdlege', text: 'Create Comprehensive Online College'},
      {
        id: 'Develop__bEarly__bChildhood__bConnect__bCenter__bof__bExcellence',
        text: 'Develop Early Childhood Connect Center of Excellence'
      },
      {id: 'Develop__bGlobal__bLearning__bInitiative', text: 'Develop Global Learning Initiative'},
      {id: 'Develop__bStudent__bWork__bExperience__bProgram', text: 'Develop Student Work Experience Program'},
      {id: 'Expand__bcol-mdlege__b__7__bCareer__bHigh__bSchool', text: 'Expand College Career High School'},
      {id: 'Expand__bCredit__bfor__bPrior__bLearning', text: 'Expand Credit for Prior Learning'},
      {id: 'Expand__bDual__bCredit', text: 'Expand Dual Credit'},
      {id: 'Expand__bFast__uTrack__bDegree__bOfferings', text: 'Expand Fast-Track Degree Offerings'},
      {
        id: 'Expand__bNon__uCredit__bOfferings__bThrough__bBootcamps__M__bAcademies',
        text: 'Expand Non-Credit Offerings Through Bootcamps, Academies'
      },
      {id: 'Grow__bIntersession', text: 'Grow Intersession'},
      {id: 'Implement__bCompetency__uBased__bEducation__boptions', text: 'Implement Competency-Based Education options'},
      {
        id: 'Incorporate__bSustainability__bInitiatives__binto__bCourse__bOfferings',
        text: 'Incorporate Sustainability Initiatives into Course Offerings'
      },
      {
        id: 'Increase__bGraduation__bRates__bof__bFirst__uTime__M__bFull__uTime__M__bDegree__uSeeking__bStudents',
        text: 'Increase Graduation Rates of First-Time, Full-Time, Degree-Seeking Students'
      },
      {
        id: 'Transition__bfrom__bcol-mdlege__uOwned__bTechnology__bto__bStudent__uOwned__bTechnology',
        text: 'Transition from col-mdlege-Owned Technology to Student-Owned Technology'
      },
    ],
    Community__bSuccess: [
      {id: '', text: 'No Choice'},
      {
        id: 'Create__bComprehensive__bOnline__bcol-mdlege', text: 'Create Comprehensive Online College'
      },
      {
        id: 'Develop__band__bImplement__bComprehensive__bMakerspace', text: 'Develop and Implement Comprehensive Makerspace'
      },
      {
        id: 'Develop__bGlobal__bLearning__bInitiative', text: 'Develop Global Learning Initiative'
      },
      {
        id: 'Develop__bStudent__bWork__bExperience__bProgram', text: 'Develop Student Work Experience Program'
      },
      {
        id: 'Expand__bBusiness__bSupport__bthrough__bBusiness__bAccelerator__band__bSBDCs',
        text: 'Expand Business Support through Business Accelerator and SBDCs'
      },
      {
        id: 'Expand__bcol-mdlege__b__7__bCareer__bHigh__bSchool', text: 'Expand College & Career High School'
      },
      {
        id: 'Expand__bFast__uTrack__bDegree__bOfferings', text: 'Expand Fast-Track Degree Offerings'
      },
      {
        id: 'Expand__bNon__uCredit__bOfferings__bThrough__bBootcamps__M__bAcademies',
        text: 'Expand Non - Credit Offerings Through Bootcamps, Academies'
      },
      {id: 'Grow__bIntersession', text: 'Grow Intersession'},
      {
        id: 'Implement__bCompetency__uBased__bEducation__boptions', text: 'Implement Competency-Based Education options'
      },
    ],
    Organization__bExcellence__band__bInnovation: [
      {
        id: '" selected="true',
        text: 'No Choice'
      },
      {
        id: 'Articulate__band__bImplement__bSpace__bEfficiency__bInitiatives',
        text: 'Articulate and Implement Space Efficiency Initiatives '
      },
      {
        id: 'Develop__bGlobal__bLearning__bInitiative',
        text: 'Develop Global Learning Initiative '
      },
      {
        id: 'Develop__bStudent__bWork__bExperience__bProgram',
        text: 'Develop Student Work Experience Program '
      },
      {
        id: 'Enhance__bIntellectual__bProperty__bInitiatives',
        text: 'Enhance Intellectual Property Initiatives '
      },
      {
        id: 'Implement__bvalues__uBased__bEmployee__bInitiatives',
        text: 'Implement values-Based Employee Initiatives '
      },
      {
        id: 'Streamline__band__bDocument__ball__bProcesses__band__bProcedures',
        text: 'Streamline and Document all Processes and Procedures '
      },
      {
        id: 'Transform__bCustomer__bService__bExperience',
        text: 'Transform Customer Service Experience '
      },
      {
        id: 'Transition__bfrom__bcol-mdlege__uOwned__bTechnology__bto__bStudent__uOwned__bTechnology',
        text: 'Transition from col - mdlege - Owned Technology to Student - Owned Technology '
      },
    ]
  };


  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router) {
  }

  ngOnInit() {
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
      Email__bAddress: [ '', [ Validators.required, Validators.email ] ],

      dateNeeded: [ '', Validators.required ],
      One__uTime__bor__bRecurring__Q: [ this.recurring[ 0 ].id, [Validators.required, restrictedWords(['Required'])]],
      Recurring__bSchedule: [ this.recurringSchedule[ 0 ].id, [Validators.required, restrictedWords(['Required'])]],
      Please__bExplain__bOther: [ '' ],
      Type__bof__bRequest: [ this.typeOfRequest[ 0 ].id, [Validators.required, restrictedWords(['Required'])] ],
      PI__bCategory: [ this.piCategory[ 0 ].id ],
      If__bUnknown__bPlease__bDescribe__c: [ '' ],
      Proposed__bAudience: [ this.proposedAudience[ 0 ].id, [Validators.required, restrictedWords(['Required'])]],
      Strategic__bgoal__bto__bwhich__bthis__brelates: [ this.strategicGoal[ 0 ].id ],
      Strategic__binitiative__bto__bwhich__bthis__brelates: [ '' ],
      LONGDESCRIPTION: [ '' ],
      Month_Date__bNeeded: [ '' ],
      Day_Date__bNeeded: [ '' ],
      Year_Date__bNeeded: [ '' ],
      TO: [ 'studentcomp@cnm.edu' ],
      FROM: [ 'Web@cnm.edu' ],
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

  addParamsToBody = (obj) => {
    let body = new HttpParams({ fromObject: obj});
    // Object.keys(obj).forEach((k) => {
    //   console.log("hi",k , obj[k]);
    //   body.append( k , obj[k] )
    // });
    return body;
  }

  onSubmit = (f: NgForm) => {

    const body2 = this.addParamsToBody(this.opieForm.value);

console.log(body2.toString())
    const body: HttpParams = new HttpParams()
      .set('TITLE', this.opieForm.value.TITLE)
      .set('First__bName', this.opieForm.value.First__bName)
      .set('Last__bName', this.opieForm.value.Last__bName)
      .set('Email__bAddress', this.opieForm.value.Email__bAddress)
      .set('One__uTime__bor__bRecurring__Q', this.opieForm.value.One__uTime__bor__bRecurring__Q)
      .set('Recurring__bSchedule', this.opieForm.value.Recurring__bSchedule)
      .set('Please__bExplain__bOther', this.opieForm.value.Please__bExplain__bOther)
      .set('Type__bof__bRequest', this.opieForm.value.Type__bof__bRequest)
      .set('PI__bCategory', this.opieForm.value.PI__bCategory)
      .set('If__bUnknown__bPlease__bDescribe__c', this.opieForm.value.If__bUnknown__bPlease__bDescribe__c)
      .set('Proposed__bAudience', this.opieForm.value.Proposed__bAudience)
      .set('Strategic__bgoal__bto__bwhich__bthis__brelates', this.opieForm.value.Strategic__bgoal__bto__bwhich__bthis__brelates)
      .set('Strategic__binitiative__bto__bwhich__bthis__brelates', this.opieForm.value.Strategic__binitiative__bto__bwhich__bthis__brelates)
      .set('LONGDESCRIPTION', this.opieForm.value.LONGDESCRIPTION)
      .set('Month_Date__bNeeded', this.opieForm.value.Month_Date__bNeeded)
      .set('Day_Date__bNeeded', this.opieForm.value.Day_Date__bNeeded)
      .set('Year_Date__bNeeded', this.opieForm.value.Year_Date__bNeeded)
      .set('TO', 'OPIERequests@cnm.edu')
      .set('FROM', this.opieForm.value.Email__bAddress)
      .set('PROJECTNUM', '23')
      .set('PROJECTNAME', 'OPIE')
      .set('DATE_TYPE', '0')

    return this.http.post('https://sos.cnm.edu/MRcgi/MRProcessIncomingForms.pl/',
      body,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Accept', 'text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8'),
        responseType: 'text'
      })
      .subscribe(res => {
        this.router.navigate(['/response-page',{ queryParams: { markup: res }}] );
      }, error => console.error(error));
  }

}
