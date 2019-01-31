import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpieFormComponent } from './opie-form.component';

describe('OpieFormComponent', () => {
  let component: OpieFormComponent;
  let fixture: ComponentFixture<OpieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpieFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
