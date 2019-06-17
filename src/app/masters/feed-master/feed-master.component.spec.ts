import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedMasterComponent } from './feed-master.component';

describe('FeedMasterComponent', () => {
  let component: FeedMasterComponent;
  let fixture: ComponentFixture<FeedMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
