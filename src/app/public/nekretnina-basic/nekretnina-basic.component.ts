import { Component, OnInit, Input } from '@angular/core';
import { INekretninaBasic } from '../../../models/public';
import { PublicService } from '../../../services/publicService';

@Component({
  selector: 'nekretnina-basic',
  templateUrl: './nekretnina-basic.component.html',
  styleUrls: ['./nekretnina-basic.component.css']
})
export class NekretninaBasicComponent implements OnInit {
  @Input() nekretnina: INekretninaBasic;
  slikaContent: any;
  constructor(private publicService: PublicService) { }

  ngOnInit() {
    if(this.nekretnina.slika != null)
        this.publicService.postaviSadrzajSlike(this.nekretnina.slika).subscribe(
        data =>{
          this.slikaContent = data;
        }
      );
  }

}
