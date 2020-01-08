import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{ path:'IBIAdminPanel', loadChildren : () => import('./administration-module/administration-module.module').then(m => m.AdministrationModuleModule)}
  { path:'IBIAdminPanel', loadChildren: './administration-module/administration-module.module#AdministrationModuleModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
