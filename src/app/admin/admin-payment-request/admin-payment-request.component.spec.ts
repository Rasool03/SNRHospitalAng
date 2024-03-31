import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaymentRequestComponent } from './admin-payment-request.component';

describe('AdminPaymentRequestComponent', () => {
  let component: AdminPaymentRequestComponent;
  let fixture: ComponentFixture<AdminPaymentRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPaymentRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPaymentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
