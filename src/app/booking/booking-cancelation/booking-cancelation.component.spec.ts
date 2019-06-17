import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCancelationComponent } from './booking-cancelation.component';

describe('BookingCancelationComponent', () => {
  let component: BookingCancelationComponent;
  let fixture: ComponentFixture<BookingCancelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingCancelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingCancelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
