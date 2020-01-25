import { Component, OnInit, Input, Output } from '@angular/core';
import { AdminService} from '../../../../services/adminService'
import { ILokacija } from '../../../../models/nekretnina';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lokacija',
  templateUrl: './lokacija.component.html',
  styleUrls: ['./lokacija.component.css']
})

export class LokacijaComponent implements OnInit {
  @Input() lokacijaId: number;
  @Output() lokacijaSelected: EventEmitter<any> = new EventEmitter();

  lokacije : ILokacija[];
  lokacijeL1 : ILokacija[];
  lokacijeL2 : ILokacija[];
  lokacijeL3 : ILokacija[];

  lokacija1: number;
  lokacija2: number;
  lokacija3: number;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    console.log(this.lokacijaId);
    this.setLokacije()
  }

  setLokacije(){
    this.adminService.dajSveLokacije().subscribe(
      data => {
        this.lokacije = data as ILokacija[];
        this.lokacijeL1 = this.lokacije.filter(p=>p.nivo == 1);

        this.bindLokacije();
      }
    )
  }

  bindLokacije(){
    if(this.lokacijaId && this.lokacijaId > 0) //ako ima lokacija
    {
      let odabranaLokacija = this.lokacije.filter(p=>p.id == this.lokacijaId)[0];
      this.lokacija3 = this.lokacijaId;
      this.lokacijeL3 = this.lokacije.filter(p=>p.lokacijaParentId == odabranaLokacija.lokacijaParentId);

      this.lokacija2 = odabranaLokacija.lokacijaParentId;
      var odabranaLokacijaL2 = this.lokacije.filter(p=>p.id == this.lokacija2)[0];
      this.lokacijeL2 = this.lokacije.filter(p=>p.lokacijaParentId == odabranaLokacijaL2.lokacijaParentId);

      this.lokacija1 = odabranaLokacijaL2.lokacijaParentId;
      this.lokacijeL1 = this.lokacije.filter(p=>p.nivo == 1);
    }
  }

  l1Change(){
    console.log(this.lokacija1);
    console.log(this.lokacije);
    this.lokacijeL2 = this.lokacije.filter(p=>p.lokacijaParentId == this.lokacija1);
    this.lokacijeL3 = [];

    this.lokacija2 = null;
    this.lokacija3 = null;
  }

  l2Change(){
    this.lokacijeL3 = this.lokacije.filter(p=>p.lokacijaParentId == this.lokacija2);

    this.lokacija3 = null;
  }

  l3Change(){
    this.lokacijaSelected.emit(this.lokacija3.toString());
  }

}
