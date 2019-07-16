import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateMyCakesComponent } from './rate-my-cakes.component';

describe('RateMyCakesComponent', () => {
  let component: RateMyCakesComponent;
  let fixture: ComponentFixture<RateMyCakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateMyCakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateMyCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
