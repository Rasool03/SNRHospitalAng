import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewRecordsComponent } from './admin-view-records.component';

describe('AdminViewRecordsComponent', () => {
  let component: AdminViewRecordsComponent;
  let fixture: ComponentFixture<AdminViewRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
