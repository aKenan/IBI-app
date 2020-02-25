import { Component, OnInit } from '@angular/core';
import { PublicService } from '../../../services/publicService';
import { INekretnina } from '../../../models/public';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nekretnina-form',
  templateUrl: './nekretnina-form.component.html',
  styleUrls: ['./nekretnina-form.component.css']
})
export class NekretninaFormComponent implements OnInit {
  nekretnina: INekretnina = {};
  id:number;

  constructor(private publicService: PublicService, private ar: ActivatedRoute) {
    this.id = parseInt(this.ar.snapshot.paramMap.get("id"));
   }

  ngOnInit() {
    this.dajNekretninu()
  }

  dajNekretninu(){
    this.publicService.dajNekretninu(this.id).subscribe(
      data=>{
        this.nekretnina = data;
      }
    )
  }

}
