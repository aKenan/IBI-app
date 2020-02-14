import { Component, OnInit } from '@angular/core';
import { IOpisNekretnine } from '../../../models/nekretnina';
import { AdminService } from '../../../services/adminService';

@Component({
  selector: 'app-opisi',
  templateUrl: './opisi.component.html',
  styleUrls: ['./opisi.component.css']
})
export class OpisiComponent implements OnInit {
  odabraniId = 0;
  prikaziFormu = false;
  opisi: IOpisNekretnine[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.dajOpise();
  }

  noviOpisForm(){
    this.odabraniId = 0;
    this.prikaziFormu = true;
  }

  zatvoriFormu(refresh:boolean){
    this.prikaziFormu = false;
    if(refresh){
      this.dajOpise();
    }
  }

  izmjeniForm(id: number){
    this.odabraniId = id;
    this.prikaziFormu = true;
  }

  dajOpise(){
    this.adminService.dajSveOpise().subscribe(
      data =>{
        this.opisi = data as IOpisNekretnine[];
      }
    )
  }

}
