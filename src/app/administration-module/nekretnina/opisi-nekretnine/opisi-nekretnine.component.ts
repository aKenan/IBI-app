import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { IOpisNekretnine, INekretninaOpisNekretnine } from '../../../../models/nekretnina';
import { AdminService } from '../../../../services/adminService';
import { TipVrijednosti } from '../../../../models/enums/enums';

@Component({
  selector: 'opisi-nekretnine',
  templateUrl: './opisi-nekretnine.component.html',
  styleUrls: ['./opisi-nekretnine.component.css']
})
export class OpisiNekretnineComponent implements OnInit {
  @Input() nekretninaId : number;
  opis: INekretninaOpisNekretnine;
  opisiNekretnina : INekretninaOpisNekretnine[];

  tipVrijednostiDaNe : number = TipVrijednosti.DaNe;
  tipVrijednostiDatum : number = TipVrijednosti.Datum;
  
  constructor(private modalService: NgbModal, private adminService: AdminService) { }

  ngOnInit() {
    this.dajOpiseZaNekretninu();
  }



  open(content, model:INekretninaOpisNekretnine) {
    console.log("Model ", model);
    this.setModel(model);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
    }, (reason) => {
      
    });
  }

  setModel(model : INekretninaOpisNekretnine){
    if(model == null)
      this.opis = {id:0, nekretninaId : this.nekretninaId, opisId:null, aktivan:true, vrijednost:""};
      else{
        this.opis = model;
      }
  }

  dajOpiseZaNekretninu(){
    this.adminService.dajOpiseZaNekretninu(this.nekretninaId).subscribe(
      data =>{
        this.opisiNekretnina = data as INekretninaOpisNekretnine[];
      }
    )
  }

  dismissModal(model:any){
    this.dajOpiseZaNekretninu(); 
    this.modalService.dismissAll();
  }

  izmjeniForm(content, id:number){
    var modelZaIzmjenu = this.opisiNekretnina.filter(p=>p.id == id)[0];
    this.open(content, modelZaIzmjenu);
  }
}
