import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { MainPublicComponent } from './main-public/main-public.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { KontaktComponent } from './kontakt/kontakt.component';

import { AgmCoreModule } from '@agm/core';
import { PorukaComponent } from './kontakt/poruka/poruka.component';
import { NekretninaBasicComponent } from './nekretnina-basic/nekretnina-basic.component';

@NgModule({
  declarations: [MainPublicComponent, KontaktComponent, PorukaComponent, NekretninaBasicComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCCW9P_gbCxPZGkoM1WS4VN9-UTxsrWABs',
      libraries: ['places']
    })
  ]
})
export class PublicModule { }
