import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightDetailsComponent } from './night-details.component';

describe('NightDetailsComponent', () => {
  let component: NightDetailsComponent;
  let fixture: ComponentFixture<NightDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
