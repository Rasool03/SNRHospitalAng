import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillRecipetComponent } from './bill-recipet.component';

describe('BillRecipetComponent', () => {
  let component: BillRecipetComponent;
  let fixture: ComponentFixture<BillRecipetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillRecipetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillRecipetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
