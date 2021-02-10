import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularOnKwykComponent } from './popular-on-kwyk.component';

describe('PopularOnKwykComponent', () => {
  let component: PopularOnKwykComponent;
  let fixture: ComponentFixture<PopularOnKwykComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularOnKwykComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularOnKwykComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
