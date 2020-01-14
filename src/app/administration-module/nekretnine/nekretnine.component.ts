import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/adminService';
import { INekretnina } from '../../../models/nekretnina';
import { GeneralService } from '../../../services/generalService';


@Component({
  selector: 'app-nekretnine',
  templateUrl: './nekretnine.component.html',
  styleUrls: ['./nekretnine.component.css']
})
export class NekretnineComponent implements OnInit {

  nekretnine: INekretnina[];
  constructor(private adminService: AdminService, private generalService : GeneralService) { }

  ngOnInit() { 
    this.dajNekretnine();
  }

  dajNekretnine(){
    this.adminService.dajNekretnine().subscribe(
      data =>{
        this.nekretnine = data;
      }
      ,error =>{
        this.generalService.showError("Greška prilikom dohvata nekretnina", error.error);
      }
      
    )
  }

}
