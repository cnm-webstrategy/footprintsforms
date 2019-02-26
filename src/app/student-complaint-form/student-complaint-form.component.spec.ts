import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComplaintFormComponent } from './student-complaint-form.component';

describe('StudentComplaintFormComponent', () => {
  let component: StudentComplaintFormComponent;
  let fixture: ComponentFixture<StudentComplaintFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentComplaintFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComplaintFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
