import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusComponent } from './telescope.component';

describe('TelescopeComponent', () => {
  let component: FocusComponent;
  let fixture: ComponentFixture<FocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
