import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opisi',
  templateUrl: './opisi.component.html',
  styleUrls: ['./opisi.component.css']
})
export class OpisiComponent implements OnInit {
  odabraniId = 0;
  prikaziFormu = false;
  constructor() { }

  ngOnInit() {
  }

  noviOpisForm(){
    this.odabraniId = 0;
    this.prikaziFormu = true;
  }

  zatvoriFormu(refresh:boolean){
    this.prikaziFormu = false;
    if(refresh){
      //osvjezi tabelu
    }
  }

}
