import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { INekretnina } from '../../../models/nekretnina';
import { AdminService } from '../../../services/adminService';
import { ISifarnik } from '../../../models/sifarnik';
import {TipSifarnikaEnum, StatusNekretnine} from '../../../models/enums/enums'
import { GeneralService } from '../../../services/generalService';

@Component({
  selector: 'app-nekretnina',
  templateUrl: './nekretnina.component.html',
  styleUrls: ['./nekretnina.component.css']
})
export class NekretninaComponent implements OnInit {
  aktivniTab: number;

  id: number = 0;
  titleText: string;
  nekretnina : INekretnina = {id: 0, vaziOd: new Date(), prodaja:false, najam: false, aktivan:false};
  nekretninaForm : FormGroup;
  tipoviNekretnine: ISifarnik[];
  statusiNekretnine: ISifarnik[]; 

  constructor(private router: Router, private ar: ActivatedRoute, private fb: FormBuilder, private adminService: AdminService, private gs: GeneralService) { 
    this.id = parseInt(this.ar.snapshot.paramMap.get("id"));
  }

  ngOnInit() {
    this.getSifarnike();
    this.titleText = this.id == 0 ? "Dodaj novu nekretninu" : "Ažuriraj nekretninu";
    if(this.id > 0)
    {
      this.adminService.dajNekretninu(this.id).subscribe(
        data => {
          this.nekretnina = data;
          this.setForm(data);
        }
      )
    }
    else
      this.setForm(this.nekretnina);
  }

  get f() {return this.nekretninaForm.controls};

  aktivirajTab(tab: number){
    this.aktivniTab = tab;
  }

  setForm(model : INekretnina){
    //if(model == null){//kreiranje
      this.nekretninaForm = this.fb.group({
        id: [model.id, Validators.required],
        oznakaNekretnine: [model.oznakaNekretnine, [Validators.required]],
        naziv: [model.naziv, [Validators.required, Validators.minLength(5)]],
        opisKratko: [model.opisKratko, [Validators.required, Validators.minLength(5)]],
        opisDetaljno: [model.opisDetaljno, [Validators.required, Validators.minLength(5)]],
        adresa: [model.adresa],
        vaziOd: [model.vaziOd, Validators.required],
        vaziDo: [model.vaziDo],
        tipNekretnine: new FormControl(model.tipNekretnine, [Validators.required]),
        statusNekretnine: new FormControl(model.statusNekretnine, [Validators.required]),
        prodaja: [model.prodaja],
        najam: [model.najam],
        lokacijaId: [model.lokacijaId, Validators.required],
        aktivan: [model.aktivan]
      })
    //}else{

    //}
    this.aktivniTab = 1;
  }

  getSifarnike(){
    this.adminService.dajSveSifarnike().subscribe(
      data =>{
        this.tipoviNekretnine = (data as ISifarnik[]).filter(p=>p.tipSifarnikaId == TipSifarnikaEnum.TipNekretnine);
        this.statusiNekretnine = (data as ISifarnik[]).filter(p=>p.tipSifarnikaId == TipSifarnikaEnum.StatusNekretnine);
      }
    )
  }

  dodajAzurirajNekretninu() : any {
    console.log("NEKRETNINA FORMA: ", this.nekretninaForm.controls);
    if(!this.nekretninaForm.valid) {
      this.gs.setAllTouched(this.nekretninaForm);
    }
    else{
      if(this.f.id.value == 0) //nova nekretnina
      {
        this.adminService.dodajNekretninu(this.nekretninaForm.value).subscribe(
          data =>{
            let novaNekretnina = (data as INekretnina);

            if(novaNekretnina.id > 0)
            {
              this.gs.showSuccess("Uspješno ste kreirali nekretninu, nastavite sa postavkama...");
              this.router.navigate([`../IBIAdminPanel/nekretnina/${novaNekretnina.id}`]);     
              this.id = novaNekretnina.id;
            }            
                     
          }
        )
      }
      else{ //AZURIRANJE
        this.adminService.azurirajNekretninu(this.nekretninaForm.value).subscribe(
          data =>{
            let novaNekretnina = (data as INekretnina);

            if(novaNekretnina.id > 0)
            {
              this.gs.showSuccess("Uspješno ste azurirali nekretninu");                
            }            
                     
          }
        )
      }
    }
  }

  onLokacijaSelected(value:number) {
    this.nekretninaForm.controls.lokacijaId.setValue(value);
  }

}
