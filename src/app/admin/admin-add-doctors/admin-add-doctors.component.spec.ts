import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddDoctorsComponent } from './admin-add-doctors.component';

describe('AdminAddDoctorsComponent', () => {
  let component: AdminAddDoctorsComponent;
  let fixture: ComponentFixture<AdminAddDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
