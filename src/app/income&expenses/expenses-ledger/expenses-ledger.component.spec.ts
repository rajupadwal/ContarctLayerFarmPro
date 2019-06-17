import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesLedgerComponent } from './expenses-ledger.component';

describe('ExpensesLedgerComponent', () => {
  let component: ExpensesLedgerComponent;
  let fixture: ComponentFixture<ExpensesLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
