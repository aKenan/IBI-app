import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './auth.guard';
import { AdminLayoutComponent } from '../_layouts/admin-layout/admin-layout.component';
import { NekretnineComponent } from './nekretnine/nekretnine.component';
import { NekretninaComponent } from './nekretnina/nekretnina.component';

const routes: Routes = [
  {path: '', component: AdminLayoutComponent, canActivate: [AuthGuard],
    children : [
      { path : '', component: MainComponent},
      { path: 'nekretnine', component:NekretnineComponent },
      { path: 'nekretnina/:id', component:NekretninaComponent }
    ]
  },
  {path: 'login', component:LoginComponent, pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationModuleRoutingModule { }
