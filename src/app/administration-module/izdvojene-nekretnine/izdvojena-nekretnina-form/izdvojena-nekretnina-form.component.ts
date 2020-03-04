import { Component, OnInit, Input } from '@angular/core';
import { IIzdvojenaNekretninaViewModel } from '../../../../models/nekretnina';
import { AdminService } from '../../../../services/adminService';
import { INekretnina } from '../../../../models/public';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'izdvojena-nekretnina-form',
  templateUrl: './izdvojena-nekretnina-form.component.html',
  styleUrls: ['./izdvojena-nekretnina-form.component.css']
})
export class IzdvojenaNekretninaFormComponent implements OnInit {
  @Input() nekretninaId : number;
  @Input() nova : boolean;

  izdvojenaNekretnina : IIzdvojenaNekretninaViewModel = {nekretninaId : this.nekretninaId, vaziOd : new Date(), aktivan:true};
  nekretnina : INekretnina;

  constructor(private adminService : AdminService, private fb : FormBuilder) { }

  ngOnInit() {
    if(!this.nova)
    {
      this.adminService.dajIzdvojenuNekretninu(this.nekretninaId).subscribe(
        data =>{
          this.izdvojenaNekretnina = data;
        }
      )
    } else{
      this.adminService.dajNekretninu(this.nekretninaId).subscribe(
        data =>{
          this.nekretnina = data;
        }
      )
    }
  }

  initForm(izdvojenaNekretnina : IIzdvojenaNekretninaViewModel){
      this.fb.group({
        nekretninaId: this.nekretninaId,
        vaziOd: [izdvojenaNekretnina.vaziOd],
        vaziDo: [izdvojenaNekretnina.vaziDo],
        aktivan : izdvojenaNekretnina.aktivan
      })
  }

}
