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
export class MainPublicComponent implements OnInit {
  stranica:number = 1;
  imaJos:boolean = true;
  ready:boolean = true;
  showSwipper : boolean = false;

  rezultatPretrage:INekretninaBasic[] = [];
  izdvojene: INekretninaBasic[] = [];

  public slideConfig: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 2,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    pagination: false,
    watchSlidesProgress: true,
    navigation:true,
    loop:true,
    slidesOffsetAfter: 100,
    spaceBetween: 50,
    lazy:{
      loadOnTransitionStart:true
    },
    breakpoints : {
      800: {
        slidesPerView: 1
      }
    }    ,
    roundLengths: true,
    autoplay:{
      delay:5000,
      disableOnInteraction: false      
    } 
  };
  constructor(private publicService:PublicService ) { }

  ngOnInit() {
    this.dajSve();
    this.dajIzdvojene();
  }


  dajSve(){
    this.publicService.dajsveNekretnine(this.stranica).subscribe(
      data =>{
        this.imaJos = (data as INekretninaBasic[]).length >= 2;
        this.rezultatPretrage = this.rezultatPretrage.concat(data as INekretninaBasic[]);
        this.ready=true;
      }
    )
  }

  dajJos(){
    this.stranica++;
    this.dajSve();
  }

  dajIzdvojene(){
    this.publicService.dajIzdvojeneNekretnine().subscribe(
      data =>{
        this.izdvojene = data;
        if(data.length > 0)
          this.showSwipper = true;
        //const swiper = document.querySelectorAll('.swiper-container');
        //swiper['swiper'].loopCreate();
      }
    )
  }

  
  
}
