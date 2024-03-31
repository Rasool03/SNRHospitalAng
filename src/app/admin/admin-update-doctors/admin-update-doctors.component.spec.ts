import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateDoctorsComponent } from './admin-update-doctors.component';

describe('AdminUpdateDoctorsComponent', () => {
  let component: AdminUpdateDoctorsComponent;
  let fixture: ComponentFixture<AdminUpdateDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdateDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUpdateDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
