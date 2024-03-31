import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInfoPageComponent } from './admin-info-page.component';

describe('AdminInfoPageComponent', () => {
  let component: AdminInfoPageComponent;
  let fixture: ComponentFixture<AdminInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInfoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
