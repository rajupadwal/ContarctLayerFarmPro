import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReturnPaymentComponent } from './sales-return-payment.component';

describe('SalesReturnPaymentComponent', () => {
  let component: SalesReturnPaymentComponent;
  let fixture: ComponentFixture<SalesReturnPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesReturnPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesReturnPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
