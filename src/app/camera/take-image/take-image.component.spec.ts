import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeImageComponent } from './take-image.component';

describe('TakeImageComponent', () => {
  let component: TakeImageComponent;
  let fixture: ComponentFixture<TakeImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
