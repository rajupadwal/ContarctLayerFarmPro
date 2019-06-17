import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationMasterComponent } from './vaccination-master.component';

describe('VaccinationMasterComponent', () => {
  let component: VaccinationMasterComponent;
  let fixture: ComponentFixture<VaccinationMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinationMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
