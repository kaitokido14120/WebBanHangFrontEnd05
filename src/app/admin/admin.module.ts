import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { QuanLySanPhamModule } from './quan-ly-san-pham/quan-ly-san-pham.module';

const adminRouting: Routes = [
  //localhost:4200 hoặc localhost/home thì sẽ vào component nào
  {path:'',component:AdminLayoutComponent,children:[
        {path:'',component:AdminIndexComponent},
        {path:'quanlysanpham',loadChildren:() => QuanLySanPhamModule}
    ]},
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(adminRouting)
  ],
  declarations: [AdminLayoutComponent, AdminIndexComponent]
})
export class AdminModule { }
