import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInfoPageComponent } from './patient-info-page.component';

describe('PatientInfoPageComponent', () => {
  let component: PatientInfoPageComponent;
  let fixture: ComponentFixture<PatientInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientInfoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
