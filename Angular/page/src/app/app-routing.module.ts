import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { NotcomponentComponent } from './notcomponent/notcomponent.component';

const routes: Routes = [
  {path:'',component:NotcomponentComponent},
  {path:'angular',component:AngularComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
