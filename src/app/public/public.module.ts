import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { MainPublicComponent } from './main-public/main-public.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { KontaktComponent } from './kontakt/kontakt.component';

import { AgmCoreModule } from '@agm/core';
import { PorukaComponent } from './kontakt/poruka/poruka.component';
import { NekretninaBasicComponent } from './nekretnina-basic/nekretnina-basic.component';
import { PretragaComponent } from './pretraga-form/pretraga.component';
import { SwiperModule, SwiperConfigInterface,
  SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { NekretninaFormComponent } from './nekretnina-form/nekretnina-form.component';
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  declarations: [MainPublicComponent, KontaktComponent, PorukaComponent, NekretninaBasicComponent, PretragaComponent, NekretninaFormComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SwiperModule,
    NgxGalleryModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCCW9P_gbCxPZGkoM1WS4VN9-UTxsrWABs',
      libraries: ['places']
    })
  ]
})
export class PublicModule { }
