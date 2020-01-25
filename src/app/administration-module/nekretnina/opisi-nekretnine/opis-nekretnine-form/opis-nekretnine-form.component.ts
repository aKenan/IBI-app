import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AdminService } from '../../../../../services/adminService';
import { IOpisNekretnine, INekretninaOpisNekretnine } from '../../../../../models/nekretnina';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from '../../../../../services/generalService';

@Component({
  selector: 'opis-nekretnine-form',
  templateUrl: './opis-nekretnine-form.component.html',
  styleUrls: ['./opis-nekretnine-form.component.css']
})
export class OpisNekretnineFormComponent implements OnInit {
  @Input() model : any;
  @Output() dismiss : EventEmitter<any> = new EventEmitter();

  opisi: IOpisNekretnine[];
  opisNekretnineForm : FormGroup;
  showForm : boolean = false;
  constructor(private adminService: AdminService, private fb : FormBuilder, private gs: GeneralService) { }

  ngOnInit() {
    console.log('init frm');
    this.dajSveOpise();
    this.setForm(this.model);
  }

  dajSveOpise(){
    this.adminService.dajSveOpise().subscribe(
      data =>{
        this.opisi = data as IOpisNekretnine[];
      }
    )
  }

  get f() {return this.opisNekretnineForm.controls;}

  setForm(model: INekretninaOpisNekretnine){
    console.log("model child", model);

    this.opisNekretnineForm = this.fb.group({
      id: [model.id, Validators.required],
      nekretninaId : [model.nekretninaId],
      opisId : [model.opisId, Validators.required],
      vrijednost : [model.vrijednost, Validators.required],
      aktivan : [model.aktivan]
    })

    this.showForm = true;
  }

  dodajAzurirajOpis(){
    if(!this.opisNekretnineForm.valid){
      this.gs.setAllTouched(this.opisNekretnineForm);
    }
    else{
      if(this.f.id.value == 0)
      {
        this.adminService.dodajOpisZaNekretninu(this.opisNekretnineForm.value).subscribe(
          data =>{
                this.gs.showSuccess("Uspješno ste kreirali opis za nekretninu");
                this.dismiss.emit(data);
              }
        )
      }
      else{
        this.adminService.azurirajOpisZaNekretninu(this.opisNekretnineForm.value).subscribe(
          data =>{
                this.gs.showSuccess("Uspješno ste ažurirali opis za nekretninu");
                this.dismiss.emit(data);
              },
          error=>{
            console.log(error);
          }
        )
      }
      
    }
    
  }

}
