import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangChiTietSanPhamComponent } from './trang-chi-tiet-san-pham.component';

describe('TrangChiTietSanPhamComponent', () => {
  let component: TrangChiTietSanPhamComponent;
  let fixture: ComponentFixture<TrangChiTietSanPhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangChiTietSanPhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangChiTietSanPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
