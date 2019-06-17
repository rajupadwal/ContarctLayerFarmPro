import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyprofileMasterComponent } from './companyprofile-master.component';

describe('CompanyprofileMasterComponent', () => {
  let component: CompanyprofileMasterComponent;
  let fixture: ComponentFixture<CompanyprofileMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyprofileMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyprofileMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
