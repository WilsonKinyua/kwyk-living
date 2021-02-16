import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonnectComponent } from './konnect.component';

describe('KonnectComponent', () => {
  let component: KonnectComponent;
  let fixture: ComponentFixture<KonnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonnectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
