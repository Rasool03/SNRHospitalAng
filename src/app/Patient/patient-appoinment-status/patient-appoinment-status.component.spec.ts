import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAppoinmentStatusComponent } from './patient-appoinment-status.component';

describe('PatientAppoinmentStatusComponent', () => {
  let component: PatientAppoinmentStatusComponent;
  let fixture: ComponentFixture<PatientAppoinmentStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAppoinmentStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientAppoinmentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
