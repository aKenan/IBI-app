import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PublicService } from '../../../services/publicService';
import { DllModel, INekretninaBasic } from '../../../models/public';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { convertToR3QueryMetadata } from '@angular/core/src/render3/jit/directive';

@Component({
  selector: 'app-main-public',
  templateUrl: './main-public.component.html',
  styleUrls: ['./main-public.component.css']
})
export class MainPublicComponent implements OnInit, AfterViewInit {
  stranica:number = 1;
  imaJos:boolean = true;

  rezultatPretrage:INekretninaBasic[] = [];

  public slideConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false,
    loop:true,
    autoplay:{
      delay:2500,
      disableOnInteraction: false
    } 
  };
  constructor(private publicService:PublicService ) { }

  ngOnInit() {
    this.dajSve();
  }

  ngAfterViewInit(){
    const swiper = document.querySelector('.swiper-container');
    swiper['swiper'].loopCreate();
  }

  dajSve(){
    this.publicService.dajsveNekretnine(this.stranica).subscribe(
      data =>{
        this.imaJos = (data as INekretninaBasic[]).length >= 2;
        this.rezultatPretrage = this.rezultatPretrage.concat(data as INekretninaBasic[]);
      }
    )
  }

  dajJos(){
    this.stranica++;
    this.dajSve();
  }

  
  
}
