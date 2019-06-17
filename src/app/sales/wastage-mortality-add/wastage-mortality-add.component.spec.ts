import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WastageMortalityAddComponent } from './wastage-mortality-add.component';

describe('WastageMortalityAddComponent', () => {
  let component: WastageMortalityAddComponent;
  let fixture: ComponentFixture<WastageMortalityAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WastageMortalityAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WastageMortalityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
