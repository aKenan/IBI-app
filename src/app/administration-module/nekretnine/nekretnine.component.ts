import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/adminService';
import { INekretnina } from '../../../models/nekretnina';
import { GeneralService } from '../../../services/generalService';
import Swal from 'sweetalert2';


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

  aktivirajNekretninu(id:any){
    console.log(id);
    let mod = this.nekretnine.filter(p=>p.id == id)[0];

    Swal.fire({
      title: 'Da li ste sigurni? Nekretnina će biti vidljiva posjetiocima stranice',
      text: "",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Da!',
      cancelButtonText: "Odustani"
    }).then((result) => {
      if (result.value) {
        this.adminService.aktivirajNekretninu(mod).subscribe(
            data => {
              this.dajNekretnine();
              this.generalService.showSuccess("Uspješno ste aktivirali nekretninu", 2000);
            }
          )
        }
    })
  }

  deaktivirajNekretninu(id:any){
    console.log(id);
    let mod = this.nekretnine.filter(p=>p.id == id)[0];

    Swal.fire({
      title: 'Da li ste sigurni? Nekretnina više neće biti vidljiva posjetiocima stranice',
      text: "",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Da!',
      cancelButtonText: "Odustani"
    }).then((result) => {
      if (result.value) {
        this.adminService.dektivirajNekretninu(mod).subscribe(
            data => {
              this.dajNekretnine();
              this.generalService.showSuccess("Uspješno ste deaktivirali nekretninu", 2000);
            }
          )
        }
    })
  }
  

}
