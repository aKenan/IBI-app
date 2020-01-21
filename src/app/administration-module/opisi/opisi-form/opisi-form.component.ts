import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { INekretnina, IOpisNekretnine } from '../../../../models/nekretnina';
import { AdminService } from '../../../../services/adminService';
import { ISifarnik } from '../../../../models/sifarnik';
import {TipSifarnikaEnum, StatusNekretnine} from '../../../../models/enums/enums'
import { GeneralService } from '../../../../services/generalService';

@Component({
  selector: 'opis-form',
  templateUrl: './opisi-form.component.html',
  styleUrls: ['./opisi-form.component.css']
})

export class OpisiFormComponent implements OnInit {
  @Input() id: number;
  @Output() closeForm: EventEmitter<any> = new EventEmitter(); //true - refresh, false - no refresh

  opisForm : FormGroup;
  opis : IOpisNekretnine = {id:0, aktivan:false, obavezan:false, prikaziUFilteru: false};
  tipoviVrijednosti : ISifarnik[];
  showForm : boolean = false;

  constructor(private router: Router, private ar: ActivatedRoute, private fb: FormBuilder, private adminService: AdminService, private gs: GeneralService) { }

  ngOnInit() {
    this.setSifarnike();
    if(this.id == 0){
      this.setForm(this.opis)
    }
    else{
      //...
    }
  }

  get f() { return this.opisForm.controls };

  setForm(model : IOpisNekretnine){

      this.opisForm = this.fb.group({
        id: [model.id, Validators.required],
        naziv: [model.naziv, [Validators.required, Validators.minLength(2)]],
        opis: [model.opis],
        obavezan: [model.obavezan],
        mjernaJedinica: [model.mjernaJedinica],
        prikaziUFilteru: [model.prikaziUFilteru],
        tipVrijednosti: new FormControl(model.tipVrijednosti, [Validators.required]),
        aktivan: [model.aktivan]
      })

      this.showForm = true;
  }

  setSifarnike(){
    this.adminService.dajSifarnikPoTipu(TipSifarnikaEnum.TipVrijednosti).subscribe(
      data =>{
        this.tipoviVrijednosti = data as ISifarnik[];
        console.log(data as ISifarnik[]);
      }
    )
  }

  zatvoriFormu(){
    this.closeForm.emit(false); 
  }

  dodajAzurirajOpis(){
    if(!this.opisForm.valid){
      this.gs.setAllTouched(this.opisForm);
    }
    else{
      this.adminService.dodajOpisNekretnine(this.opisForm.value).subscribe(
        data =>{
          this.gs.showSuccess("Uspješno ste dodali opis nekretnine");
          this.closeForm.emit(true);
        }
      )
      
    }
  }

}
