import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationModuleRoutingModule } from './administration-module-routing.module';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminLayoutComponent } from '../_layouts/admin-layout/admin-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NekretnineComponent } from './nekretnine/nekretnine.component';
import { DxDataGridModule,  DxBulletModule,  DxTemplateModule } from 'devextreme-angular';
import { HttpConfigInterceptor} from './httpconfig.interceptor';


@NgModule({
  declarations: [LoginComponent, MainComponent, AdminLayoutComponent, SidebarComponent, NavbarComponent, NekretnineComponent],
  imports: [
    CommonModule,
    AdministrationModuleRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule
  ],
  providers:[    
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ]
})
export class AdministrationModuleModule { }
