import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableTableHeaderComponent } from './sortable-table-header.component';

describe('SortableTableHeaderComponent', () => {
  let component: SortableTableHeaderComponent;
  let fixture: ComponentFixture<SortableTableHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortableTableHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
