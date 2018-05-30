import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersdisplayComponent } from './usersdisplay.component';

describe('UsersdisplayComponent', () => {
  let component: UsersdisplayComponent;
  let fixture: ComponentFixture<UsersdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
