import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskObservationsComponent } from './task-observations.component';

describe('TaskObservationsComponent', () => {
  let component: TaskObservationsComponent;
  let fixture: ComponentFixture<TaskObservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskObservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskObservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
