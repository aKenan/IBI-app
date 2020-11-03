import { Component, OnInit } from '@angular/core';
import { PublicService } from '../../../services/publicService';
import { DllModel, INekretninaBasic } from '../../../models/public';

@Component({
  selector: 'pretraga-form',
  templateUrl: './pretraga.component.html',
  styleUrls: ['./pretraga.component.css']
})
export class PretragaComponent implements OnInit {
  viseOpcija : boolean = false;

  tipNekretnine : number = 0;
  tipoviNekretnine: DllModel[] = [];
  rezultatPretrage:INekretninaBasic[] = [];
  pojam:string = '';
  tipProdaje : number = 0;

  constructor(private publicService: PublicService) { }

  ngOnInit() {
    this.dajTipoveNekretnine();
  }

  dajTipoveNekretnine(){
    this.publicService.dajTipoveNekretnine().subscribe(
      data =>{        
        this.tipoviNekretnine = data;
      }
    )
  }

  pretraga(){
    if(this.pojam.length >= 3)      
      this.publicService.pretragaPojam(this.pojam).subscribe(
        data =>{
          this.rezultatPretrage = data;
        }
      )
    else
      alert("Unesite minilano 3 karaktera(WARNING)");
    // this.publicService.pretraga(this.pojam, this.tipProdaje, this.tipNekretnine).subscribe(
    //   data =>{
    //     this.rezultatPretrage = data;
    //   }
    // )
  }

}
