import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IIzdvojenaNekretninaViewModel } from '../../../../models/nekretnina';
import { AdminService } from '../../../../services/adminService';
import { INekretnina } from '../../../../models/public';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GeneralService } from '../../../../services/generalService';

@Component({
  selector: 'izdvojena-nekretnina-form',
  templateUrl: './izdvojena-nekretnina-form.component.html',
  styleUrls: ['./izdvojena-nekretnina-form.component.css']
})
export class IzdvojenaNekretninaFormComponent implements OnInit {
  @Input() nekretninaId : number;
  @Input() nova : boolean;
  @Output() zavrsenaAkcija : EventEmitter<any> = new EventEmitter();;

  showForm : boolean = false;
  izdvojenaNekretninaForm: FormGroup;

  izdvojenaNekretnina : IIzdvojenaNekretninaViewModel = {nekretninaId : this.nekretninaId, vaziOd : new Date(), aktivan:true};
  nekretnina : INekretnina;

  constructor(private adminService : AdminService, private fb : FormBuilder, private gs : GeneralService) { }

  get f() { return this.izdvojenaNekretninaForm.controls};

  ngOnInit() {
    console.log("nova", this.nova);
    if(!this.nova) 
    {
      this.adminService.dajIzdvojenuNekretninu(this.nekretninaId).subscribe(
        data =>{
          this.izdvojenaNekretnina = data;
          this.initForm(data);
        }
      )
    } else{
      this.adminService.dajNekretninu(this.nekretninaId).subscribe(
        data =>{
          this.nekretnina = data;
          this.initForm(this.izdvojenaNekretnina);
        }
      )
    }
  }

  initForm(izdvojenaNekretnina : IIzdvojenaNekretninaViewModel){
    this.izdvojenaNekretninaForm = this.fb.group({
        nekretninaId: this.nekretninaId,
        vaziOd: [izdvojenaNekretnina.vaziOd],
        vaziDo: [izdvojenaNekretnina.vaziDo],
        aktivan : izdvojenaNekretnina.aktivan
      })
      this.showForm = true;
  }

  dodajAzurirajIzdvojenuNekretninu(){
    if(this.izdvojenaNekretninaForm.valid){
      if(this.nova){
        this.adminService.dodajIzdvojenuNekretninu(this.izdvojenaNekretninaForm.value).subscribe(
          data =>{
            this.gs.showSuccess("Uspješno ste pohranili izdvojenu nekretninu", 1500);
            this.zavrsenaAkcija.emit();
          }
        )
      }
      else{
        this.adminService.azurirajIzdvojenuNekretninu(this.izdvojenaNekretninaForm.value).subscribe(
          data =>{
            this.gs.showSuccess("Uspješno ste ažurirali izdvojenu nekretninu", 1500);
            this.zavrsenaAkcija.emit();
          }
        )
      }
    }
  }

  odustani(){
    this.zavrsenaAkcija.emit();
  }

}
