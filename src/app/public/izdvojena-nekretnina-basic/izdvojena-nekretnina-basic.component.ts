import { Component, OnInit, Input } from '@angular/core';
import { INekretninaBasic } from '../../../models/public';
import { PublicService } from '../../../services/publicService';

@Component({
  selector: 'izdvojena-nekretnina-basic',
  templateUrl: './izdvojena-nekretnina-basic.component.html',
  styleUrls: ['./izdvojena-nekretnina-basic.component.css']
})
export class IzdvojenaNekretninaBasicComponent implements OnInit {
  @Input() nekretnina : INekretninaBasic;
  slikaContent:any;

  constructor(private publicService : PublicService) { }

  ngOnInit() {
    this.publicService.postaviSadrzajSlike(this.nekretnina.slika).subscribe(
      data =>{
        this.slikaContent = data;
      }
    );
  }


}
