import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolingComponent } from './filter.component';

describe('TelescopeComponent', () => {
  let component: CoolingComponent;
  let fixture: ComponentFixture<CoolingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoolingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
