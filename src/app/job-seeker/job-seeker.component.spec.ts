import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerComponent } from './job-seeker.component';
import {FormBuilder} from '@angular/forms';

describe('JobSeekerComponent', () => {
  let component: JobSeekerComponent;
  let fixture: ComponentFixture<JobSeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSeekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(JobSeekerComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});
