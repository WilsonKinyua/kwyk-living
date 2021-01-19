import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletsNearYouComponent } from './outlets-near-you.component';

describe('OutletsNearYouComponent', () => {
  let component: OutletsNearYouComponent;
  let fixture: ComponentFixture<OutletsNearYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutletsNearYouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletsNearYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
