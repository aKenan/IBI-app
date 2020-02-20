import { Component, OnInit } from '@angular/core';
import { PublicService } from '../../../services/publicService';
import { DllModel, INekretninaBasic } from '../../../models/public';

@Component({
  selector: 'app-main-public',
  templateUrl: './main-public.component.html',
  styleUrls: ['./main-public.component.css']
})
export class MainPublicComponent implements OnInit {
  stranica:number = 1;
  imaJos:boolean = true;
  
  rezultatPretrage:INekretninaBasic[] = [];
  constructor(private publicService:PublicService ) { }

  ngOnInit() {
    this.dajSve();
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
