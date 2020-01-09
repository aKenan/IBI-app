import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPublicComponent } from './main-public/main-public.component';

const routes: Routes = [
  {
    path: '', component: MainPublicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
