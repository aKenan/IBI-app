import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationModuleRoutingModule } from './administration-module-routing.module';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent, MainComponent],
  imports: [
    CommonModule,
    AdministrationModuleRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[    
  ]
})
export class AdministrationModuleModule { }
