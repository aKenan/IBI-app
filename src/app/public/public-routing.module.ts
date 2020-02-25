import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPublicComponent } from './main-public/main-public.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { NekretninaFormComponent } from './nekretnina-form/nekretnina-form.component';

const routes: Routes = [
  {
    path: '', component: MainPublicComponent,    
  },
  {
    path:'Kontakt', component: KontaktComponent
  },
  {
    path:'nekretnina/:id', component: NekretninaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
