import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './_layouts/public-layout/public-layout.component';
import { EmptyLayoutComponent } from './_layouts/empty-layout/empty-layout.component';

const routes: Routes = [
  //{ path:'IBIAdminPanel', loadChildren : () => import('./administration-module/administration-module.module').then(m => m.AdministrationModuleModule)}
  { 
    path: '', component:PublicLayoutComponent,
    children :[
      { path:'', loadChildren:'./public/public.module#PublicModule' }
    ] 
  },
  {
    path : '',  component : EmptyLayoutComponent,
    children : [
      {path:'IBIAdminPanel', loadChildren: './administration-module/administration-module.module#AdministrationModuleModule'}
    ]
  },  
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
