import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChikEggsBillingComponent } from './chik-eggs-billing.component';

describe('ChikEggsBillingComponent', () => {
  let component: ChikEggsBillingComponent;
  let fixture: ComponentFixture<ChikEggsBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChikEggsBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChikEggsBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
