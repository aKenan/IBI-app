import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/adminService';
import { IOpciPodaci } from '../../../models/nekretnina';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  opciPodaci : IOpciPodaci;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.dajOpcePodatke();
  }

  get fullName() {return this.adminService.getFullName()};

  dajOpcePodatke(){
    this.adminService.dajOpcePodatke().subscribe(
      data =>{
        this.opciPodaci = data;
      }
    )
  }

}
