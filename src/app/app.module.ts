import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';

const routing: Routes = [
  //ng serve khong co gi thi vao homemodule
  {path:'',loadChildren:() => HomeModule },
  {path:'home',loadChildren:() =>HomeModule },
  {path:'admin',loadChildren:() => AdminModule }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routing)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
