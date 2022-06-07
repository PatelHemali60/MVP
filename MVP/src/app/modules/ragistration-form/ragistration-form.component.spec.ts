import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RagistrationFormComponent } from './ragistration-form.component';

describe('RagistrationFormComponent', () => {
  let component: RagistrationFormComponent;
  let fixture: ComponentFixture<RagistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RagistrationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RagistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
