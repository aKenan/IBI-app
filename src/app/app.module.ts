import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PublicLayoutComponent } from './_layouts/public-layout/public-layout.component';
import { EmptyLayoutComponent } from './_layouts/empty-layout/empty-layout.component';
import { HttpConfigInterceptor } from './administration-module/httpconfig.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    PublicLayoutComponent,
    EmptyLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers:[    
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
