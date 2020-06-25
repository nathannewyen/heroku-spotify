import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackProfileComponent } from './track-profile.component';

describe('TrackProfileComponent', () => {
  let component: TrackProfileComponent;
  let fixture: ComponentFixture<TrackProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
