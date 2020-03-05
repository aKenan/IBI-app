import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AdminService } from '../../../services/adminService';
import { IIzdvojenaNekretninaViewModel } from '../../../models/nekretnina';


@Component({
  selector: 'izdvojene-nekretnine',
  templateUrl: './izdvojene-nekretnine.component.html',
  styleUrls: ['./izdvojene-nekretnine.component.css']
})
export class IzdvojeneNekretnineComponent implements OnInit {
  nekretninaId : number;
  izdvojeneNekretnine : IIzdvojenaNekretninaViewModel[] = [];
  constructor(private adminService: AdminService, private modalService : NgbModal) { }

  ngOnInit() {
    this.dajIzdvojeneNekretnine()
  }

  dajIzdvojeneNekretnine(){
    this.adminService.dajIzdvojeneNekretnine().subscribe(
      data =>{
        this.izdvojeneNekretnine = data;
      }
    )
  }

  izmjeni(content: any, nekretninaId: any){
    this.nekretninaId = nekretninaId;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
    }, (reason) => {
      
    });
  }

  dismissModal(model:any){
    this.dajIzdvojeneNekretnine()
    this.modalService.dismissAll();
  }

}
