import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsScatterPlotComponent } from './jobs-scatter-plot.component';

describe('JobsScatterPlotComponent', () => {
  let component: JobsScatterPlotComponent;
  let fixture: ComponentFixture<JobsScatterPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsScatterPlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsScatterPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
