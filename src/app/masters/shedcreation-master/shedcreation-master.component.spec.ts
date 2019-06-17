import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShedcreationMasterComponent } from './shedcreation-master.component';

describe('ShedcreationMasterComponent', () => {
  let component: ShedcreationMasterComponent;
  let fixture: ComponentFixture<ShedcreationMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShedcreationMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShedcreationMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
