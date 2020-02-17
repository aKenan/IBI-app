import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/adminService';
import { GeneralService } from '../../../services/generalService';
import { IPorukaAdmin } from '../../../models/admin';
import { IPoruka } from '../../../models/public';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-poruke',
  templateUrl: './poruke.component.html',
  styleUrls: ['./poruke.component.css']
})
export class PorukeComponent implements OnInit {
  odabranaPoruka : IPoruka;
  poruke:IPorukaAdmin[] = [];

  constructor(private adminService: AdminService, private gs:GeneralService, private modalService: NgbModal) { }

  ngOnInit() {
    this.dajPoruke();
  }

  dajPoruke(){
    this.adminService.dajPoruke().subscribe(
      data=>{
        this.poruke = data;
      }
    )
  }

  procitajPoruku(porukaModal : any, id:number){
    var poruka = this.poruke.filter(p=>p.id == id)[0];
    this.odabranaPoruka = poruka;

    if(!poruka.procitana)
      this.postaviProcitana(poruka);

    this.otvoriModal(porukaModal);
  }

  obrisiPoruku(id:number){
    let result = this.gs.showConfirm("Da li ste sigurni", 'warning').subscribe(
      data=>{
        if(data == true)
         {
          this.adminService.obrisiPoruku(id).subscribe(
            data=>{
              this.dajPoruke();
            }
          )
         }
      }
    );
    
  }

  //modal
  otvoriModal(porukaModal) {
    //this.setModel(model);
    this.modalService.open(porukaModal, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      
    }, (reason) => {
      
    });
  }

  dismissModal(model:any){
    this.dajPoruke();
    this.modalService.dismissAll();
  }

  postaviProcitana(poruka:IPorukaAdmin){
    this.adminService.postaviPorukuProcitana(poruka).subscribe(
      data =>{
        this.dajPoruke();
      }
    )
  }

}
