import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListObservationsComponent } from './list-observations.component';

describe('ListObservationsComponent', () => {
  let component: ListObservationsComponent;
  let fixture: ComponentFixture<ListObservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListObservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListObservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
