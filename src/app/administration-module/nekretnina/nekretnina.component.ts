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
  id: number = 0;
  titleText: string;
  nekretninaForm : FormGroup;
  tipoviNekretnine: ISifarnik[];
  statusiNekretnine: ISifarnik[];

  constructor(private router: Router, private ar: ActivatedRoute, private fb: FormBuilder, private adminService: AdminService, private gs: GeneralService) { 
    this.id = parseInt(this.ar.snapshot.paramMap.get("id"));
  }

  ngOnInit() {
    this.getSifarnike();
    this.titleText = this.id == 0 ? "Dodaj novu nekretninu" : "Ažuriraj nekretninu";
    this.setForm(null);
  }

  get f() {return this.nekretninaForm.controls};

  setForm(model : INekretnina){
    if(model == null){//kreiranje
      this.nekretninaForm = this.fb.group({
        id: [0, Validators.required],
        oznakaNekretnine: ['', [Validators.required]],
        naziv: ['', [Validators.required, Validators.minLength(5)]],
        opisKratko: ['', [Validators.required, Validators.minLength(5)]],
        opisDetaljno: ['', [Validators.required, Validators.minLength(5)]],
        adresa: [''],
        vaziOd: [new Date(), Validators.required],
        vaziDo: [''],
        tipNekretnine: new FormControl(null, [Validators.required]),
        statusNekretnine: new FormControl(null, [Validators.required]),
        prodaja: [false],
        najam: [false],
        lokacijaId: [22, Validators.required],
        aktivan: [false]
      })
    }
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
            }            
                     
          }
        )
      }
    }
  }


}
