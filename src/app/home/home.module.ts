import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { TrangChiTietSanPhamComponent } from './trang-chi-tiet-san-pham/trang-chi-tiet-san-pham.component';
import { GioHangComponent } from './gio-hang/gio-hang.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
const homeRouting: Routes = [
  //localhost:4200 hoặc localhost/home thì sẽ vào component nào
  {path:'',component:HomeLayoutComponent,children:[
      {path:'',component:TrangChuComponent}, // Những trang kế thừa từ layout
      {path:'chitietsanpham',component:TrangChiTietSanPhamComponent}
    ]},
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(homeRouting)
  ],
  declarations: [TrangChuComponent, TrangChiTietSanPhamComponent, GioHangComponent, HomeLayoutComponent]
})
export class HomeModule { }
