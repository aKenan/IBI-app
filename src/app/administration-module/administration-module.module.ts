import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationModuleRoutingModule } from './administration-module-routing.module';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminLayoutComponent } from '../_layouts/admin-layout/admin-layout.component';

import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NekretnineComponent } from './nekretnine/nekretnine.component';
import { DxDataGridModule,  DxBulletModule,  DxTemplateModule, DxDateBoxModule, DxCheckBoxModule } from 'devextreme-angular';
import { NekretninaComponent } from './nekretnina/nekretnina.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from "@ngx-progressbar/http";
import { LokacijaComponent } from './nekretnina/lokacija/lokacija.component';
import { FormsModule } from '@angular/forms';
import { OpisiComponent } from './opisi/opisi.component';
import { OpisiFormComponent } from './opisi/opisi-form/opisi-form.component';
import { OpisiNekretnineComponent } from './nekretnina/opisi-nekretnine/opisi-nekretnine.component';
import { OpisNekretnineFormComponent } from './nekretnina/opisi-nekretnine/opis-nekretnine-form/opis-nekretnine-form.component';
import { SlikeComponent } from './nekretnina/slike/slike.component';
import { SlikeUploadComponent } from './nekretnina/slike/slike-upload/slike-upload.component';
import { DragDropDirective } from './dragdrop.directive';

import { BsDropdownModule } from 'ngx-bootstrap';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PorukeComponent } from './poruke/poruke.component';
import { PorukaDetaljiComponent } from './poruke/poruka-detalji/poruka-detalji.component';
import { IzdvojeneNekretnineComponent } from './izdvojene-nekretnine/izdvojene-nekretnine.component';
import { IzdvojenaNekretninaFormComponent } from './izdvojene-nekretnine/izdvojena-nekretnina-form/izdvojena-nekretnina-form.component';
import { SidebarComponent } from './sidebar/sidebar.component';

 
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [LoginComponent, MainComponent, 
    AdminLayoutComponent, NavbarComponent, 
    NekretnineComponent, NekretninaComponent, LokacijaComponent, SidebarComponent,
    OpisiComponent, OpisiFormComponent, OpisiNekretnineComponent, OpisNekretnineFormComponent, 
    SlikeComponent, SlikeUploadComponent, DragDropDirective, PorukeComponent, PorukaDetaljiComponent, IzdvojeneNekretnineComponent, IzdvojenaNekretninaFormComponent],
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
    BsDropdownModule.forRoot(),
    NgProgressModule.withConfig({
      spinnerPosition: "left",
      color: "#f71cff"
    }),
    NgProgressHttpModule,
    PerfectScrollbarModule
  ],
  providers:[ {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }   ],
  bootstrap: [AdminLayoutComponent]
})
export class AdministrationModuleModule { }
