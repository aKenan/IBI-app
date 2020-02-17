import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPublicComponent } from './main-public/main-public.component';
import { KontaktComponent } from './kontakt/kontakt.component';

const routes: Routes = [
  {
    path: '', component: MainPublicComponent,    
  },
  {
    path:'Kontakt', component: KontaktComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
