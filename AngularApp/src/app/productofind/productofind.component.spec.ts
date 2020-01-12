import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductofindComponent } from './productofind.component';

describe('ProductofindComponent', () => {
  let component: ProductofindComponent;
  let fixture: ComponentFixture<ProductofindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductofindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductofindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
