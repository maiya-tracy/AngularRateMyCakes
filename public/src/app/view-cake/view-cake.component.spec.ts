import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCakeComponent } from './view-cake.component';

describe('ViewCakeComponent', () => {
  let component: ViewCakeComponent;
  let fixture: ComponentFixture<ViewCakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
