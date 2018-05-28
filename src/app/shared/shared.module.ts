import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanPhamComponent } from './san-pham/san-pham.component';
import { DanhSachSanPhamComponent } from './danh-sach-san-pham/danh-sach-san-pham.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[SanPhamComponent,DanhSachSanPhamComponent],
  declarations: [SanPhamComponent, DanhSachSanPhamComponent]
})
export class SharedModule { }
