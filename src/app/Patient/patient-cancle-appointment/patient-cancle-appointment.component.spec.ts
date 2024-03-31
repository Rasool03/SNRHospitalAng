import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCancleAppointmentComponent } from './patient-cancle-appointment.component';

describe('PatientCancleAppointmentComponent', () => {
  let component: PatientCancleAppointmentComponent;
  let fixture: ComponentFixture<PatientCancleAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientCancleAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientCancleAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
