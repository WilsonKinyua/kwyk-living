import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleShopProductsListComponent } from './single-shop-products-list.component';

describe('SingleShopProductsListComponent', () => {
  let component: SingleShopProductsListComponent;
  let fixture: ComponentFixture<SingleShopProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleShopProductsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleShopProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
