import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistProfileComponent } from './playlist-profile.component';

describe('PlaylistProfileComponent', () => {
  let component: PlaylistProfileComponent;
  let fixture: ComponentFixture<PlaylistProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
