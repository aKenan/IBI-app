import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './auth.guard';
import { AdminLayoutComponent } from '../_layouts/admin-layout/admin-layout.component';
import { NekretnineComponent } from './nekretnine/nekretnine.component';
import { NekretninaComponent } from './nekretnina/nekretnina.component';
import { OpisiComponent } from './opisi/opisi.component';
import { PorukeComponent } from './poruke/poruke.component';
import { IzdvojeneNekretnineComponent } from './izdvojene-nekretnine/izdvojene-nekretnine.component';

const routes: Routes = [
  {path: '', component: AdminLayoutComponent, canActivate: [AuthGuard],
    children : [
      { path : '', component: MainComponent},
      { path: 'nekretnine', component:NekretnineComponent },
      { path: 'nekretnina/:id', component:NekretninaComponent },
      { path: 'opisi', component: OpisiComponent},
      { path: 'poruke', component:PorukeComponent},
      { path: 'izdvojene', component: IzdvojeneNekretnineComponent }
    ]
  },
  {path: 'login', component:LoginComponent, pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationModuleRoutingModule { }
