import { Component, OnInit } from '@angular/core';
import { PublicService } from '../../../services/publicService';
import { DllModel } from '../../../models/public';

@Component({
  selector: 'app-main-public',
  templateUrl: './main-public.component.html',
  styleUrls: ['./main-public.component.css']
})
export class MainPublicComponent implements OnInit {
  pojam:string = '';
  tipProdaje : number = 0;
  tipNekretnine : number = 0;
  tipoviNekretnine: DllModel[] = [];
  constructor(private publicService:PublicService ) { }

  ngOnInit() {
    this.dajTipoveNekretnine()
  }

  dajTipoveNekretnine(){
    this.publicService.dajTipoveNekretnine().subscribe(
      data =>{
        this.tipoviNekretnine = data;
      }
    )
  }

  pretraga(){
    this.publicService.pretraga(this.pojam, this.tipProdaje, this.tipNekretnine).subscribe(
      data =>{
        console.log(data);
      }
    )
  }
  
}
