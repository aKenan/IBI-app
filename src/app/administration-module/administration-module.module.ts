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
import { DxDataGridModule,  DxBulletModule,  DxTemplateModule, DxDateBoxModule, DxCheckBoxModule } from 'devextreme-angular';
import { NekretninaComponent } from './nekretnina/nekretnina.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import {NgProgressHttpModule} from "@ngx-progressbar/http";
import { LokacijaComponent } from './nekretnina/lokacija/lokacija.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, MainComponent, AdminLayoutComponent, SidebarComponent, NavbarComponent, NekretnineComponent, NekretninaComponent, LokacijaComponent],
  imports: [
    CommonModule,
    AdministrationModuleRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule, 
    DxDateBoxModule,   
    DxCheckBoxModule,
    FormsModule,
    NgProgressModule.withConfig({
      spinnerPosition: "left",
      color: "#f71cff"
    }),
    NgProgressHttpModule
  ],
  providers:[    ]
})
export class AdministrationModuleModule { }
