import {Routes, RouterModule} from '@angular/router'
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';

const routing: Routes = [
    //ng serve khong co gi thi vao homemodule
    {path:'',loadChildren:() => HomeModule },
    {path:'home',loadChildren:() =>HomeModule },
    {path:'admin',loadChildren:() => AdminModule }
 ];
 
 export const appRoutes = RouterModule.forRoot(routing);
 