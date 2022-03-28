import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPresenatationComponent } from './filter-presenatation.component';

describe('FilterPresenatationComponent', () => {
  let component: FilterPresenatationComponent;
  let fixture: ComponentFixture<FilterPresenatationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterPresenatationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPresenatationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
