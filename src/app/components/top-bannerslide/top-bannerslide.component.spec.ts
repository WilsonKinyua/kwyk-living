import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBannerslideComponent } from './top-bannerslide.component';

describe('TopBannerslideComponent', () => {
  let component: TopBannerslideComponent;
  let fixture: ComponentFixture<TopBannerslideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBannerslideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBannerslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
