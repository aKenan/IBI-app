import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationModuleRoutingModule } from './administration-module-routing.module';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, MainComponent],
  imports: [
    CommonModule,
    AdministrationModuleRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class AdministrationModuleModule { }
