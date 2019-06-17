import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingReconcilationComponent } from './booking-reconcilation.component';

describe('BookingReconcilationComponent', () => {
  let component: BookingReconcilationComponent;
  let fixture: ComponentFixture<BookingReconcilationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingReconcilationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingReconcilationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
