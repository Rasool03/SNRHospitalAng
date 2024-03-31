import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalLoginPageComponent } from './hospital-login-page.component';

describe('HospitalLoginPageComponent', () => {
  let component: HospitalLoginPageComponent;
  let fixture: ComponentFixture<HospitalLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalLoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
